import React from 'react';
import axios from 'axios';
import TOKEN from '../../../config.js';

class RelatedProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '',
      productData: []
    };
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getPhotoUrl = this.getPhotoUrl.bind(this);
  }
  // make ajax request for each of those ID's, put data in state
  // (probably going to have to make each card in carousel stateful)
  // and make those ajax requests there

  componentDidMount() {
    this.getProductInfo(17762);
  }
  // productStyleData.results[0].photos[0].thumbnail_url;
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
        this.getPhotoUrl(id);
      })
      .catch((err) => {
        console.log('ERR Axios request for product');
      });
  }

  //get rating
  getRating(id) {

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
        <div>star rating</div>
      </div>
    );
  }
};

export default RelatedProductCard;