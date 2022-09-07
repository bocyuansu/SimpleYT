import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
    setTerm('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="searchBar">
        <input
          className="searchBar__input"
          placeholder="Search"
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <i className="searchBar__icon icon-basic-magnifier"></i>
      </div>
    </form>
  );
};

export default SearchBar;
