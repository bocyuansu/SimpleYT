import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="searchBar">
          <input
            className="searchBar__input"
            placeholder="Search"
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <i className="searchBar__icon icon-basic-magnifier"></i>
        </div>
      </form>
    );
  }
}

export default SearchBar;
