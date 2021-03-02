import React from 'react';
import styled from 'styled-components';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';

const StyledCarouselContainer = styled.div`
padding-left: 15%;
padding-right: 15%;
height: 226px;
overflow: hidden;
`

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [17762, 18025, 17763, 17858, 18076] // for testing
    };
  }

  // componentDidMount() {
  //   // this.getRelatedProductData(18025);
  // }

  // functions to:
  // get related product ID's when given product ID (lives in state)



  /*
   need to change this to take the ID from the currently displayed product and search that instead
   this is currently just pulling in normal data for a specific product
   this will give us name, desc, category, price
  */


  render() {
    return (
      <div>
        <h3>Related Products and Outfit </h3>
        <StyledCarouselContainer>
          <RelatedProductsCarousel relatedProductIds={this.state.relatedProductIds} relatedProductData={this.state.relatedProductData} productStyleData={this.state.productStyleData} />
        </StyledCarouselContainer>
        <br></br> {/* remove this when incorporating everyone's components */}
        <OutfitCarousel />
        <br></br> {/* remove this when incorporating everyone's components */}
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;
