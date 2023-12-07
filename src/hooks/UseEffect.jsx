import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    // useEffect is used for rendring the effect
    const[count,setCount]=useState(1)
    const increase=()=>{
        setCount(count+1)
    }

    useEffect(()=>{
       alert(`This page contains virus ${count}`)
        // console.log("Hello")
    },[count])
  return (
    <>
    {
        count
    }
    <button onClick={increase}>Increase</button>

    
    
    </>
  )
}
// data=> name image

export default UseEffect