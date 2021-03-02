import React from 'react';
import styled from 'styled-components';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';

const StyledCarouselContainer = styled.div`
padding-left: 15%;
padding-right: 15%;
display: grid;
grid-template-columns: 1fr 12fr 1fr;
`
const StyledLeftButton = styled.button`
height: 100%;
width: 100%;
`
const StyledRightButton = styled.button`
height: 100%;
width: 100%;
`

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [17762, 18025, 17763, 17858, 18076, 17068, 17069, 17070], // for testing
      outfitProductIds: [18076, 17858], // for testing

      // currently showing products in carousel
      relatedCurrentlyShowingIndexes: [0, 1, 2, 3],
      outfitCurrentlyShowingIndexes: [0, 1, 2, 3],

      // track first products for hiding left arrows MAY JUST BE ABLE TO USE INDEXES
      firstRelatedProductId: [17762], // for testing
      firstOutfitProductId: [18076], // for testing

      // tracks last products for hiding right arrows MAY JUST BE ABLE TO USE INDEXES
      lastRelatedProductId: [18076], // for testing
      lastOutfitProductId: [17858], // for testing

      // boolean for whether arrows are showing
      relatedLeftArrow: false,
      relatedRightArrow: true,

      outfitLeftArrow: false,
      outfitRightArrow: true

    };
    this.handleRelatedCarouselRight = this.handleRelatedCarouselRight.bind(this);
    this.handleRelatedCarouselLeft = this.handleRelatedCarouselLeft.bind(this);
    this.handleOutfitCarouselRight = this.handleOutfitCarouselRight.bind(this);
    this.handleOutfitCarouselLeft = this.handleOutfitCarouselLeft.bind(this);
  }

  // slide carousel to the right
  renderNextFourProducts(indexes) {
    for (let i = 0; i < indexes.length; i++) {
      indexes[i] += 4;
    }
    return indexes;
  }

  // slide carousel to the left
  renderPreviousFourProducts(indexes) {
    for (let i = 0; i < indexes.length; i++) {
      indexes[i] -= 4;
    }
    return indexes;
  }

  // Related Products Carousel button clicks
  handleRelatedCarouselRight() {
    this.setState({
      relatedCurrentlyShowingIndexes: this.renderNextFourProducts(this.state.relatedCurrentlyShowingIndexes)
    });
  }

  handleRelatedCarouselLeft() {
    this.setState({
      relatedCurrentlyShowingIndexes: this.renderPreviousFourProducts(this.state.relatedCurrentlyShowingIndexes)
    });
  }

  // Outfit Carousel button clicks
  handleOutfitCarouselRight() {
    this.setState({
      outfitCurrentlyShowingIndexes: this.renderNextFourProducts(this.state.outfitCurrentlyShowingIndexes)
    });
  }

  handleOutfitCarouselLeft() {
    this.setState({
      outfitCurrentlyShowingIndexes: this.renderPreviousFourProducts(this.state.outfitCurrentlyShowingIndexes)
    });
  }

  render() {
    return (
      <div>
        <h3>Related Products and Outfit </h3>
        <StyledCarouselContainer>
          <div>
            <StyledLeftButton onClick={this.handleRelatedCarouselLeft}></StyledLeftButton>
          </div>
          <RelatedProductsCarousel relatedProductIds={this.state.relatedProductIds} relatedProductData={this.state.relatedProductData} productStyleData={this.state.productStyleData} relatedCurrentlyShowingIndexes={this.state.relatedCurrentlyShowingIndexes} />
          <div>
            <StyledRightButton onClick={this.handleRelatedCarouselRight}></StyledRightButton>
          </div>
        </StyledCarouselContainer>
        <br></br> {/* remove this when incorporating everyone's components */}
        <StyledCarouselContainer>
          <div>
            <StyledLeftButton onClick={this.handleOutfitCarouselLeft}></StyledLeftButton>
          </div>
          <OutfitCarousel outfitProductIds={this.state.outfitProductIds} outfitCurrentlyShowingIndexes={this.state.outfitCurrentlyShowingIndexes}/>
          <div>
            <StyledRightButton onClick={this.handleOutfitCarouselRight}></StyledRightButton>
          </div>
        </StyledCarouselContainer>
        <br></br> {/* remove this when incorporating everyone's components */}
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;
