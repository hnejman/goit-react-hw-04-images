import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { PropTypes } from 'prop-types';

export const ImageGallery = ({loadModal, gallery}) => {
    return (
      <ul className="ImageGallery">
        {gallery.map(item => {
          return (
            <li key={item.id} className="ImageGalleryItem">
              <ImageGalleryItem
                id={item.id}
                large={item.largeImageURL}
                web={item.webformatURL}
                tags={item.tags}
                loadModal={loadModal}
              />
            </li>
          );
        })}
      </ul>
    );
}

ImageGallery.propTypes = {
  loadModal: PropTypes.func.isRequired,
  gallery: PropTypes.array,
}