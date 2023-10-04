import { Component } from 'react';
import { PropTypes } from 'prop-types';

export class Modal extends Component {
  render() {
    return (
      <>
        <div class="Overlay" onClick={this.props.closeModal}>.
          <div class="Modal">
            <img src={this.props.modalSrc} alt={this.props.modalAlt} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalSrc: PropTypes.string,
  modalAlt: PropTypes.string
}
