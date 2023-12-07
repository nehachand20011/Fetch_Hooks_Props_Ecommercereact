import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductsFetch from './ProductsFetch'

const Fetch = () => {
    const[data1,setData]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])
    
  return (
    <>
    <div class="row row-cols-1 row-cols-md-4 g-4">
    {
      data1.map((p,i)=>{
        return <> 

        <ProductsFetch data={p}/>
       
          
        </>
      })
    }
     </div>
    
    </>
  )
}

export default Fetch