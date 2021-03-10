import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';
import Cart from './Cart.jsx';
import Description from './Description.jsx';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: {},
      styles: [],
      reviews: null,
      ratings: [],
      totalReviews: undefined,
      selectedStyle: '',
      selectedSize: '',
      sizeId: '',
    };
    this.getProduct = this.getProduct.bind(this);
    this.getStylish = this.getStylish.bind(this);

    this.getProducts = this.getProducts.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getRatingAndReviews = this.getRatingAndReviews.bind(this);
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);

  }


  componentDidMount() {
    this.getProduct(18025);
    //this.getProducts(18025);
    this.getStyles(18025);
    //this.getStylish(18025);
    //this.getRatingAndReviews(18025);
  }

  getProduct(id) {
    axios.get(`/products/${id}`)
      .then((res) => {
        this.setState({
          products: res.data
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getStylish(id) {
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        this.setState({
          styles: res.data.results
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getProducts(id) {
    const options = {headers: {'Authorization': ''}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, options)
      .then((res) => {
        this.setState({
          products: res.data
        }, ()=>{console.log(this.state.products)});
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getStyles(id) {
    const options = {headers: {'Authorization': ''}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, options)
      .then((res) => {
        this.setState({
          styles: res.data.results
        }, ()=>{console.log(this.state.styles)});
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
    const options = {headers: {'Authorization': ''}}
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
    }, ()=>{console.log(this.state.selectedStyle)});
  }

  handleSizeSelect(event, id) {
    this.setState({
      selectedSize: event.target.value,
      sizeId: id
    })
  }

  render() {
    return (
      <>
      <OverviewMain>
        <Images>
          <ImageGallery
          selected={this.state.selectedStyle}
          />
        </Images>
        <SelectionContainer>
        <Info>
          <ProductInfo
          products={this.state.products}
          reviews={this.state.reviews}
          styles={this.state.styles}
          selected={this.state.selectedStyle}
          handleSelect={this.handleStyleSelect}
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
        </SelectionContainer>
        <StyledDesc>
          <Description
          products={this.state.products}
          />
        </StyledDesc>

      </OverviewMain>
      </>
    )
  }
}

const OverviewMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10%;
`
const SelectionContainer = styled.div`
 display: flex;
 flex-direction: column;
 flex-grow: 3;
 order: 2;
`
const Images = styled.div`
  display: flex;
  order: 1;
  flex-grow: 1;
`
const Info = styled.div`
  display: flex;
  flex-grow: 3;
`
const StyledCart = styled.div`
  display: flex;
  height: 25%;
`
const StyledDesc = styled.div`
  display: flex;
  order: 3;
  flex-grow: 2;
`
export default Overview;