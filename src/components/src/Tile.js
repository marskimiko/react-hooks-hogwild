import React from 'react'

function Tile({greased, highestMedal, image, name, specialty, weight}) {
  return (
    <div className="Tile">
      <div className="label">{name}</div>
      <img src={image} alt="hog"/>
    </div>
  )
}

export default Tile