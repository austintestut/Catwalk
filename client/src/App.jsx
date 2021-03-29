import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedProductsAndOutfits from './AT/RelatedProductsAndOutfits';
import Reviews from './components/Reviews';
import Container from './AK/Container';
import Overview from './Overview/Overview';

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
      shadeOfCarouselFade: 'white',
      styles: [],
      mainPics: [],
      thumbs: [],
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRelatedItemIds = this.getRelatedItemIds.bind(this);
    this.getProductQuestions = this.getProductQuestions.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
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
    this.getStyles(this.state.currentPageItemId);
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
          relatedProductIds: data.data,
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
          productData: data.data,
        });
      })
      .catch((err) => {
        console.log('ERR Axios get product from client', err);
      });
  }

  // get rating
  getRating(id) {
    axios.get(`/reviews/meta/${id}`)
      .then((data) => {
        const { ratings } = data.data;
        const oneStars = ratings['1'] || 0;
        const twoStars = ratings['2'] || 0;
        const threeStars = ratings['3'] || 0;
        const fourStars = ratings['4'] || 0;
        const fiveStars = ratings['5'] || 0;

        const totalReviews = parseInt(oneStars) + parseInt(twoStars) + parseInt(threeStars) + parseInt(fourStars) + parseInt(fiveStars);

        const reviewStars = (oneStars * 1)
          + (twoStars * 2) + (threeStars * 3)
          + (fourStars * 4) + (fiveStars * 5);

        let rating = reviewStars / totalReviews;
        if (totalReviews === 0) {
          rating = 0;
        }
        this.setState({
          rating,
          characteristics: data.data.characteristics,
          totalReviews,
        });
      })
      .catch((err) => {
        console.log('ERR getting average star rating from client', err);
      });
  }

  getStyles(id) {
    axios.get(`/products/${id}/styles`)
      .then((res) => {
        this.setState({
          styles: res.data.results
        }, ()=>{this.getPhotos(this.state.styles)})
      })
      .catch((err) => {
        console.error(err);
      })
  }

  getPhotos(styles) {
    let main = [];
    let thumbs = [];
    if (styles !== undefined) {
      for (let i = 0; i < styles.length; i++) {
        let pic = styles[i].photos[0].url;
        let thumb = [styles[i].photos[0].thumbnail_url, styles[i].style_id];
        main.push(pic);
        thumbs.push(thumb);
        this.setState({
          mainPics: main,
          thumbs: thumbs
        })
      }
    }
  }

  handleItemClick(id) {
    this.setState({
      currentPageItemId: id,
    }, () => {
      this.fetcher();
    });
  }

  darkToggle() {
    const app = document.getElementById('app');
    if (app.classList.contains('darkmode')) {
      app.classList.toggle('darkmode');
      this.setState({
        shadeOfCarouselFade: 'white',
      });
    } else {
      app.classList.toggle('darkmode');
      this.setState({
        shadeOfCarouselFade: 'black',
      });
    }
  }

  render() {
    return (
      <div>
        <TopBar>
          <TitleP>Catwalk</TitleP>
          <p style={{ fontFamily: 'Courier New ' }}>by Alex Shold, Austin Testut, Austin Killough, and Robert Strange</p>
        </TopBar>
        <StyledDarkModeButton onClick={this.darkToggle}>🌙</StyledDarkModeButton>
        <Overview
        product={this.state.productData}
        styles={this.state.styles}
        rating={this.state.rating}
        reviews={this.state.totalReviews}
        mainPics={this.state.mainPics}
        thumbs={this.state.thumbs}
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
        <Container currentPageItemId={this.state.currentPageItemId} questions={this.state.questions} productName={this.state.productData.name} />
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
`;

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
width: 75px;
font-family: inherit;
background-image: linear-gradient(white, silver);
&:hover {
  cursor: pointer;
  background-image: linear-gradient(silver, white);
}
filter: grayscale(100%);
font-size: 17.5px;
`;
export default App;

