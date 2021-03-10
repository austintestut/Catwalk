import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import left from '../../../images/chevron-left.png';
import right from '../../../images/chevron-right.png';

import Carousel from './Carousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curMain: 0,
      thumbsMain: 0,
      mainPics: [],
      thumbs: [],
      styles: [],
      zoom: false
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextThumb = this.nextThumb.bind(this);
    this.prevThumb = this.prevThumb.bind(this);
    this.getStyles = this.getStyles.bind(this);
    this.getPhotos = this.getPhotos.bind(this);

    this.zoomClick = this.zoomClick.bind(this);
    this.selector = this.selector.bind(this);

    this.mainPicRef = React.createRef();
  }


  componentDidMount() {
   this.getStyles(18025);
  }

  getStyles(id) {
    const options = {headers: {'Authorization': ''}}
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, options)
      .then((res) => {
        this.setState({
          styles: res.data.results
        }, ()=>{this.getPhotos(this.state.styles)});
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
        let thumb = styles[i].photos[0].thumbnail_url;
        main.push(pic);
        thumbs.push(thumb);
        this.setState({
          mainPics: main,
          thumbs: thumbs
        })
      }
    }
  }

  nextThumb() {
    let length = this.state.thumbs.length;
    let current = this.state.thumbsMain;
    this.setState({
      thumbsMain: (current === length - 1 ? 0 : current + 1)
    })
  }

  prevThumb() {
    let length = this.state.thumbs.length;
    let current = this.state.thumbsMain;
    this.setState({
      thumbsMain: (current === 0 ? length - 1 : current - 1)
    })
  }

  nextSlide() {
    let length = this.state.mainPics.length;
    let current = this.state.curMain;
    this.setState({
      curMain: (current === length - 1 ? 0 : current + 1)
    })
  }

  prevSlide() {
    let length = this.state.mainPics.length;
    let current = this.state.curMain;
    this.setState({
      curMain: (current === 0 ? length - 1 : current - 1)
    })
  }

  zoomClick() {
    this.setState({
      zoom: !this.state.zoom
    })
  }

  selector(selected) {
    let styles = this.state.styles;
    let index = 0;
    for (let i = 0; i < styles.length; i++) {
      if (styles[i].style_id === Number(selected)) {
        index = i;
      }
    }
    return index;
  }

  render() {

    return (
      <GalleryContainer>

            <MainContainer>

        {this.state.mainPics.map((pic, index) => {
         let styles={
           backgroundImage: `url(${pic})`,
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat',
         }
          return (
            <div key={index}>
              {index === (this.props.selected ? this.selector(this.props.selected) : this.state.curMain) && (

                <MainImage ref={this.mainPicRef} key={index} style={styles}/>

              )}
            </div>
          )
        })}

      <StyledPrevBtn
      name='curMain'
      onClick={this.nextSlide}
      />
      <StyledNextBtn
      name='curMain'
      onClick={this.prevSlide}
      />

      </MainContainer>

      <ThumbsContainer>

          <Carousel
          curMain={this.state.curMain}
          thumbsMain={this.state.thumbsMain}
          thumbs={this.state.thumbs}
          next={this.nextThumb}
          prev={this.prevThumb}
          selected={this.props.selected}
          selector={this.selector}
          />

      </ThumbsContainer>

      </GalleryContainer>
    )
  }
}

const GalleryContainer = styled.div`
  position: relative;
  height: 650px;
  width: 650px;
`
const MainImage = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  cursor: -webkit-zoom-in;
`
const MainContainer = styled.div`
  position: relative;
`
const ThumbsContainer = styled.div`
  position: relative;
  bottom: 95%;
  width: 10%;
  padding: 5px;
`
const StyledPrevBtn = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 10%;
  bottom: 50%;
  background-image: url(${left});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
`
const StyledNextBtn = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 85%;
  bottom: 50%;
  background-image: url(${right});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
`

export default ImageGallery;