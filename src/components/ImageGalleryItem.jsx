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

import { PropTypes } from 'prop-types'{
    
}