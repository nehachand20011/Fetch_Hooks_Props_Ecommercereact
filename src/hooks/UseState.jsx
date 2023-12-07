import React, {useState } from 'react'
import "./mystyle.css"

const UseState = () => {

    // type of hooks:
    // usestate=>it is used to store value
    // const[value,stateValue]=usestate('')here value bis a variable,setvalue is the function and'' is the string
    // const[value,setValue]=useState()=>to store number
    // const[value,setValue]=useState({})=to store object
    // const[value,setValue]=useState([])=to store array

// count=variable
// setcount=function

    const[count,setCount]=useState(0)
    const increase=()=>{
      // if hamile +2 garem bhne +2 le increase hudai jaanxa
      setCount(count+1)
    }
    const decrease=()=>{
      // iff hamile -2 garem bhane chai 2 le decrease hudai janxa
      setCount(count-1)
    }

    

  return (
    <>

    <div className='counter'>
{
    count

}   
</div>

<div className='btn'>
  {
    count<10?<button className='increase' onClick={increase}>Increase</button> :null
  }

  {
    count>0?<button className='decrease'onClick={decrease}>Decrease</button> :null
  }

 
   
</div>

    </>
  )
}

export default UseState