import React from 'react';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';
import axios from 'axios';
import TOKEN from '/config.js';

class RelatedProductsAndOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductData: [],
      productStyleData: []
    };
  }

  componentDidMount() {
    this.getRelatedProductData(18025);
  }

  /*
   need to change this to take the ID from the currently displayed product and search that instead
   this is currently just pulling in normal data for a specific product
   this will give us name, desc, category, price
  */
  getRelatedProductData(id) {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, {
      headers: {
        'Authorization': TOKEN
      }
    })
      .then((data) => {
        this.setState({
          relatedProductData: data.data
        });
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, {
          headers: {
            'Authorization': TOKEN
          }
        })
          .then((styleData) => {
            this.setState({
              productStyleData: styleData.data
            });
          })
          .catch((err) => {
            console.log('ERR Axios request for styles');
          });
      })
      .catch((err) => {
        console.log('ERR Axios request for product');
      });
  }

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
