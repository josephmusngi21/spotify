import React from 'react'
import Tracklist from '../Tracklist/Tracklist'

import '/SearchResults.jsx';

function SearchResults(props) {
  return (
    <div className='SearchResults'>
      <h2>Results</h2>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd}/>
    </div>
  )
}

export default SearchResults