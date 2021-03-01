import React from 'react';
import axios from 'axios';
import TOKEN from '../../../config';

class RelatedProductCard extends React.Component {
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
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, {
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((data) => {
        this.setState({
          productData: data.data
        });
      })
      .catch((err) => {
        console.log('ERR Axios request for product');
      });
  }

  //get rating
  getRating(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${id}`, {
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((data) => {
        let ratings = data.data.ratings;

        let reviewStars = (ratings['1'] * 1)
        + (ratings['2'] * 2) + (ratings['3'] * 3)
        + (ratings['4'] * 4) + (ratings['5'] * 5);

        let totalReviews = parseInt(ratings['1'])
        + parseInt(ratings['2']) + parseInt(ratings['3'])
        + parseInt(ratings['4']) + parseInt(ratings['5']);

        let rating = reviewStars / totalReviews;

        this.setState({
          rating: rating.toFixed(1)
        });
      })
      .catch((err) => {
        console.log('ERR getting average star rating');
      });
  }

  //get the photo url
  getPhotoUrl(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, {
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((styleData) => {
        this.setState({
          photoUrl: styleData.data.results[0].photos[0].thumbnail_url
        });
      })
      .catch((err) => {
        console.log('ERR Axios request for styles');
      });
  }


  render() {
    return (
      <div>
        <img src={this.state.photoUrl} alt="test pic" width="150" height="150"></img>
        <div>{this.state.productData.category}</div>
        <div>{this.state.productData.name}</div>
        <div>{this.state.productData.default_price}</div>
        <div>star rating: {this.state.rating} out of 5</div>
      </div>
    );
  }
};

export default RelatedProductCard;