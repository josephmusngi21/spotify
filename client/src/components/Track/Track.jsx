import React from 'react'

const Track = (props) => {

  return (
    <div className="track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
    </div>
  )
}

export default Track