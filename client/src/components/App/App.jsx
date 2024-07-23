import React from 'react';
import logo from '../..';
import Playlist from './Playlist';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <div className='App-playlist'>

            {/* Add a SearchBar component */}
          </div>
          {/* Add a SearchResults component */}
          {/* Add a Playlist component */}
        </div>
      </div>
    );
  }
}

export default App;
