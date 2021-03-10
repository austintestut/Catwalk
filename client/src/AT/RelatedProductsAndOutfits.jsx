import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedProductsCarousel from './RelatedProductsCarousel';
import OutfitCarousel from './OutfitCarousel';

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
top: 32%;
left: 45%;
background-image: linear-gradient(to left, white, silver);
border: none;
border-radius: 50%;
color: black;
${StyledLeftButton}:hover {
  background-image: linear-gradient(to left, white, #e11a2b);
  cursor: pointer;
  color: white;
}
`;
const StyledRightButton = styled.button`
height: 50px;
width: 50px;
position: relative;
top: 32%;
background-image: linear-gradient(to right, white, silver);
border: none;
border-radius: 50%;
color: black;
${StyledRightButton}:hover {
  background-image: linear-gradient(to right, white, #e11a2b);
  cursor: pointer;
  color: white;
}
`;
const StyledHeader = styled.h3`
  padding-left: 12%;
  width: auto;
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

      productData: [],
      rating: 0,
      characteristics: [],
      totalReviews: 0,
      relatedProductIds: [],
      outfitProductIds: [],

      translatedXrp: 0,
      translatedXoutfit: 0
    };

    // this.relatedProductIds = [17762, 18025, 17763, 17858, 18076, 17068, 17069, 17070]; // for testing
    // this.outfitProductIds = [18076, 17858, 17763, 18076, 17068]; // for testing

    this.handleRelatedCarouselRight = this.handleRelatedCarouselRight.bind(this);
    this.handleRelatedCarouselLeft = this.handleRelatedCarouselLeft.bind(this);
    this.handleOutfitCarouselRight = this.handleOutfitCarouselRight.bind(this);
    this.handleOutfitCarouselLeft = this.handleOutfitCarouselLeft.bind(this);
    this.renderRightButtonToggleForRelatedProducts = this.renderRightButtonToggleForRelatedProducts.bind(this);
    this.renderRightButtonToggleForOutfit = this.renderRightButtonToggleForOutfit.bind(this);
    this.renderLeftButtonToggleForRelatedProducts = this.renderLeftButtonToggleForRelatedProducts.bind(this);
    this.renderLeftButtonToggleForOutfit = this.renderLeftButtonToggleForOutfit.bind(this);
    this.checkIfButtonsShouldRender = this.checkIfButtonsShouldRender.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
    this.getRating = this.getRating.bind(this);
    this.getRelatedItemIds = this.getRelatedItemIds.bind(this);
    this.getOutfitIds = this.getOutfitIds.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentPageItemId: this.props.currentPageItemId
    }, () => {
      this.getProductInfo(this.props.currentPageItemId);
      this.getRating(this.props.currentPageItemId);
      this.getRelatedItemIds(this.props.currentPageItemId);
      this.getOutfitIds();
    });
  }

  // fetch data for current item on page
  // fetch related items
  getRelatedItemIds(id) {
    axios.get(`/products/${id}/related`)
      .then((data) => {
        this.setState({
          relatedProductIds: data.data
        }, () => {
          this.checkIfButtonsShouldRender();
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

  renderRightButtonToggleForRelatedProducts() {
    if (this.state.relatedCurrentlyShowingIndexes[3] >= this.state.relatedProductIds.length - 1) {
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
    });
  }

  render() {
    return (
      <div>
        <StyledHeader>RELATED PRODUCTS</StyledHeader>
        <StyledCarouselContainer>
          <div>
            {this.state.relatedLeftArrow && <StyledLeftButton onClick={() => { this.handleRelatedCarouselLeft(); this.checkIfButtonsShouldRender(); }}>{'<'}</StyledLeftButton>}
          </div>
          <RelatedProductsCarousel
            relatedProductIds={this.state.relatedProductIds}
            relatedCurrentlyShowingIndexes={this.state.relatedCurrentlyShowingIndexes}
            toggleModal={this.toggleModal}
            handleItemClick={this.props.handleItemClick}
            currentProductData={this.state.productData}
            currentRating={this.state.rating}
            currentCharacteristics={this.state.characteristics}
            translatedXrp={this.state.translatedXrp}
          />
          <div>
            {this.state.relatedRightArrow && <StyledRightButton onClick={() => { this.handleRelatedCarouselRight(); this.checkIfButtonsShouldRender(); }}>{'>'}</StyledRightButton>}
          </div>
        </StyledCarouselContainer>
        <StyledHeader>YOUR OUTFIT</StyledHeader>
        <StyledCarouselContainer>
          <div>
            {this.state.outfitLeftArrow && <StyledLeftButton onClick={() => { this.handleOutfitCarouselLeft(); this.checkIfButtonsShouldRender(); }}>{'<'}</StyledLeftButton>}
          </div>
          <OutfitCarousel
            outfitProductIds={this.state.outfitProductIds}
            outfitCurrentlyShowingIndexes={this.state.outfitCurrentlyShowingIndexes}
            getOutfitIds={this.getOutfitIds}
            currentPageItemId={this.props.currentPageItemId}
            handleItemClick={this.props.handleItemClick}
            checkIfButtonsShouldRender={this.checkIfButtonsShouldRender}
            translatedXoutfit={this.state.translatedXoutfit}
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
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;
