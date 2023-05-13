import { Component } from "react";

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