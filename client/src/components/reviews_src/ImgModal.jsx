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
    //let url = 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80';
    const modalStyle = {
      // display: 'none', /* Hidden by default <<<<<<<<<<<<------------- */
      position: 'fixed',
      zIndex: 1,
      left: '50%',
      transform: 'translateX(-50%)',
      top: '5%',
      height: '100%',
      overflow: 'auto',
      backgroundColor: 'transparent',
      maxHeight: 'calc(100vh - 100px)',
      maxWidth: '95%',
    };
    const modalContentStyle = {
      backgroundColor: 'transparent',
      width: '95%',
      height: '95%',
    };

    const modalButtonStyle = {
      right: 7,
      top: 7,
      color: 'white',
      zIndex: 2,
      position: 'fixed',
      textShadow: '0 0 1px #000',
    };

    const imgStyle = {
      borderRadius: '2%',
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
      maxWidth: '80px',
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
