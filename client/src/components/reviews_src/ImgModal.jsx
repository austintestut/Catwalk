import React from 'react'

class ImgModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openModal(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    // let { url } = this.props;
    let url = 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80';
    const modalStyle = {
      // display: 'none', /* Hidden by default */
      position: 'fixed', /* Stay in place */
      zIndex: 1, /* Sit on top */
      left: '10%',
      top: '10%',
      // width: '80%',
      height: '100%',
      overflow: 'auto', /* Enable scroll if needed */
      backgroundColor: 'LightGray', /* Fallback color */
      maxHeight: 'calc(100vh - 100px)',
      //borderRadius: '5px',
    };
    const modalContentStyle = {
      //marginTop: '3%',
      backgroundColor: 'white',
      // margin: '5% auto', /* 15% from the top and centered */
      // padding: '20px',
      // border: '10px solid grey',
      width: '95%', /* Could be more or less, depending on screen size */
      height: '95%',
    };

    const modalButtonStyle = {
      //marginTop: '10px',
      //marginRight: '10px',
      right: 7,
      top: 7,
      color: 'white',
      zIndex: 2,
      position: 'absolute',
    };

    const imgStyle = {
      border: '1px solid black',
      borderRadius: '5px',
    };

    return (
      <div style={{ ...modalStyle }}>
        <div style={{ ...modalContentStyle }}>
          <i className="fas fa-times fa-lg" style={{ ...modalButtonStyle }} />
          <img src={url} alt="" style={{ ...imgStyle }} />
        </div>
      </div>
    );
  }
}

export default ImgModal;
