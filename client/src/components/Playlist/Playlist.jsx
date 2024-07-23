import React, { useCallback } from "react";
import TrackList from "../Tracklist/Tracklist";

import "./Playlist.module.css";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (e) => {
      props.onNameChange(e.target.value);
    },
    [props.onNameChange]
  );

  return (
    <div className='Playlist'>
      <input onChange={handleNameChange} defaultValue={'New Playlist'} />
      <TrackList 
      tracks={props.playlistTracks}
      isRemoval={true}
      onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        Save to Spotify
      </button>
    </div>
  )
};

export default Playlist;
