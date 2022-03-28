import React from 'react'
import Tile from './Tile.js'

function TileContainer({hogs}) {

  return (
    <div>
      <div>Only greased <input type="checkbox" id="filter"/>filter</div>
      <div>Sort by name <input type="checkbox" id="sort"/>sort</div>
      { hogs.map(hog => <Tile key={hog.name} hog={hog}/>) }
    </div>
  )
}

export default TileContainer




// myTextOptions[ 'character names' ].kid;