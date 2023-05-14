import { useState } from "react"
import React from 'react'
import store from "../store"
import { addProduct } from "../actionCreator"
import './addRoom.css'

export default function AddProduct(props) {
    let flag=true;
    const[name,setProduct]=useState('')
    const createProduct=()=>{
       props.currentRoom.products.map((val)=>{
            if(val=='Stereo System' && name=='Stereo System'){
                alert('its can be only one Stereo Sustem in the room');
                flag=false
            }
        })
        if(name.length==0){
            alert('add product to start');
            return false;
        }
        if(props.currentRoom.products.length>4){
            alert('in the room can be max 5 products!')
            return false;
        }
        if(name=="Boiler"&& props.currentRoom.type!='bathroom'){
            alert('you can add Boiler only in the Bathroom')
            return false
        }

        else{
            return true 
        } 

        }
    

    const addProd=()=>{
        if(createProduct()&& flag==true){
            store.dispatch(addProduct(name,props.id))
            props.currentRoom.products.push(name)
            props.setAddProduct(!props.addProduct)
        }
        
            }
  return (
    <div >
         <select className="inp" style={{fontFamily:'Book Antiqua',marginTop:'0',}} onChange={(e)=>{setProduct(e.target.value)}} name="" id="">
            <option value="" selected disabled>Choose your product</option>
            <option value="Air-Conditioner">Air-Conditioner</option>
            <option value="Boiler">Boiler</option>
            <option value="Stereo System">Stereo System</option>
            <option value="Lamp">Lamp</option>
            </select> <br />
            <button className="but3" style={{marginTop:'0.5cm',marginBottom:'0.5cm'}} onClick={addProd}>ADD</button>
    </div>
  )
}
