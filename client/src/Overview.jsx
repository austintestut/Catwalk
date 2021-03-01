import React from 'react';
import axios from 'axios';

import testStyles from './testStyles.js';
import testReview from './testReview.js';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      styles: testStyles,
      reviews: testReview,
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }


  getProducts() {
    const options = {headers: {'Authorization': '51ed293eb79916493e9134ed9ca3d9940d0e4651'}}
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', options)
      .then((res) => {
        this.setState({
          products: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <h1>OVERVIEW</h1>
        <div><ProductInfo products={this.state.products} reviews={this.state.reviews} styles={this.state.styles}/></div>
        <div><Cart /></div>
        <ImageGallery images={this.state.stlyes} />
      </div>
    )
  }
}

export default Overview;