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
      selectedStyle: '',
      selectedSize: '',
      sizeId: '',
    };

    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);

  }

  handleStyleSelect(event) {
    if (this.selectedStyle !== '') {
      this.setState({
        selectedStyle: ''
      }, ()=>{
        this.setState({
          selectedStyle: event.target.value
        })
      })
    } else {
      this.setState({
        selectedStyle: event.target.value
      })
    }
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
          styles={this.props.styles}
          selected={this.state.selectedStyle}
          handleSelect={this.handleStyleSelect}
          mainPics={this.props.mainPics}
          thumbs={this.props.thumbs}
          />
        </Images>
        <SelectionContainer>
        <Info>
          <ProductInfo
          product={this.props.product}
          rating={this.props.rating}
          reviews={this.props.reviews}
          styles={this.props.styles}
          selected={this.state.selectedStyle}
          handleSelect={this.handleStyleSelect}
          />
        </Info>
        <StyledCart>
          <Cart
          styles={this.props.styles}
          selected={this.state.selectedStyle}
          selectedSize={this.state.selectedSize}
          handleSize={this.handleSizeSelect}
          />
        </StyledCart>
        </SelectionContainer>
        <StyledDesc>
          <Description
          product={this.props.product}
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
 flex-grow: 1;
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