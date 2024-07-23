import React from 'react';
import TrackList from '../Tracklist/Tracklist';

class Playlist extends React.Component {
  state = {
    name: 'My Playlist',
    tracks: [
      { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
      // Add more tracks as needed
    ],
  };

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <TrackList tracks={this.state.tracks} />
      </div>
    );
  }
}

export default Playlist;
