import React from 'react';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';


class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductData: [],
      productStyleData: []
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
        <RelatedProductsCarousel relatedProductData={this.state.relatedProductData} productStyleData={this.state.productStyleData}/>
        <br></br> {/* remove this when incorporating everyone's components */}
        <OutfitCarousel />
        <br></br> {/* remove this when incorporating everyone's components */}
      </div>
    )
  }
}

export default RelatedProductsAndOutfits;
