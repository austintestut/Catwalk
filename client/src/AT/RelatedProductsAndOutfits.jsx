import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
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
top: 160px;
left: 45%;
background-image: radial-gradient(white, silver);
border-width: 1px;
border-radius: 50%;
font-size: 20px;
text-align: center;
${StyledLeftButton}:hover {
  background-image: radial-gradient(white, rgb(150, 150, 150));
  cursor: pointer;
  color: black;
}
`;
const StyledRightButton = styled.button`
height: 50px;
width: 50px;
position: relative;
top: 160px;
left: 15%;
background-image: radial-gradient(white, silver);
border-width: 1px;
font-size: 20px;
border-radius: 50%;
text-align: center;
${StyledRightButton}:hover {
  background-image: radial-gradient(white, rgb(150, 150, 150));
  cursor: pointer;
  color: black;
}
`;
const StyledHeader = styled.h3`
  padding-left: 12%;
  width: auto;
`;
const StyledLeftRelatedButtonContainer = styled.div`
${props => props.relatedLeftArrow && css`
z-index: 2;
box-shadow: 20px 0 15px 0 rgba(100, 100, 100, 0.4);
`};
`;
const StyledRightRelatedButtonContainer = styled.div`
${props => props.relatedRightArrow && css`
z-index: 2;
box-shadow: -20px 0 15px 0 rgba(100, 100, 100, 0.4);
`};
`;
const StyledRightOutfitButtonContainer = styled.div`
${props => props.outfitRightArrow && css`
z-index: 2;
box-shadow: -20px 0 15px 0 rgba(100, 100, 100, 0.4);
`};
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

      outfitProductIds: [],

      translatedXrp: 0,
      translatedXoutfit: 0
    };

    /*
      relatedProductIds: [],
      productData: [],
      rating: 0,
      characteristics: [],
      totalReviews: 0
    */

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
    this.getOutfitIds = this.getOutfitIds.bind(this);
  }

  componentDidMount() {
      // this.getProductInfo(this.props.currentPageItemId);
      // this.getRating(this.props.currentPageItemId);
      // this.getRelatedItemIds(this.props.currentPageItemId);
      this.getOutfitIds();
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
    if (this.state.relatedCurrentlyShowingIndexes[3] >= this.props.relatedProductIds.length - 1) {
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
    }, () => {
      this.renderRightButtonToggleForOutfit();
    });
  }

  render() {
    return (
      <div>
        <StyledHeader>RELATED PRODUCTS</StyledHeader>
        <StyledCarouselContainer>
          <StyledLeftRelatedButtonContainer relatedLeftArrow={this.state.relatedLeftArrow}>
            {this.state.relatedLeftArrow && <StyledLeftButton onClick={() => { this.handleRelatedCarouselLeft(); this.checkIfButtonsShouldRender(); }}>{'<'}</StyledLeftButton>}
          </StyledLeftRelatedButtonContainer>
          <RelatedProductsCarousel
            relatedProductIds={this.props.relatedProductIds}
            relatedCurrentlyShowingIndexes={this.state.relatedCurrentlyShowingIndexes}
            toggleModal={this.toggleModal}
            handleItemClick={this.props.handleItemClick}
            currentProductData={this.props.productData}
            currentRating={this.props.rating}
            currentCharacteristics={this.props.characteristics}
            translatedXrp={this.state.translatedXrp}
          />
          <StyledRightRelatedButtonContainer relatedRightArrow={this.state.relatedRightArrow}>
            {this.state.relatedRightArrow && <StyledRightButton onClick={() => { this.handleRelatedCarouselRight(); this.checkIfButtonsShouldRender(); }}>{'>'}</StyledRightButton>}
          </StyledRightRelatedButtonContainer>
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
            outfitLeftArrow={this.state.outfitLeftArrow}
          />
          <StyledRightOutfitButtonContainer outfitRightArrow={this.state.outfitRightArrow}>
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
          </StyledRightOutfitButtonContainer>
        </StyledCarouselContainer>
        <br /> {/* remove this when incorporating everyone's components */}
        <br /> {/* remove this when incorporating everyone's components */}
        <br /> {/* remove this when incorporating everyone's components */}
        <br /> {/* remove this when incorporating everyone's components */}
      </div>
    );
  }
}

export default RelatedProductsAndOutfits;
