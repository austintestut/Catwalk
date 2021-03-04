import React from 'react';
import styled from 'styled-components';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';
import ComparisonModal from './ComparisonModal';

const StyledCarouselContainer = styled.div`
padding-left: 15%;
padding-right: 15%;
display: grid;
grid-template-columns: 1fr 12fr 1fr;
`
const StyledLeftButton = styled.button`
height: 270px;
width: 100%;
position: relative;
top: 18px;
background-image: linear-gradient(to left, rgb(255, 255, 255), rgba(217, 217, 217, 1));
border: none;
`
const StyledRightButton = styled.button`
height: 270px;
width: 100%;
position: relative;
top: 18px;
background-image: linear-gradient(to right, rgb(255, 255, 255), rgba(217, 217, 217, 1));
border: none;
`

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currently showing products in carousel
      relatedCurrentlyShowingIndexes: [0, 1, 2, 3],
      outfitCurrentlyShowingIndexes: [0, 1, 2, 3],

      // track first products for hiding left arrows MAY JUST BE ABLE TO USE INDEXES
      firstRelatedProductId: 17762, // for testing
      firstOutfitProductId: 18076, // for testing

      // tracks last products for hiding right arrows MAY JUST BE ABLE TO USE INDEXES
      lastRelatedProductId: 17070, // for testing
      lastOutfitProductId: 17858, // for testing

      // boolean for whether arrows are showing
      relatedLeftArrow: false,
      relatedRightArrow: true,

      outfitLeftArrow: false,
      outfitRightArrow: true,
    };

    this.relatedProductIds = [17762, 18025, 17763, 17858, 18076, 17068, 17069, 17070]; // for testing
    this.outfitProductIds = [18076, 17858]; // for testing

    this.handleRelatedCarouselRight = this.handleRelatedCarouselRight.bind(this);
    this.handleRelatedCarouselLeft = this.handleRelatedCarouselLeft.bind(this);
    this.handleOutfitCarouselRight = this.handleOutfitCarouselRight.bind(this);
    this.handleOutfitCarouselLeft = this.handleOutfitCarouselLeft.bind(this);
    this.renderRightButtonToggleForRelatedProducts = this.renderRightButtonToggleForRelatedProducts.bind(this);
    this.renderRightButtonToggleForOutfit = this.renderRightButtonToggleForOutfit.bind(this);
    this.renderLeftButtonToggleForRelatedProducts = this.renderLeftButtonToggleForRelatedProducts.bind(this);
    this.renderLeftButtonToggleForOutfit = this.renderLeftButtonToggleForOutfit.bind(this);
    this.checkIfButtonsShouldRender = this.checkIfButtonsShouldRender.bind(this);
  }

  componentDidMount() {
    this.renderRightButtonToggleForRelatedProducts();
    this.renderRightButtonToggleForOutfit();
  }

  renderRightButtonToggleForRelatedProducts() {
    if (this.state.relatedCurrentlyShowingIndexes[3] >= this.relatedProductIds.length - 1) {
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
    if (this.state.outfitCurrentlyShowingIndexes[3] >= this.outfitProductIds.length - 1) {
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
      relatedCurrentlyShowingIndexes: this.renderNextProduct(this.state.relatedCurrentlyShowingIndexes)
    });
  }

  handleRelatedCarouselLeft() {
    this.setState({
      relatedCurrentlyShowingIndexes: this.renderPreviousProduct(this.state.relatedCurrentlyShowingIndexes)
    });
  }

  // Outfit Carousel button clicks
  handleOutfitCarouselRight() {
    this.setState({
      outfitCurrentlyShowingIndexes: this.renderNextProduct(this.state.outfitCurrentlyShowingIndexes)
    });
  }

  handleOutfitCarouselLeft() {
    this.setState({
      outfitCurrentlyShowingIndexes: this.renderPreviousProduct(this.state.outfitCurrentlyShowingIndexes)
    });
  }

  render() {
    return (
      <div>
        <h3>Related Products and Outfit </h3>
        <StyledCarouselContainer>

          <div>
            {this.state.relatedLeftArrow && <StyledLeftButton onClick={() => { this.handleRelatedCarouselLeft(); this.checkIfButtonsShouldRender(); }}>{'<'}</StyledLeftButton>}
          </div>
          <RelatedProductsCarousel
            relatedProductIds={this.relatedProductIds}
            relatedProductData={this.state.relatedProductData}
            productStyleData={this.state.productStyleData}
            relatedCurrentlyShowingIndexes={this.state.relatedCurrentlyShowingIndexes}
            toggleModal={this.toggleModal}
          />
          <div>
            {this.state.relatedRightArrow && <StyledRightButton onClick={() => { this.handleRelatedCarouselRight(); this.checkIfButtonsShouldRender(); }}>{'>'}</StyledRightButton>}
          </div>
        </StyledCarouselContainer >
        <br></br> {/* remove this when incorporating everyone's components */}
        <StyledCarouselContainer>
          <div>
            {this.state.outfitLeftArrow && <StyledLeftButton onClick={() => { this.handleOutfitCarouselLeft(); this.checkIfButtonsShouldRender(); }}>{'<'}</StyledLeftButton>}
          </div>
          <OutfitCarousel
            outfitProductIds={this.outfitProductIds}
            outfitCurrentlyShowingIndexes={this.state.outfitCurrentlyShowingIndexes}
          />
          <div>
            {this.state.outfitRightArrow && (
              <StyledRightButton
                onClick={() => {
                  this.handleOutfitCarouselRight();
                  this.checkIfButtonsShouldRender();
                }}
              >
                {'>'}
              </StyledRightButton>
            )}
          </div>
        </StyledCarouselContainer>
        <br></br> {/* remove this when incorporating everyone's components */}
      </div >
    )
  }
}

export default RelatedProductsAndOutfits;
