import { Component } from 'react';

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
