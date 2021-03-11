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
      ratings: [],
      totalReviews: undefined,
      selectedStyle: '',
      selectedSize: '',
      sizeId: '',
    };

    this.getProduct = this.getProduct.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);

  }


  componentDidMount() {
    this.getProduct(17450);
    this.getStyles(17450);
    this.getReviewData(17450)
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

  getStyles(id) {
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

  getReviewData(id) {
    const getAvg = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
      }
      let whole = sum/arr.length;
      return (Math.round(whole * 4) / 4).toFixed(2)
    }

    axios.get(`/reviews/meta/${id}`)
      .then((res) => {
        this.setState({
          ratings: getAvg(Object.values(res.data.ratings)),
          totalReviews: Object.keys(res.data.ratings).length
        })
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleStyleSelect(event) {
    console.log(event.target);
    this.setState({
      selectedStyle: event.target.value
    });
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
          handleSelect={this.handleStyleSelect}
          />
        </Images>
        <SelectionContainer>
        <Info>
          <ProductInfo
          products={this.state.products}
          rating={this.state.ratings}
          reviews={this.state.totalReviews}
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