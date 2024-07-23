import React, { useState, useCallback } from 'react';
import './SearchBar.module.css';

function SearchBar(props) {
  const [term, setTerm] = useState('');

  const handleChange = useCallback((e) =>{
    setTerm(e.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]); 
    

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song Title" onChange={handleChange} />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar