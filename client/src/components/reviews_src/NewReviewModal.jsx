import React from 'react';
import StarHover from '../new_review_components/StarHover';
import CharacteristicsSelector from '../new_review_components/CharacteristicsSelector';
// MODAL CLOSE ICON NEEDS TO LOCK ON SCROLL <<<<<-------- BUG
class NewReviewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      stars: null,
      recommend: null,
      nickname: '',
      email: '',
      reviewSummary: '',
      reviewBody: '',
      images: '',
    };
    this.toggleModal = this.toggleModal.bind(this);
    // this.characterChecker = this.characterChecker.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  characterChecker(count, min) {
    if (count < min) {
      return <small>{min-count} characters remaining</small>
    }
    return <small>'minimum reached'</small>
  }

  render() {
    const { characteristics } = this.props;
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
      top: 12,
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
      padding: '3%',
      paddingTop: 0,
      width: '60vw',
      height: '90vh',
      backgroundColor: 'white',
      borderRadius: '5px',
      overflow: 'auto',
    };
    /* ---------------------------------------------------------------------------------*/
    if (this.state.open) {
      return (
        <div name="overlay" style={{ ...overlayStyle }}>
          <div style={{ ...modalStyle }}>
            <div style={{ ...modalContentStyle }}>
              <i className="fas fa-times fa-lg" style={{ ...modalButtonStyle }} onClick={this.toggleModal} />
              <div style={{ ...formStyle }}>
                { /* ------------------------------->>FORM HERE<<------------------------------*/ }
                <div style={{ justifyContent: 'center', textAlign: 'center' }}>
                  <h2>New Review</h2>
                  <h3>Tell us what you think</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                  <StarHover />
                  <div style={{ justifyContent: 'flex-end' }}>
                    <h4>Do you recommend this product?</h4>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                      <span style={{marginRight: '50px' }}><input type="radio" name="recommend" value="true" /><span>Yes</span></span>
                      <span style={{ float: 'right' }}> <input type="radio" name="recommend" value="false" /><span>No</span></span>
                    </div>
                  </div>
                </div>
                <h3>Characteristics:</h3>
                <CharacteristicsSelector characteristics={characteristics} />
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                  <div style={{ justifyContent: 'flex-start' }}>
                    <h4>Nickname:</h4>
                    <input type="text" placeholder="Example: Jackson111" style={{ width: '350px'}} />
                  </div>
                  <div style={{ justifyContent: 'flex-end', float: 'right' }}>
                    <h4>Email:</h4>
                    <input type="text" placeholder="Example: Jackson111@email.com" style={{ width: '350px' }} />
                  </div>
                </div>
                <div>
                  <h4>Review Summary</h4>
                  <input type="text" placeholder="Example: Best Purchase Ever!" style={{ width: '99.5%' }} />
                </div>
                <div>
                  <h4>Review Body</h4>
                  <textarea rows="6" placeholder="Why did you like this product or not" style={{ width: '99.5%', resize: 'none' }} />
                </div>
                <button>Add Images</button><button type="submit">Submit</button>
                { /* ---------------------------------------------------------------------------*/ }
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default NewReviewModal;
