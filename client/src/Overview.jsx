import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import testStyles from './testStyles.js';
import testReview from './testReview.js';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';


const GridStyling = styled.div`
  display: grid;
  grid-template-areas:
    "head head"
    "main nav"
    ". foot";
`
const Header = styled.div`
  grid-area: head;
`
const Images = styled.div`
  grid-area: main;
`
const Info = styled.div`
  grid-area: nav;
`
const StyledCart = styled.div`
  grid-area: foot;
`

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      styles: testStyles,
      displayStyles: [],
      reviews: testReview,
      ratings: [],
      totalReviews: undefined,
      display: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRatingAndReviews = this.getRatingAndReviews.bind(this);
  }

  componentDidMount() {
    this.getProducts();

    // Here to test functionality
    //this.getStyles(18025);
    //this.getRatingAndReviews(18025);
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

// Errors out occasionaly due to async
  getStyles(id) {
    const options = {headers: {'Authorization': '51ed293eb79916493e9134ed9ca3d9940d0e4651'}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, options)
      .then((res) => {
        this.setState({
          styles: res.data.results
        });
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getRatingAndReviews(id) {
    const getAvg = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
      }
      let whole = sum/arr.length;
      return (Math.round(whole * 4) / 4).toFixed(2)
    }
    const options = {headers: {'Authorization': '51ed293eb79916493e9134ed9ca3d9940d0e4651'}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${id}`, options)
      .then((res) => {
        this.setState({
          ratings: getAvg(Object.values(res.data.ratings)),
          totalReviews: Object.keys(res.data.ratings).length
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    return (
      <GridStyling>
        <Header>OVERVIEW</Header>
        <Images><ImageGallery styles={this.state.styles} /></Images>
        <Info><ProductInfo products={this.state.products} reviews={this.state.reviews} styles={this.state.styles}/></Info>
        <StyledCart><Cart /></StyledCart>
      </GridStyling>
    )
  }
}

export default Overview;