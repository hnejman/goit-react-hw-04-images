import { Searchbar } from 'components/Searchbar';
import { ImageGallery } from 'components/ImageGallery';
import { Loader } from 'components/Loader';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import 'components/styles.css';
import { Component } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    search: 'cat',
    key: '33400250-146930462e7f20f0c64c3f7c9',
    pageNr: 1,
    data: [],
    isLoading: false,
    modal: '',
    modalAlt: '',
    isModal: false,
    isButton: false
  };

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
  }

  async getFromAPI(search, key, page) {
    const response = await axios.get(
      `?key=${key}&page=${page}&q=${search}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response;
  }

  search = evt => {
    evt.preventDefault();
    const value = evt.target.elements.input.value;
    this.setState({ search: value, isLoading: true });
    this.getFromAPI(value, this.state.key, 1).then(response => {
        this.setState({
          data: response.data.hits,
          pageNr: 2,
          isLoading: false,
        });
        if(response.data.hits.length===12){
          this.setState({
            isButton: true
          });
        }
    }).catch(error=>{console.error(error)});
  };

  loadModal = e => {
    document.addEventListener("keydown", this.escFunction);
    this.setState({
      modal: e.target.id,
      modalAlt: e.target.alt,
      isModal: true,
    });
  };

  closeModal = e => {
      document.removeEventListener("keydown", this.escFunction);
      this.setState({
        isModal: false,
      });
  };

  escFunction = (event) => {
    if (event.code === "Escape" && this.state.isModal) {
      this.closeModal();
    }
  };

  nextPage() {
    this.setState(prevState => ({
      pageNr: prevState.pageNr + 1,
    }));
    this.setState({ isLoading: true });
    this.getFromAPI(this.state.search, this.state.key, this.state.pageNr).then(
      response => {
          this.setState(previos => ({
            data: previos.data.concat(response.data.hits),
            isLoading: false,
          }));
      }
    );
  }

  render() {
    return (
      <div className='App'>
        <Searchbar search={this.search} />
        <ImageGallery gallery={this.state.data} loadModal={this.loadModal} />
        {this.state.isLoading && <Loader />}
        {this.state.isButton && <Button next={this.nextPage} />}
        {this.state.isModal && (
          <Modal
            modalSrc={this.state.modal}
            modalAlt={this.state.modalAlt}
            closeModal={this.closeModal}
            onKeyDown={this.escFunction}
          />
        )}
      </div>
    );
  }
}
