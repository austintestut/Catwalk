import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';
import LeftArrow from '../../../images/chevron-left.png';
import RightArrow from '../../../images/chevron-right.png';

const StyledCarouselContainer = styled.div`
font-family: Arial, Avenir;
padding-left: 5%;
padding-right: 5%;
display: grid;
grid-template-columns: 1fr 12fr 1fr;
overflow: hidden;
`;
const StyledLeftButton = styled.button`
height: 50px;
width: 50px;
position: relative;
top: 160px;
left: 45%;
background-image: url(${LeftArrow});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-color: transparent;
border-radius: 50%;
border-width: 2px;
font-size: 20px;
text-align: center;
transition: transform .3s;
${StyledLeftButton}:hover {
  filter: contrast(70%);
  cursor: pointer;
  box-shadow: 0 0 15px rgba(115, 13, 21, .5);
  transform: translate(-5px);
}
`;
const StyledRightButton = styled.button`
height: 50px;
width: 50px;
position: relative;
top: 160px;
left: 10%;
background-image: url(${RightArrow});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-color: transparent;
border-width: 1px;
font-size: 20px;
border-radius: 50%;
text-align: center;
transition: transform .3s;
${StyledRightButton}:hover {
  filter: contrast(70%);
  cursor: pointer;
  box-shadow: 0 0 15px rgba(115, 13, 21, .5);
  transform: translate(5px);
}
`;
const StyledHeader = styled.h3`
  font-family: Arial;
  padding-left: 12%;
  margin-bottom: -4px;
`;
const StyledLeftRelatedButtonContainer = styled.div`
${props => props.relatedLeftArrow && css`
z-index: 1;
box-shadow: 50px 0 17px 0 ` + props.shadeOfCarouselFade + `;
`};
`;
const StyledRightRelatedButtonContainer = styled.div`
${props => props.relatedRightArrow && css`
z-index: 1;
box-shadow: -50px 0 17px 0 ` + props.shadeOfCarouselFade + `;
`};
`;
const StyledRightOutfitButtonContainer = styled.div`
${props => props.outfitRightArrow && css`
z-index: 1;
box-shadow: -50px 0 17px 0 ` + props.shadeOfCarouselFade + `;
`};
`;
class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPageItemId: 0, // updated upon mount

      // currently showing products in carousel
      relatedCurrentlyShowingIndexes: [0, 1, 2, 3],
      outfitCurrentlyShowingIndexes: [0, 1, 2],

      // boolean for whether arrows are showing
      relatedLeftArrow: false,
      relatedRightArrow: true,

      outfitLeftArrow: false,
      outfitRightArrow: true,

      outfitProductIds: [],

      translatedXrp: 0,
      translatedXoutfit: 0
    };

    this.handleRelatedCarouselRight = this.handleRelatedCarouselRight.bind(this);
    this.handleRelatedCarouselLeft = this.handleRelatedCarouselLeft.bind(this);
    this.handleOutfitCarouselRight = this.handleOutfitCarouselRight.bind(this);
    this.handleOutfitCarouselLeft = this.handleOutfitCarouselLeft.bind(this);
    this.renderRightButtonToggleForRelatedProducts = this.renderRightButtonToggleForRelatedProducts.bind(this);
    this.renderRightButtonToggleForOutfit = this.renderRightButtonToggleForOutfit.bind(this);
    this.renderLeftButtonToggleForRelatedProducts = this.renderLeftButtonToggleForRelatedProducts.bind(this);
    this.renderLeftButtonToggleForOutfit = this.renderLeftButtonToggleForOutfit.bind(this);
    this.checkIfButtonsShouldRender = this.checkIfButtonsShouldRender.bind(this);
    this.getOutfitIds = this.getOutfitIds.bind(this);
  }

  componentDidMount() {
    this.getOutfitIds();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.relatedProductIds !== this.props.relatedProductIds) {
        this.renderRightButtonToggleForRelatedProducts();
    }
  }

  renderRightButtonToggleForRelatedProducts() {
    if (this.state.relatedCurrentlyShowingIndexes[3] >= this.props.relatedProductIds.length - 1) {
      this.setState({
        relatedRightArrow: false
      });
    } else {
      this.setState({
        relatedRightArrow: true
      });
    }
  }

  renderRightButtonToggleForOutfit() {
    if (this.state.outfitCurrentlyShowingIndexes[2] >= window.localStorage.length - 1) {
      this.setState({
        outfitRightArrow: false
      });
    } else {
      this.setState({
        outfitRightArrow: true
      });
    }
  }

  renderLeftButtonToggleForRelatedProducts() {
    if (this.state.relatedCurrentlyShowingIndexes[0] === 0) {
      this.setState({
        relatedLeftArrow: false
      });
    } else {
      this.setState({
        relatedLeftArrow: true
      });
    }
  }

  renderLeftButtonToggleForOutfit() {
    if (this.state.outfitCurrentlyShowingIndexes[0] === 0) {
      this.setState({
        outfitLeftArrow: false
      });
    } else {
      this.setState({
        outfitLeftArrow: true
      });
    }
  }

  checkIfButtonsShouldRender() {
    this.renderRightButtonToggleForRelatedProducts();
    this.renderRightButtonToggleForOutfit();
    this.renderLeftButtonToggleForRelatedProducts();
    this.renderLeftButtonToggleForOutfit();
  }

  // slide carousel to the right
  renderNextProduct(indexes) {
    for (let i = 0; i < indexes.length; i++) {
      indexes[i] += 1;
    }
    return indexes;
  }

  // slide carousel to the left
  renderPreviousProduct(indexes) {
    for (let i = 0; i < indexes.length; i++) {
      indexes[i] -= 1;
    }
    return indexes;
  }

  // Related Products Carousel button clicks
  handleRelatedCarouselRight() {
    this.setState({
      relatedCurrentlyShowingIndexes: this.renderNextProduct(this.state.relatedCurrentlyShowingIndexes),
      translatedXrp: this.state.translatedXrp - 288.25
    });
  }

  handleRelatedCarouselLeft() {
    this.setState({
      relatedCurrentlyShowingIndexes: this.renderPreviousProduct(this.state.relatedCurrentlyShowingIndexes),
      translatedXrp: this.state.translatedXrp + 288.25
    });
  }

  // Outfit Carousel button clicks
  handleOutfitCarouselRight() {
    this.setState({
      outfitCurrentlyShowingIndexes: this.renderNextProduct(this.state.outfitCurrentlyShowingIndexes),
      translatedXoutfit: this.state.translatedXoutfit - 288.25
    });
  }

  handleOutfitCarouselLeft() {
    this.setState({
      outfitCurrentlyShowingIndexes: this.renderPreviousProduct(this.state.outfitCurrentlyShowingIndexes),
      translatedXoutfit: this.state.translatedXoutfit + 288.25
    });
  }

  getOutfitIds() {
    let outfitProductIds = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      outfitProductIds.push(window.localStorage[window.localStorage.key(i)]);
    }
    this.setState({
      outfitProductIds: outfitProductIds
    }, () => {
      this.renderRightButtonToggleForOutfit();
    });
  }

  render() {
    return (
      <div>
        <StyledHeader>Related Products</StyledHeader>
        <StyledCarouselContainer>
          <StyledLeftRelatedButtonContainer shadeOfCarouselFade={this.props.shadeOfCarouselFade}
          relatedLeftArrow={this.state.relatedLeftArrow}>
            {this.state.relatedLeftArrow && <StyledLeftButton onClick={() => { this.handleRelatedCarouselLeft(); this.checkIfButtonsShouldRender(); }}></StyledLeftButton>}
          </StyledLeftRelatedButtonContainer>
          <RelatedProductsCarousel
            relatedProductIds={this.props.relatedProductIds}
            relatedCurrentlyShowingIndexes={this.state.relatedCurrentlyShowingIndexes}
            toggleModal={this.toggleModal}
            handleItemClick={this.props.handleItemClick}
            currentProductData={this.props.productData}
            currentRating={this.props.rating}
            currentCharacteristics={this.props.characteristics}
            translatedXrp={this.state.translatedXrp}
          />
          <StyledRightRelatedButtonContainer shadeOfCarouselFade={this.props.shadeOfCarouselFade}
          relatedRightArrow={this.state.relatedRightArrow}>
            {this.state.relatedRightArrow && (
              <StyledRightButton
                onClick={() => {
                  this.handleRelatedCarouselRight();
                  this.checkIfButtonsShouldRender();
                }} />
            )}
          </StyledRightRelatedButtonContainer>
        </StyledCarouselContainer>
        <StyledHeader>Your Outfit</StyledHeader>
        <StyledCarouselContainer>
          <div>
            {this.state.outfitLeftArrow && <StyledLeftButton onClick={() => { this.handleOutfitCarouselLeft(); this.checkIfButtonsShouldRender(); }}></StyledLeftButton>}
          </div>
          <OutfitCarousel
            outfitProductIds={this.state.outfitProductIds}
            outfitCurrentlyShowingIndexes={this.state.outfitCurrentlyShowingIndexes}
            getOutfitIds={this.getOutfitIds}
            currentPageItemId={this.props.currentPageItemId}
            handleItemClick={this.props.handleItemClick}
            checkIfButtonsShouldRender={this.checkIfButtonsShouldRender}
            translatedXoutfit={this.state.translatedXoutfit}
            outfitLeftArrow={this.state.outfitLeftArrow}
            shadeOfCarouselFade={this.props.shadeOfCarouselFade}
          />
          <StyledRightOutfitButtonContainer shadeOfCarouselFade={this.props.shadeOfCarouselFade}
          outfitRightArrow={this.state.outfitRightArrow}>
            {this.state.outfitRightArrow && (
              <StyledRightButton
                onClick={() => {
                  this.handleOutfitCarouselRight();
                  this.checkIfButtonsShouldRender();
                }} />
            )}
          </StyledRightOutfitButtonContainer>
        </StyledCarouselContainer>
        <br /> {/* remove this when incorporating everyone's components */}
        <br /> {/* remove this when incorporating everyone's components */}
        <br /> {/* remove this when incorporating everyone's components */}
        <br /> {/* remove this when incorporating everyone's components */}
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;
