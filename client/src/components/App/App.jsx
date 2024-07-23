import React, { useState, useCallback } from "react";
import "./App.module.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResult/SearchResults";
import Spotify from "../util/spotify";
import Tracklist from "../Tracklist/Tracklist";

function App() {

  // make a usestate for SearchResults, playlistname and playlist Tracklist
  const [searchResult, setSearchResult] = useState([]);
  const [playlistName, setplaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  // then create a function search that will check for the search results and set it
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResult);
  }, []);
  
  // then create a function to add tracks using useCallback and set the playlisttracks and add it to the array
  const addTracks = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
      setPlaylistTracks((prevTrack) => [...prevTrack, track]);
  }, [playlistTracks]);
  // create a removeTrack that filters the tracks and removes it from the array
  const removeTrack = useCallback((track) => {

  }, []);
  // create a update playlist name by using useCallback and setplaylistname
  const updatePlaylist = useCallback(() => {

  }, []);

  // create a save playlist using useCallback and map them to spotify.js to save it back to the api servers.
  const savePlaylist = useCallback(() => {

  }, []);

  return (
  <div>
    {/* need to setup html return */}
  </div>
);
}

export default App;
