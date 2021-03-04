import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import testStyles from './testStyles.js';
import testReview from './testReview.js';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';
import Thumbnails from './Thumbnails.jsx';

const GridStyling = styled.div`
  display: grid;
  grid-template-areas:
    ". head ."
    "small main nav"
    ". . foot";
`
const Header = styled.div`
  grid-area: head;
  text-align: center;
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
const StyledThumbs = styled.div`
  grid-area: small;
`

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      styles: [],
      reviews: testReview,
      ratings: [],
      totalReviews: undefined,
      selectedStlye: null,
      selectedSize: '',
      sizeId: '',
    };
    this.getProducts = this.getProducts.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRatingAndReviews = this.getRatingAndReviews.bind(this);
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    this.getProducts(18025);

    // Here to test functionality
    this.getStyles(18025);
    //this.getRatingAndReviews(18025);
  }


  getProducts(id) {
    const options = {headers: {'Authorization': '51ed293eb79916493e9134ed9ca3d9940d0e4651'}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options)
      .then((res) => {
        this.setState({
          products: res.data
        }, ()=>{console.log('Product:', this.state.products)});
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getStyles(id) {
    const options = {headers: {'Authorization': '51ed293eb79916493e9134ed9ca3d9940d0e4651'}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, options)
      .then((res) => {
        this.setState({
          styles: res.data.results
        }, ()=>{console.log('Styles:', this.state.styles)});
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

  handleStyleSelect(event) {
    this.setState({
      selectedStyle: event.target.value
    });
  }

  handleSizeSelect(event, id) {
    //console.log('event:', event.target.value)
    this.setState({
      selectedSize: event.target.value,
      sizeId: id
    })
  }

  handleChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <GridStyling>
        <Header>OVERVIEW</Header>
        <Images>
          <ImageGallery
          styles={this.state.styles}
          selected={this.state.selectedStyle}
          />
          </Images>
        <StyledThumbs>
          <Thumbnails
          handleSelect={this.handleStyleSelect}
          styles={this.state.styles}
          />
        </StyledThumbs>
        <Info>
          <ProductInfo
          products={this.state.products}
          reviews={this.state.reviews}
          styles={this.state.styles}
          selected={this.state.selectedStyle}
          />
        </Info>
        <StyledCart>
          <Cart
          styles={this.state.styles}
          selected={this.state.selectedStyle}
          selectedSize={this.state.selectedSize}
          handleSize={this.handleSizeSelect}
          />
        </StyledCart>
      </GridStyling>
    )
  }
}

export default Overview;