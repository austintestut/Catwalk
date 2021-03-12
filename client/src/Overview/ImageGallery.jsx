import React from 'react';
import ReactDOM from 'react-dom';
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
      zoom: false,
      magnified: false,
      scale: 1,
      mouseX: undefined,
      mouseY: undefined,
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextThumb = this.nextThumb.bind(this);
    this.prevThumb = this.prevThumb.bind(this);
    this.zoomClick = this.zoomClick.bind(this);
    this.selector = this.selector.bind(this);

    this.magnify = this.magnify.bind(this);
    this.magnifyIn = this.magnifyIn.bind(this);
    this.magnifyOut = this.magnifyOut.bind(this);

  }

  nextThumb() {
    let length = this.props.thumbs.length;
    let current = this.state.thumbsMain;
    this.setState({
      thumbsMain: (current === length - 1 ? 0 : current + 1)
    })
  }

  prevThumb() {
    let length = this.props.thumbs.length;
    let current = this.state.thumbsMain;
    this.setState({
      thumbsMain: (current === 0 ? length - 1 : current - 1)
    })
  }

  nextSlide() {
    let length = this.props.mainPics.length;
    let current = this.state.curMain;
    this.setState({
      curMain: (current === length - 1 ? 0 : current + 1)
    })
  }

  prevSlide() {
    let length = this.props.mainPics.length;
    let current = this.state.curMain;
    this.setState({
      curMain: (current === 0 ? length - 1 : current - 1)
    })
  }

  zoomClick() {
    if (!this.state.zoom) {
      this.setState({
        scale: 2.5,
        zoom: true
      })
    } else {
      this.setState({
        scale: 1,
        zoom: false
      })
    }
  }

  magnifyIn() {
    this.setState({
      magnified: true
    })
  }

  magnifyOut(){
    this.setState({
      magnified: false
    })
  }

  magnify(event) {
   const {
    top: offsetTop,
    left: offsetLeft
  } = event.target.getBoundingClientRect()

  const x = ((event.pageX - offsetLeft) / event.target.width) * 100;
  const y = ((event.pageY - offsetTop) / event.target.height) * 100;

  this.setState({
    mouseX: x,
    mouseY: y
  })
  }

  selector(selected) {
    let styles = this.props.styles;
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

        {this.props.mainPics.map((pic, index) => {
              const transform = {
                transformOrigin: `${this.state.mouseX}% ${this.state.mouseY}%`
              }
              const images = Object.assign({}, transform, {
                transform: (this.state.magnified ? 'scale(1.5)' : 'scale(1.0)'),
                height: '600px',
                width: '600px',
                backgroundImage: `url(${pic})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                transition: 'transform .1s ease-out'
              })

          const contStyle = {
           backgroundImage: `url(${pic})`, transform: `scale(${this.state.scale})`, cursor: `${(this.state.scale === 1 ? '-webkit-zoom-in' : '-webkit-zoom-out')}`
          }

          const lensStyle = {
            backgroundImage: `url(${pic})`,
            transform: `scale(${this.state.scale})`,
            cursor: `${(this.state.scale === 1 ? '-webkit-zoom-in' : '-webkit-zoom-out')}`
          }

          return (
            <div  key={index}>

              {index === (this.props.selected ? this.selector(this.props.selected) : this.state.curMain) && (
                <>
                <Lens style={lensStyle}
                 onMouseMove={this.magnify}
                 onMouseOver={this.magnifyIn}
                 onMouseOut={this.magnifyOut}
                 onClick={this.zoomClick}
                >
                <MainImage
                key={index}
                style={images}/>
                </Lens>
                </>
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
          thumbs={this.props.thumbs}
          next={this.nextThumb}
          prev={this.prevThumb}
          selected={this.props.selected}
          selector={this.selector}
          handleSelect={this.props.handleSelect}
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
`
const Lens = styled.div`
  height: 600px;
  width:  600px;
  overflow: hidden;
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
  opacity: 0.80;
  background-image: url(${left});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
  ${StyledPrevBtn}:hover {
    opacity: 1;
    cursor: pointer;
  }
`
const StyledNextBtn = styled.button`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 85%;
  bottom: 50%;
  opacity: 0.80;
  background-image: url(${right});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 50%;
  ${StyledNextBtn}:hover {
    opacity: 1;
    cursor: pointer;
  }
`

export default ImageGallery;