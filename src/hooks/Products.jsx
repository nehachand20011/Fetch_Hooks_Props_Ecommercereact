import React, { useState } from 'react'
import Cards from './Cards'

const Products = () => {
    const[product,setProduct]=useState([
        {
            name:"neha",
            address:"bagbazar"
        },
        {
            name:"suzu",
            address:"dhumbharai"
        },
        {
            name:"nisha",
            address:"kirtipur"

        }
    ])
  return (
    <>
    {
        product.map((p,i)=>{
            return <Cards d={p}/>
                

           

        })
    }


    
    
    </>
  )
}

export default Products