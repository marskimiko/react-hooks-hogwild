import React from 'react'

function HogDetails({hog}) {
  return (
    <div>
      <div> {hog.specialty} </div>
      <div> {hog.weight} </div>
      <div> {hog.greased ? "Is greased" : "Is not greased"} </div>
      <div> {hog['highest medal achieved']} </div>
    </div>
  )
}

export default HogDetails;

