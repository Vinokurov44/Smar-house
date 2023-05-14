import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import Room from './Room'
import  './home.css'

export default function Home(props) {

  return (
    <div >
<div style={{display:'flex',borderRadius:'6px',marginTop:'1.5cm',justifyContent:'space-evenly',backgroundColor:store.getState().addRoom.length>0?'#8AB6F9' : 'transparent' ,height:'3cm',width: store.getState().addRoom.length <= 3 ? '30%' : '70%' ,marginLeft:store.getState().addRoom.length <= 3 ?'35%':'15%' }}>
    {store.getState().addRoom.map((val)=>{
       return <Room val={val} setRoom={props.setRoom} flag={props.flag} setFlag={props.setFlag}/>
    })}
</div>
      <Link to={'/addRoom'}><button style={{fontSize:'220px',width:'19%',borderRadius:'50%',border: 'none',marginTop:'4.5cm'}}>+</button></Link> 
    </div>
  )
}
