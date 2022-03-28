import React, {useState} from 'react'
import Tile from './Tile.js'

function TileContainer({hogs}) {

  const [myHogs, setMyHogs] = useState(hogs)
  const [greasedFilter, setGreasedFilter] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  // const [nameSort, setNameSort] = useState(false)
  // const [weightSort, setWeightSort] = useState(false)

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

  let sortedHogs = myHogs.slice().sort( (hog1, hog2) => {
    if (sortBy === 'name') {
      return hog1.name.localeCompare(hog2.name)
    } else {
      return hog1.weight - hog2.weight
    }
  })

  function handleSort(e) {
    setSortBy(e.target.value)
    
  }

  // function handleNameSort(e) {
  //   setNameSort(!nameSort)

  //   if (e.target.checked) {
  //     let sortedHogsName = myHogs.slice().sort( (a,b) => {
  //       if(a.name < b.name) return -1
  //       if(a.name > b.name) return 1
  //       return 0
  //     })
  //     setMyHogs(sortedHogsName)
  //   }
  //   else
  //     setMyHogs(hogs)
  // }

  // function handleWeightSort(e) {
  //   setWeightSort(!weightSort)

  //   if(e.target.checked) {
  //     let sortedHogsweight = myHogs.slice().sort(( a,b) => {
  //       if(a.weight < b.weight) return -1
  //       if(a.weight > b.weight) return 1
  //       return 0
  //     })
  //     setMyHogs(sortedHogsweight)
  //   }
  //   else 
  //     setMyHogs(hogs)
  // }

  return (
    <div>
      <div>Only greased: <input onClick={handleFilter} type="checkbox" id="filter"/>filter</div>
      <div>Sort by name: <input name="name" onClick={handleSort} type="checkbox" id="sort"/>sort</div>
      <div>Sort by weight: <input name="weight" onClick={handleSort} type="checkbox" id="sort"/>sort</div>
      <div>Sort by: 
        <select onChange={handleSort} value={sortBy}>
        <option value='name'>name</option>
        <option value='weight'>weight</option>
        </select></div>
      { sortedHogs.map(hog => <Tile key={hog.name} hog={hog}/>) }
    </div>
  )
}

export default TileContainer




// myTextOptions[ 'character names' ].kid;