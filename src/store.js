import {configureStore} from '@reduxjs/toolkit';
import addRoom from './addRoom';




const reducer={
    addRoom,
   
}

const store=configureStore({reducer});

export default store;