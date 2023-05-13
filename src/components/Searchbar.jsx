import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    search: ''
  };

  render() {
    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={(evt) => {
            this.props.search(evt);
          }}
        >
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            name="input"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
