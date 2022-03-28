import React, {useState} from 'react'
import Tile from './Tile.js'

function TileContainer({hogs}) {

  const [myHogs, setMyHogs] = useState(hogs)
  const [greasedFilter, setGreasedFilter] = useState(false)
  const [nameSort, setNameSort] = useState(false)
  const [weightSort, setWeightSort] = useState(false)

  function handleFilter(e) {
    setGreasedFilter(!greasedFilter)
    console.log(e.target)

    if (e.target.checked) {
      const hogsFiltered = myHogs.filter((hog) => {
        return hog.greased === true 
      })
      setMyHogs(hogsFiltered)
    } 
    else 
      setMyHogs(hogs)
  }

  function handleNameSort(e) {
    setNameSort(!nameSort)

    if (e.target.checked) {
      let sortedHogsName = myHogs.slice().sort( (a,b) => {
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1
        return 0
      })
      setMyHogs(sortedHogsName)
    }
    else
      setMyHogs(hogs)
  }

  function handleWeightSort(e) {
    setWeightSort(!weightSort)

    if(e.target.checked) {
      let sortedHogsweight = myHogs.slice().sort(( a,b) => {
        if(a.weight < b.weight) return -1
        if(a.weight > b.weight) return 1
        return 0
      })
      setMyHogs(sortedHogsweight)
    }
    else 
      setMyHogs(hogs)
  }

  return (
    <div>
      <div>Only greased: <input onClick={handleFilter} type="checkbox" id="filter"/>filter</div>
      <div>Sort by name: <input onClick={handleNameSort} type="checkbox" id="sort"/>sort</div>
      <div>Sort by weight: <input onClick={handleWeightSort} type="checkbox" id="sort"/>sort</div>
      { myHogs.map(hog => <Tile key={hog.name} hog={hog}/>) }
    </div>
  )
}

export default TileContainer




// myTextOptions[ 'character names' ].kid;