import React from 'react'

const Cards = ({d}) => {
    console.log(d)
  return (
    <div>{d.name} </div>
  )
}

export default Cards
// without destructure
// data={
    // d:{
        // name:neha
    // }
// }