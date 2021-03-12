import React from 'react'

// MODAL CLOSE ICON NEEDS TO LOCK ON SCROLL <<<<<-------- BUG
class ImgModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    let { url } = this.props;
    const modalStyle = {
      // display: 'none', /* Hidden by default <<<<<<<<<<<<------------- */
      position: 'fixed',
      zIndex: 1,
      left: '50%',
      transform: 'translateX(-50%)',
      top: '3%',
      height: '100%',
      // overflow: 'auto',
      backgroundColor: 'transparent',
      maxHeight: 'calc(100vh - 50px)',
      maxWidth: '95%',
      // borderRadius: '10px',
    };
    const modalContentStyle = {
      color: 'black',
      borderRadius: '5px',
      backgroundColor: 'white',
      width: '100%',
      height: '100%',
      overflow: '-moz-scrollbars-vertical',
      overflowY: 'scroll',
    };

    const modalButtonStyle = {
      right: 25,
      top: 7,
      color: 'white',
      zIndex: 2,
      position: 'absolute',
      textShadow: '0 0 1px #000',
    };

    const imgStyle = {
      // borderRadius: '2%',
      background: 'white',
    };

    const overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(128,128,128,0.5)',
    };

    const thumbStyle = {
      borderRadius: '5px',
      padding: '5px',
      paddingLeft: '0',
      height: '80px',
      maxWidth: '160px',
    };
    /* ---------------------------------------------------------------------------------*/
    if (this.state.open && url) {
      return (
        <div name="overlay" style={{ ...overlayStyle }}>
          <div style={{ ...modalStyle }}>
            <div style={{ ...modalContentStyle }}>
              <i className="fas fa-times fa-lg" style={{ ...modalButtonStyle }} onClick={this.toggleModal} />
              <img src={url} alt="" style={{ ...imgStyle }} />
            </div>
          </div>
        </div>
      );
    }
    if (url) {
      return (
        <img src={url} style={{ ...thumbStyle }} alt="" onClick={this.toggleModal}/>
      );
    }
    return null;
  }
}

export default ImgModal;
