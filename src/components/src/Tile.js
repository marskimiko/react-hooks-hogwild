import React, {useState} from 'react'
import HogDetails from "./HogDetails";

function Tile({hog}) {
  const [visibleDetails, setVisibleDetails] = useState(false);

  function handleImageClick() {
    setVisibleDetails(!visibleDetails)
  }

  return (
    <div className="Tile">
      <h1>{hog.name}</h1>
      <img onClick={handleImageClick} height='200' width="200" src={hog.image} alt="hog"/>
      { visibleDetails? <HogDetails hog={hog} /> : ""}
    </div>
  );
}

export default Tile;