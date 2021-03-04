import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import StarStatic from '.././components/reviews_src/StarStatic.jsx';
import starIcon from '../../../images/empty_star.png';
import ComparisonModal from './ComparisonModal';

const StyledCard = styled.div`
border-style: solid;
border-width: 3px;
border-radius: 5px;
position: relative;
`
const StyledStar = styled.div`
height: 20px;
width:20px;
position: absolute;
top:0;
right: 0;
`
const StyledModalContainer = styled.div`
position: fixed;
left: 0;
top: 0;
z-index: 1;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0,0,0,0.3);
`
const StyledStarLine = styled.div`
display: grid;
grid-template-columns: 5fr 4fr;
`
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
      totalReviews: 0
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleInnerModalClick = this.handleInnerModalClick.bind(this);
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
          productData: data.data
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
        let otherUrls = styleData.data.results.slice(1, this.length);
        this.setState({
          photoUrl: styleData.data.results[0].photos[0].thumbnail_url,
          otherUrls: otherUrls
        });
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

  render() {
    return (
      <StyledCard>
        {this.state.modalShowing && (
          <StyledModalContainer onClick={this.toggleModal}>
            <ComparisonModal
              handleInnerModalClick={this.handleInnerModalClick}
              name={this.state.productData.name}
              cardCharacteristics={this.state.cardCharacteristics}
            />
          </StyledModalContainer>
        )}
        <StyledStar onClick={this.toggleModal}>
          <img src={starIcon} width="100%" height="100%" />
        </StyledStar>
        <img src={this.state.photoUrl} alt={this.state.productData.name} width="100%" height="150"></img>
        <div>{this.state.productData.category}</div>
        <div>{this.state.productData.name}</div>
        <div>{this.state.productData.default_price}</div>
        <StyledStarLine>
          <div><StarStatic number={this.state.rating} /></div>
          ({this.state.totalReviews})
        </StyledStarLine>
      </StyledCard>
    );
  }
};

export default RelatedProductCard;