import React from 'react';
import axios from 'axios';
import styled, { css, keyframes } from 'styled-components';
import StarStatic from '../components/reviews_src/StarStatic';
import starIcon from '../../../images/empty_star.png';
import ComparisonModal from './ComparisonModal';
import ThumbnailCarousel from './ThumbnailCarousel';

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
transform: translate(${props => props.translatedX}px);
${StyledCard}:hover {
  box-shadow: 5px 5px 5px rgb(200, 200, 200);
}
`;
const StyledStarIcon = styled.div`
height: 30px;
width:30px;
position: absolute;
top: 0;
right: 0;
${StyledStarIcon}:hover {
  cursor: pointer;
  filter: invert(0.5);
}
`;
const StyledModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
z-index: 1;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.3);
`;
const StyledStarLine = styled.div`
display: grid;
grid-template-columns: auto 1fr;

`;
const StyledImageContainer = styled.section`
width: 100%;
height: 250px;
display: grid;
grid-template-rows: 3fr 2fr;
content-align: center;
`;
const StyledImg = styled.img`
width: 100%;
height: 250px;
${StyledImg}:hover {
  cursor: pointer;
}
`;
const StyledOtherImageContainer = styled.div`
display: grid;
padding-left: 2%;
padding-right: 2%;
position: relative;
background-color: rgb(230, 230, 230);
border-style: solid none solid none;
border-width: 2px;
bottom: 65px;
grid-row: 2;
grid-template-columns: 1fr 2fr 2fr 2fr 2fr 1fr;
grid-column-gap: 2%;
height: 57px;
width: auto;
animation: ${fadein} 0.4s;
`;
const StyledPriceLine = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`;
const StyledOldPrice = styled.div`
  color: red;
  text-decoration: line-through;
  margin-right: 2px;
`;

class RelatedProductCard extends React.Component {
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
      strikethroughPrice: 0,
      thumbnailCarouselShowingIndexes: [0, 1, 2, 3],
      thumbnailRightArrow: true,
      thumbnailLeftArrow: false
    };
    ;

    this.toggleModal = this.toggleModal.bind(this);
    this.handleInnerModalClick = this.handleInnerModalClick.bind(this);
    this.handleImageMouseOver = this.handleImageMouseOver.bind(this);
    this.handleImageMouseLeave = this.handleImageMouseLeave.bind(this);
    this.handleOtherImageClick = this.handleOtherImageClick.bind(this);
    this.checkIfThumbnailButtonsShouldRender = this.checkIfThumbnailButtonsShouldRender.bind(this);
    this.renderRightButtonForThumbnails = this.renderRightButtonForThumbnails.bind(this);
    this.renderLeftButtonForThumbnails = this.renderLeftButtonForThumbnails.bind(this);
    this.handleThumbnailCarouselRightButtonClick = this.handleThumbnailCarouselRightButtonClick.bind(this);
    this.handleThumbnailCarouselLeftButtonClick = this.handleThumbnailCarouselLeftButtonClick.bind(this);
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
        let otherStyles = styleData.data.results.slice();
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
        }, () => this.checkIfThumbnailButtonsShouldRender());
      })
      .catch((err) => {
        console.log('ERR Axios get styles from client', err);
      });
  }

  toggleModal() {
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  }

  handleInnerModalClick(event) {
    event.stopPropagation();
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

    if (this.state.styleSalePrices[clickedPhoto].salePrice !== null) {
      this.setState({
        photoUrl: clickedPhoto,
        strikethroughPrice: this.state.styleSalePrices[clickedPhoto].originalPrice,
        showingStylePrice: this.state.styleSalePrices[clickedPhoto].salePrice,
        salePriceExists: true
      });
    } else {
      this.setState({
        photoUrl: clickedPhoto,
        showingStylePrice: this.state.styleSalePrices[clickedPhoto].originalPrice,
        salePriceExists: false
      });
    }
  }

  checkIfThumbnailButtonsShouldRender() {
    this.renderRightButtonForThumbnails();
    this.renderLeftButtonForThumbnails();
  }

  renderRightButtonForThumbnails() {
    if (this.state.thumbnailCarouselShowingIndexes[3] >= this.state.otherUrls.length - 1) {
      this.setState({
        thumbnailRightArrow: false
      });
    } else {
      this.setState({
        thumbnailRightArrow: true
      });
    }
  }

  renderLeftButtonForThumbnails() {
    if (this.state.thumbnailCarouselShowingIndexes[0] === 0) {
      this.setState({
        thumbnailLeftArrow: false
      });
    } else {
      this.setState({
        thumbnailLeftArrow: true
      });
    }
  }

  handleThumbnailCarouselRightButtonClick() {
    let newIndexes = [];
    for (let i = 0; i < this.state.thumbnailCarouselShowingIndexes.length; i++) {
      newIndexes.push(this.state.thumbnailCarouselShowingIndexes[i] + 4);
    }
    this.setState({
      thumbnailCarouselShowingIndexes: newIndexes
    }, () => this.checkIfThumbnailButtonsShouldRender());
  }

  handleThumbnailCarouselLeftButtonClick() {
    let newIndexes = [];
    for (let i = 0; i < this.state.thumbnailCarouselShowingIndexes.length; i++) {
      newIndexes.push(this.state.thumbnailCarouselShowingIndexes[i] - 4);
    }
    this.setState({
      thumbnailCarouselShowingIndexes: newIndexes
    }, () => this.checkIfThumbnailButtonsShouldRender());
  }

  render() {
    return (
      <StyledCard translatedX={this.props.translatedX}>
        {this.state.modalShowing && (
          <StyledModalContainer onClick={this.toggleModal}>
            <ComparisonModal
              handleInnerModalClick={this.handleInnerModalClick}
              name={this.state.productData.name}
              cardCharacteristics={this.state.cardCharacteristics}
              currentProductData={this.props.currentProductData}
              currentRating={this.props.currentRating}
              currentCharacteristics={this.props.currentCharacteristics}
            />
          </StyledModalContainer>
        )}
        <StyledStarIcon onClick={this.toggleModal}>
          <img src={starIcon} width="100%" height="100%" />
        </StyledStarIcon>
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
                <ThumbnailCarousel
                  handleThumbnailCarouselRightButtonClick={this.handleThumbnailCarouselRightButtonClick}
                  handleThumbnailCarouselLeftButtonClick={this.handleThumbnailCarouselLeftButtonClick}
                  thumbnailRightArrow={this.state.thumbnailRightArrow}
                  thumbnailLeftArrow={this.state.thumbnailLeftArrow}
                  handleOtherImageClick={this.handleOtherImageClick}
                  otherUrls={this.state.otherUrls}
                  thumbnailCarouselShowingIndexes={this.state.thumbnailCarouselShowingIndexes}
                />
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
          <span text-align="left">({this.state.totalReviews})</span>
        </StyledStarLine>
      </StyledCard>
    );
  }
}

export default RelatedProductCard;