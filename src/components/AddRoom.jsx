import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import store from '../store'
import { addRoom } from '../actionCreator'
import './addRoom.css'

export default function AddRoom(props) {
    const[type,setType] = useState('')
    const[name,setName]= useState('')
    const[color,setColor]= useState('')
    const nev=useNavigate()

    const validName = ()=>{
        if(color.length == 0 || type.length==0|| name.length>5||name.length==0){
           return false;
        }
        if(store.getState().addRoom.length==8){
            alert('its can be only 8 rooms in app')
            nev('/')
            return false
        }
        else{
            return true
        }

    }


    const add=()=>{
        if(validName()){
            store.dispatch(addRoom(type,name,color))
            console.log(store.getState())
            nev('/')
        }
        
        else{
            alert('one of your ditailse isn`t correct')
        }

    }


  return (
    <div style={{border:'5px solid #8AB6F9',borderRadius:'8px' , width:'46%',marginLeft:'27%', marginTop:'3cm'}}>

<select className='inp' style={{fontFamily:'Book Antiqua',marginTop:'1.3cm'}} onChange={(e)=>{setType(e.target.value)}} id="select">
  <option value="" selected disabled>Select a room type</option>
  <option value="bedroom">Bedroom</option>
  <option value="bathroom">Bathroom</option>
  <option value="kitchen">Kitchen</option>
</select> <br />
<div class="group">
<input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter room name" type="text" class="input"/>
</div>
<select className='inp' style={{fontFamily:'Book Antiqua',}} onChange={(e)=>{setColor(e.target.value)}} id="color-select">
<option value="" selected disabled>Select a room color</option>
  <option value="#B53389">Magenta</option>
  <option value="#2E294E">Indigo</option>
  <option value="#C3B091">Khaki</option>
  <option value="#5E5A80">Lavender</option>
  <option value="#FFA07A">Salmon</option>
  <option value="#00C9A7">Turquoise</option>
  <option value="#7FFFD4">Aquamarine</option>
  <option value="#FF4500">Orange</option>
  <option value="#00FF7F">Spring Green</option>
  <option value="#9370DB">Medium Purple</option>
  <option value="#7FFF00">Chartreuse</option>
  <option value="#FF00FF">Fuchsia</option>
</select> <br />
<button id='but' style={{width:'18%',height:'1.2cm',marginTop:'1.3cm',fontSize:'22px'}} onClick={add}>Create</button>
    </div>
  )
}
