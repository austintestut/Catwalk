import React from 'react';
import axios from 'axios';
import styled, { css, keyframes } from 'styled-components';
import StarStatic from '.././components/reviews_src/StarStatic.jsx'
import xIcon from '../../../images/circle_x.png';

const fadein = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const StyledCard = styled.div`
border-style: solid;
border-width: 3px;
border-radius: 5px;
position: relative;
${StyledCard}:hover {
  box-shadow: 5px 5px 2px rgb(200, 200, 200);
}
`;
const StyledX = styled.div`
height: 30px;
width:30px;
position: absolute;
top: 0;
right: 0;
filter: invert(1);
${StyledX}:hover {
  cursor: pointer;
  filter: invert(0.5);
`;
const StyledStarLine = styled.div`
display: grid;
grid-template-columns: auto 1fr;
`;
const StyledImageContainer = styled.section`
width: 100%;
height: 200px;
display: grid;
grid-template-rows: 3fr 2fr;
content-align: center;
`;
const StyledImg = styled.img`
width: 100%;
height: 200px;
${StyledImg}:hover {
  cursor: pointer;
}
`;
const StyledOtherImageContainer = styled.div`
display: grid;
padding-left: 2%;
padding-right: 2%;
grid-row: 2;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-column-gap: 2%;
height: 57px;
width: auto;
animation: ${fadein} 0.4s;
`;
const StyledOtherImage = styled.img`
position: relative;
bottom: 66px;
height: 50px;
width: 50px;
border: solid;
border-color: white;
border-width: 2px;
${StyledOtherImage}:hover {
  cursor: pointer;
}
`;
const StyledPriceLine = styled.div`
display: grid;
grid-template-columns: auto 1fr;
`;
const StyledOldPrice = styled.div`
  color: red;
  text-decoration: line-through;
`;

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '',
      productData: [],
      rating: 0,
      otherUrls: [],
      cardCharacteristics: {},
      // comparison modal showing or not
      modalShowing: false,
      totalReviews: 0,
      otherImagesShowing: false,
      styleSalePrices: {},
      showingStylePrice: 0,
      salePriceExists: false,
      strikethroughPrice: 0
    };
    this.handleImageMouseOver = this.handleImageMouseOver.bind(this);
    this.handleImageMouseLeave = this.handleImageMouseLeave.bind(this);
    this.handleOtherImageClick = this.handleOtherImageClick.bind(this);
  }

  componentDidMount() {
    this.getProductInfo(this.props.productId);
    this.getPhotoUrls(this.props.productId);
    this.getRating(this.props.productId);
  }

  // get the category, name, default price
  getProductInfo(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        this.setState({
          productData: data.data,
          showingStylePrice: data.data.default_price
        });
      })
      .catch((err) => {
        console.log('ERR Axios get product from client', err);
      });
  }

  //get rating
  getRating(id) {
    axios.get(`/reviews/meta/${id}`)
      .then((data) => {
        let ratings = data.data.ratings;
        let oneStars = ratings['1'] || 0;
        let twoStars = ratings['2'] || 0;
        let threeStars = ratings['3'] || 0;
        let fourStars = ratings['4'] || 0;
        let fiveStars = ratings['5'] || 0;

        let totalReviews = parseInt(oneStars) + parseInt(twoStars) + parseInt(threeStars) + parseInt(fourStars) + parseInt(fiveStars);

        let reviewStars = (oneStars * 1)
          + (twoStars * 2) + (threeStars * 3)
          + (fourStars * 4) + (fiveStars * 5);

        let rating = reviewStars / totalReviews;
        if (totalReviews === 0) {
          rating = 0;
        }
        this.setState({
          rating: rating,
          cardCharacteristics: data.data.characteristics,
          totalReviews: totalReviews
        });
      })
      .catch((err) => {
        console.log('ERR getting average star rating from client', err);
      });
  }

  //get the photo url
  getPhotoUrls(id) {
    axios.get(`/products/${id}/styles`)
      .then((styleData) => {
        let otherStyles = styleData.data.results.slice(1, this.length);
        let otherUrls = otherStyles.map((style) => (style.photos[0].thumbnail_url));
        let styleSalePrices = {};
        otherStyles.map((style) => {
          styleSalePrices[style.photos[0].thumbnail_url] = {
            originalPrice: style.original_price,
            salePrice: style.sale_price
          };
        });
        this.setState({
          photoUrl: styleData.data.results[0].photos[0].thumbnail_url,
          otherUrls: otherUrls,
          styleSalePrices: styleSalePrices
        });
      })
      .catch((err) => {
        console.log('ERR Axios get styles from client', err);
      });
  }

  handleImageMouseOver() {
    this.setState({
      otherImagesShowing: true
    });
  }

  handleImageMouseLeave() {
    this.setState({
      otherImagesShowing: false
    });
  }

  handleOtherImageClick(index) {
    let clickedPhoto = this.state.otherUrls[index];
    let showingPhoto = this.state.photoUrl;
    let newOtherUrls = this.state.otherUrls;

    newOtherUrls.splice(index, 1, showingPhoto);

    if (this.state.styleSalePrices[clickedPhoto].salePrice !== null) {
      this.setState({
        photoUrl: clickedPhoto,
        otherUrls: newOtherUrls,
        strikethroughPrice: this.state.styleSalePrices[clickedPhoto].originalPrice,
        showingStylePrice: this.state.styleSalePrices[clickedPhoto].salePrice,
        salePriceExists: true
      });
    } else {
      this.setState({
        photoUrl: clickedPhoto,
        otherUrls: newOtherUrls,
        showingStylePrice: this.state.styleSalePrices[clickedPhoto].originalPrice,
        salePriceExists: false
      });
    }
  }

  removeOutfitItem(id) {
    window.localStorage.removeItem(`id: ${id}`);
    this.props.getOutfitIds();
    this.props.checkIfButtonsShouldRender();
  };

  render() {
    return (
      <StyledCard>
        <StyledX onClick={() => this.removeOutfitItem(this.props.productId)}>
          <img src={xIcon} width="100%" height="100%" />
        </StyledX>
        <StyledImageContainer
          onMouseOver={this.handleImageMouseOver}
          onMouseLeave={this.handleImageMouseLeave}
        >
          <div onClick={() => this.props.handleItemClick(this.props.productId)}>
            <StyledImg src={this.state.photoUrl} alt={this.state.productData.name} />
          </div>
          <div>
            {this.state.otherImagesShowing && (
              <StyledOtherImageContainer>
                <StyledOtherImage src={this.state.otherUrls[0]} onClick={() => this.handleOtherImageClick(0)} />
                <StyledOtherImage src={this.state.otherUrls[1]} onClick={() => this.handleOtherImageClick(1)} />
                <StyledOtherImage src={this.state.otherUrls[2]} onClick={() => this.handleOtherImageClick(2)} />
                <StyledOtherImage src={this.state.otherUrls[3]} onClick={() => this.handleOtherImageClick(3)} />
              </StyledOtherImageContainer>
            )}
          </div>
        </StyledImageContainer>
        <div>{this.state.productData.category}</div>
        <div>{this.state.productData.name}</div>
        <StyledPriceLine>
          {this.state.salePriceExists && <StyledOldPrice>${this.state.strikethroughPrice}</StyledOldPrice>}
          <div>${this.state.showingStylePrice}</div>
        </StyledPriceLine>
        <StyledStarLine>
          <div><StarStatic number={this.state.rating} /></div>
          ({this.state.totalReviews})
        </StyledStarLine>
      </StyledCard>
    );
  }
}

export default OutfitCard;