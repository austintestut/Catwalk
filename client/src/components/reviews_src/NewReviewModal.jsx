import React from 'react';
import StarHover from '../new_review_components/StarHover';

// MODAL CLOSE ICON NEEDS TO LOCK ON SCROLL <<<<<-------- BUG
class NewReviewModal extends React.Component {
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
    const modalStyle = {
      position: 'fixed',
      zIndex: 1,
      left: '50%',
      transform: 'translateX(-50%)',
      top: '5%',
      height: '100%',
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

    const overlayStyle = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(128,128,128,0.5)',
    };

    const formStyle = {
      width: '90vw',
      height: '90vh',
      backgroundColor: 'white',
      borderRadius: '5px',
    };
    /* ---------------------------------------------------------------------------------*/
    //if (this.state.open) {
      return (
        <div name="overlay" style={{ ...overlayStyle }}>
          <div style={{ ...modalStyle }}>
            <div style={{ ...modalContentStyle }}>
              <i className="fas fa-times fa-lg" style={{ ...modalButtonStyle }} onClick={this.toggleModal} />
              <div style={{ ...formStyle }}>
                <StarHover />
              </div>
            </div>
          </div>
        </div>
      );
    //}
     //return null;
  }
}

export default NewReviewModal;
