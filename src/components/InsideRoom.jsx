import React, { useState } from 'react'
import AddProduct from './AddProduct'
import { Link } from 'react-router-dom'
import store from '../store'
import Product from './Product'
import './insideRoom.css'



export default function InsideRoom(props) {
    const[addProduct,setAddProduct]= useState(false)
    
    const aProduct = ()=>{
      if(addProduct==true){
        return<AddProduct  id={props.id}  currentRoom={props.currentRoom} addProduct={addProduct} setAddProduct={setAddProduct}/>
      }
    }

  return (
    <div style={{border:'5px solid #8AB6F9',borderRadius:'8px' , width:'42%',marginLeft:'29%', marginTop:'2.4cm',marginBottom:'1cm'}}>
      <Link to={'/'}> <button className='but3' >Home</button></Link> 
<h2 style={{fontFamily:'Book Antiqua', fontSize:'30px', marginTop:'0.7cm',textDecoration:'underline',textDecorationColor:'#8AB6F9'}}>Room Name:{props.currentRoom.name}</h2>
<h2 style={{fontFamily:'Book Antiqua', fontSize:'30px',marginTop:'1cm',textDecoration:'underline',textDecorationColor:'#8AB6F9'}}>Room Type:{props.currentRoom.type}</h2>
<div>
{props.currentRoom.products.map((val,inx)=>{
    return<Product val={val} id={inx} />
})}
</div>
<button className='but3' style={{marginBottom:'1cm'}} onClick={()=>{setAddProduct(!addProduct)}}>Add Product</button>
{aProduct()}
    </div>
  )
}
