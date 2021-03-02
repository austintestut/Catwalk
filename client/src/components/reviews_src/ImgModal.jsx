import React from 'react'

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
    // let { url } = this.props;
    let url = 'https://images.unsplash.com/photo-1511499008188-de491bbbae98?ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80';
    const modalStyle = {
      // display: 'none', /* Hidden by default <<<<<<<<<<<<------------- */
      position: 'fixed',
      zIndex: 1,
      left: '10%',
      top: '10%',
      height: '100%',
      overflow: 'auto',
      backgroundColor: 'LightGray',
      maxHeight: 'calc(100vh - 100px)',
    };
    const modalContentStyle = {
      backgroundColor: 'white',
      width: '95%',
      height: '95%',
    };

    const modalButtonStyle = {
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

    const thumbStyle = {
      //border: '1px solid black',
      borderRadius: '5px',
      padding: '5px',
      paddingLeft: '0',
      height: '80px',
      maxWidth: '80px',
    };
    /* ---------------------------------------------------------------------------------*/
    if (this.state.open) {
      return (
        <div style={{ ...modalStyle }}>
          <div style={{ ...modalContentStyle }}>
            <i className="fas fa-times fa-lg" style={{ ...modalButtonStyle }} onClick={this.toggleModal} />
            <img src={url} alt="" style={{ ...imgStyle }} />
          </div>
        </div>
      );
    }
    return (
      <img src={url} style={{ ...thumbStyle }} alt="" onClick={this.toggleModal}/>
    );
  }
}

export default ImgModal;
