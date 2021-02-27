import React from 'react';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Related Products and Outfit </h3>
        <RelatedProductsCarousel />
        <br></br> {/* remove this when incorporating everyone's components */}
        <OutfitCarousel />
        <br></br> {/* remove this when incorporating everyone's components */}
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;
