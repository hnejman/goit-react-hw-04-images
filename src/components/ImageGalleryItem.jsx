import { PropTypes } from 'prop-types';

export const ImageGalleryItem = ({ tags, large, web, loadModal }) => {
  return (
    <img
      alt={tags}
      id={large}
      src={web}
      onClick={e => {
        loadModal(e);
      }}
      className="ImageGalleryItem-image"
    ></img>
  );
};

ImageGalleryItem.propTypes = {
  loadModal: PropTypes.func.isRequired,
  tags: PropTypes.string,
  large: PropTypes.string,
  web: PropTypes.string,
};
