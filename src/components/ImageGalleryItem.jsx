import { Component } from "react";
import { PropTypes } from 'prop-types';

export class ImageGalleryItem extends Component {
    render(){
        return(
                <img 
                alt={this.props.tags} 
                id={this.props.large}
                src={this.props.web} 
                onClick={e=>{this.props.loadModal(e)}}
                className="ImageGalleryItem-image"
                ></img>
        )
    }
}

ImageGalleryItem.propTypes = {
    loadModal: PropTypes.func.isRequired,
    tags: PropTypes.string,
    large: PropTypes.string,
    web: PropTypes.string
}