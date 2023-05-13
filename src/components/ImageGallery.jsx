import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    pageNr: 1,
  };

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.gallery.map(item => {
          return (
            <li key={item.id} className="ImageGalleryItem">
              <ImageGalleryItem
                id={item.id}
                large={item.largeImageURL}
                web={item.webformatURL}
                tags={item.tags}
                loadModal={this.props.loadModal}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
