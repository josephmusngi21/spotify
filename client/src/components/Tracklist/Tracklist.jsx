import React from 'react';
import Track from '../Track/Track';
import '/Tracklist.module.css';

const Tracklist = (props) => {
  return (
    <div classname ="Tracklist">
      {props.tracks.map((track) => {
        return (
          <Track 
          track={track}
          key={track.id}
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
          onRemove={props.onRemove}

          />
        )
      })}
    </div>
  )
}


export default Tracklist;
