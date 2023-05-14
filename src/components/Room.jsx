import React from 'react'
import store from '../store'
import { Link, useNavigate } from 'react-router-dom'


export default function Room(props) {
  let nev=useNavigate()
  const getRoom=()=>{
props.setRoom(props.val)
props.setFlag(!props.flag)
nev('/room')
  }
  return (
    <div onClick={getRoom}  style={{height:'2cm',width:store.getState().addRoom.length <= 3 ? '22%':'10%',backgroundColor:props.val.color,marginTop:'0.5cm',borderRadius:'6px'}}><p style={{fontFamily:'Book Antiqua',fontSize:'21px'}}>{props.val.name}</p></div>
  )
}
