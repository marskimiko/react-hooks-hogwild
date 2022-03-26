import React from 'react'
import Tile from './Tile.js'

function TileContainer({hogs}) {
  
  const hogsArray = hogs.map((hog) => {
    return (
     <>
      <Tile
      key={hog.name} 
      greased={hog.greased} 
      highestMedal={hog['highest medal achieved']} 
      image={hog.image}
      name={hog.name}
      specialty={hog.specialty}
      weight={hog.weight}
      />
    </> 
    )
  });

  return (
    <div>
      <div>Only greased<input type="checkbox" id="filter">filter</input></div>
      <div>Sort by name <input type="checkbox" id="sort">sort</input></div>
      <div>{hogsArray}</div>
    </div>
  )
}

export default TileContainer




// myTextOptions[ 'character names' ].kid;