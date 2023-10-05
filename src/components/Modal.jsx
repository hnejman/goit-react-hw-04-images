import { PropTypes } from 'prop-types';

export const Modal = ({closeModal, modalSrc, modalAlt }) => {
    return (
      <>
        <div class="Overlay" onClick={ closeModal }>.
          <div class="Modal">
            <img src={ modalSrc } alt={ modalAlt } />
          </div>
        </div>
      </>
    );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalSrc: PropTypes.string,
  modalAlt: PropTypes.string
}
