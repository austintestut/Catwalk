import React from 'react';
import styled, { css } from 'styled-components';
import RelatedProductCard from './RelatedProductCard';

// change height to auto to account for long text, but strict px makes it seem smoother
const StyledProductCardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
height: 270px;
`
const StyledProductCard = styled.div`
padding-left: 20%;
padding-right: 10%;
margin-top: 5%;
margin-bottom: 5%;
`


const RelatedProductsCarousel = ({ relatedProductIds, relatedProductData, productStyleData, relatedCurrentlyShowingIndexes, toggleModal }) => {
  let productsToShow = [
    (relatedProductIds[relatedCurrentlyShowingIndexes[0]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[1]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[2]] || null),
    (relatedProductIds[relatedCurrentlyShowingIndexes[3]] || null)
  ];

  return (
    <div>
      <div>RELATED PRODUCTS</div>
      <StyledProductCardContainer>
        {productsToShow.map((productId) => {
          let card;
          if (productId === null) {
            card = <div></div>;
          } else {
            card = (
              <RelatedProductCard
              productId={productId}
              relatedProductData={relatedProductData}
              productStyleData={productStyleData}
              toggleModal={toggleModal}
              />
              );
            }
            return (
              <StyledProductCard key={productId}>
              {card}
            </StyledProductCard>
          );
        })}
      </StyledProductCardContainer>
        </div>
  );
};

// // starting to refactor to be a class and pull axios here
// class RelatedProductsCarousel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       photoUrl: [],
//       productData: [],
//       rating: [],
//     };
//   }
//   componentDidMount() {
//     this.getProductInfo();
//     this.getPhotoUrl();
//     this.getRating();
//   }

//   // get the category, name, default price
//   getProductInfo(id) {
//     axios.get(`/products/${id}`)
//       .then((data) => {
//         this.setState({
//           productData: data.data
//         });
//       })
//       .catch((err) => {
//         console.log('ERR Axios get product from client', err);
//       });
//   }

//   //get rating
//   getRating() {
//     for (let i = 0; i < this.props.relatedProductIds.length; i++) {
//       let id = this.props.relatedProductIds[i];
//       axios.get(`/reviews/meta/${id}`)
//         .then((data) => {
//           let ratings = data.data.ratings;
//           let oneStars = ratings['1'] || 0;
//           let twoStars = ratings['2'] || 0;
//           let threeStars = ratings['3'] || 0;
//           let fourStars = ratings['4'] || 0;
//           let fiveStars = ratings['5'] || 0;

//           let totalReviews = parseInt(oneStars) + parseInt(twoStars) + parseInt(threeStars) + parseInt(fourStars) + parseInt(fiveStars);

//           let reviewStars = (oneStars * 1)
//             + (twoStars * 2) + (threeStars * 3)
//             + (fourStars * 4) + (fiveStars * 5);

//           let rating = reviewStars / totalReviews;
//           if (totalReviews === 0) {
//             rating = 0;
//           }
//           this.setState({
//             rating: this.state.rating(rating.toFixed(1))
//           });
//         })
//         .catch((err) => {
//           console.log('ERR getting average star rating from client', err);
//         });
//     }
//   }

//   //get the photo url
//   getPhotoUrl(id) {
//     axios.get(`/products/${id}/styles`)
//       .then((styleData) => {
//         this.setState({
//           photoUrl: styleData.data.results[0].photos[0].thumbnail_url
//         });
//       })
//       .catch((err) => {
//         console.log('ERR Axios get styles from client', err);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <div>RELATED PRODUCTS</div>
//         <StyledProductCardContainer>
//           {productsToShow.map((productId) => {
//             let card;
//             if (productId === null) {
//               card = <div></div>;
//             } else {
//               card = (
//                 <RelatedProductCard
//                   productId={productId}
//                   relatedProductData={relatedProductData}
//                   productStyleData={productStyleData}
//                 />
//               );
//             }
//             return (
//               <StyledProductCard key={productId}>
//                 {card}
//               </StyledProductCard>
//             );
//           })}
//         </StyledProductCardContainer>
//       </div>
//     );
//   }
// }

export default RelatedProductsCarousel;
