import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
border-style: solid;
border-width: 3px;
`

class OutfitCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '',
      productData: [],
      rating: 0
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
  }
  // make ajax request for each of those ID's, put data in state
  // (probably going to have to make each card in carousel stateful)
  // and make those ajax requests there

  componentDidMount() {
    this.getProductInfo(this.props.productId);
    this.getPhotoUrl(this.props.productId);
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
          rating: rating.toFixed(1)
        });
      })
      .catch((err) => {
        console.log('ERR getting average star rating from client', err);
      });
  }

  //get the photo url
  getPhotoUrl(id) {
    axios.get(`/products/${id}/styles`)
      .then((styleData) => {
        this.setState({
          photoUrl: styleData.data.results[0].photos[0].thumbnail_url
        });
      })
      .catch((err) => {
        console.log('ERR Axios get styles from client', err);
      });
  }


  render() {
    return (
      <StyledCard>
        <img src={this.state.photoUrl} alt={this.state.productData.name} width="100%" height="150"></img>
        <div>{this.state.productData.category}</div>
        <div>{this.state.productData.name}</div>
        <div>{this.state.productData.default_price}</div>
        <div>star rating: {this.state.rating} out of 5</div>
      </StyledCard>
    );
  }
};

export default OutfitCard;