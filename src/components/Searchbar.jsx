import { PropTypes } from 'prop-types';

export const Searchbar = ({search}) => {

    return (
      <header className="Searchbar">
        <form
          className="SearchForm"
          onSubmit={(evt) => {
            search(evt);
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

Searchbar.propTypes={
  search: PropTypes.func.isRequired
}
