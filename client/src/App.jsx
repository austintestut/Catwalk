import React from 'react';
import axios from 'axios';
import QuestionList from './AK/QuestionList.jsx';
import RelatedProductsAndOutfits from './AT/RelatedProductsAndOutfits';
import Reviews from './components/Reviews.jsx';
import Container from './AK/Container';
import Overview from './Overview/Overview';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPageItemId: 17450, // hard coded landing page

      relatedProductIds: [],
      productData: [],
      rating: 0,
      characteristics: [],
      totalReviews: 0
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRelatedItemIds = this.getRelatedItemIds.bind(this);
  }

  componentDidMount() {
    this.getProductInfo(this.state.currentPageItemId);
    this.getRating(this.state.currentPageItemId);
    this.getRelatedItemIds(this.state.currentPageItemId);
  }

  // fetch related items
  getRelatedItemIds(id) {
    axios.get(`/products/${id}/related`)
      .then((data) => {
        this.setState({
          relatedProductIds: data.data
        });
      })
      .catch((err) => {
        console.log('ERR Axios get product from client', err);
      });
  }


  // get the category, name, default price
  getProductInfo(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        this.setState({
          productData: data.data
        });
      })
      .catch((err) => {
        console.log('ERR Axios get product from client', err);
      });
  }

  //get rating
  getRating(id) {
    axios.get(`/reviews/meta/${id}`)
      .then((data) => {
        let ratings = data.data.ratings;
        let oneStars = ratings['1'] || 0;
        let twoStars = ratings['2'] || 0;
        let threeStars = ratings['3'] || 0;
        let fourStars = ratings['4'] || 0;
        let fiveStars = ratings['5'] || 0;

        let totalReviews = parseInt(oneStars) + parseInt(twoStars) + parseInt(threeStars) + parseInt(fourStars) + parseInt(fiveStars);

        let reviewStars = (oneStars * 1)
          + (twoStars * 2) + (threeStars * 3)
          + (fourStars * 4) + (fiveStars * 5);

        let rating = reviewStars / totalReviews;
        if (totalReviews === 0) {
          rating = 0;
        }
        this.setState({
          rating: rating,
          characteristics: data.data.characteristics,
          totalReviews: totalReviews
        });
      })
      .catch((err) => {
        console.log('ERR getting average star rating from client', err);
      });
  }

  handleItemClick(id) {
    this.setState({
      currentPageItemId: id
    });
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <Overview />
        <RelatedProductsAndOutfits
          currentPageItemId={this.state.currentPageItemId}
          handleItemClick={this.handleItemClick}
          relatedProductIds={this.state.relatedProductIds}
          productData={this.state.productData}
          rating={this.state.rating}
          characteristics={this.state.characteristics}
        />
        <Container />
        <Reviews />
      </div>
    );
  }
}

export default App;
