import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom';
import Title from './components/Title';
import Home from './components/Home';
import AddRoom from './components/AddRoom';
import InsideRoom from './components/InsideRoom';
import store from './store';


function App() {
  const [currentRoom,setRoom]=useState([])
  const[flag,setFlag]=useState(true)

  return (
    <div className="App">
      <Title/>
      <BrowserRouter> 
         <Routes>
           <Route path='/' element={<Home setRoom={setRoom}flag={flag} setFlag={setFlag} />}/>
           <Route path='/addRoom' element={<AddRoom />}/>
           <Route path='/room' element={<InsideRoom setRoom={setRoom}flag={flag} id={currentRoom.id} currentRoom={currentRoom} />}/>




          </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;

class Rooms{
  products = [];
  constructor(name,color,type){
    this.name=name;
    this.color=color;
    this.type=type;
  
  }
 }


 class Product {
  constructor(name){
    this.name=name;
  }
 }
