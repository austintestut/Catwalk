import React from 'react';
import axios from 'axios';
import QuestionList from './AK/QuestionList.jsx';
import RelatedProductsAndOutfits from './AT/RelatedProductsAndOutfits';
import Reviews from './components/Reviews.jsx';
import Container from './AK/Container';
import Overview from './Overview/Overview';
import styled from 'styled-components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPageItemId: 17450, // hard coded landing page
      questions: [],
      relatedProductIds: [],
      productData: {},
      rating: 0,
      characteristics: [],
      totalReviews: 0,
      shadeOfCarouselFade: 'white'
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRelatedItemIds = this.getRelatedItemIds.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.fetcher = this.fetcher.bind(this);
    this.darkToggle = this.darkToggle.bind(this);
  }

  componentDidMount() {
    this.fetcher();
  }

  // add any axios requests here
  fetcher() {
    this.getProductInfo(this.state.currentPageItemId);
    this.getRating(this.state.currentPageItemId);
    this.getRelatedItemIds(this.state.currentPageItemId);
    this.getProductQuestions();
  }

  getProductQuestions() {
    // will need to change the ID parameter below to be dynamic, maybe use params obj
    axios({
      url: `/questions/${this.state.currentPageItemId}`,
      method: 'get',
    })
      .then((data) => {
        this.setState({ questions: data.data.results });
      });
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
    }, () => {
      this.fetcher();
    });
  }

  darkToggle() {
    let app = document.getElementById('app');
    if (app.classList.contains('darkmode')) {
      app.classList.toggle('darkmode');
      this.setState({
        shadeOfCarouselFade: 'white'
      });
    } else {
      app.classList.toggle('darkmode');
      this.setState({
        shadeOfCarouselFade: 'black'
      });
    }
  }

  render() {
    return (
      <div>
        <TopBar>
        <TitleP>Wozniak</TitleP>
          <p style={{fontFamily: 'Courier New '}}>by Alex Shold, Austin Testut, Austin Elwell, and Robert Strange</p>
        </TopBar>
        <StyledDarkModeButton onClick={this.darkToggle}>Toggle Dark Mode</StyledDarkModeButton>
        <br />
        <br />
        <Overview
        product={this.state.productData}
        rating={this.state.rating}
        reviews={this.state.totalReviews}
        />
        <RelatedProductsAndOutfits
          currentPageItemId={this.state.currentPageItemId}
          handleItemClick={this.handleItemClick}
          relatedProductIds={this.state.relatedProductIds}
          productData={this.state.productData}
          rating={this.state.rating}
          characteristics={this.state.characteristics}
          shadeOfCarouselFade={this.state.shadeOfCarouselFade}
        />
        <Container currentPageItemId={this.state.currentPageItemId}questions={this.state.questions}productName={this.state.productData.name}/>
        <Reviews
          productId={this.state.currentPageItemId}
          name={this.state.productData.name}
        />
      </div>
    );
  }
}

const TitleP = styled.p`
font-family: Courier New;
font-size: 24px;
`

const TopBar = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
background-image: linear-gradient(#ff0019, #790a04);
height: 50px;
`;
const StyledDarkModeButton = styled.button`
position: absolute;
top: 0;
right: 0;
height: 50px;
font-family: inherit;
background-image: linear-gradient(white, silver);
&:hover {
  cursor: pointer;
  background-image: linear-gradient(silver, white);
}
`;
export default App;
