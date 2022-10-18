//Los reducers se especifican en un archivo index el cual exportara todos estos. 

import { combineReducers } from "redux";
import {
    FETCH_CLEAR_STATE
  
  } from "../tipos/types";


import  buscadorUsuario  from './login';

export default combineReducers({
    buscadorUsuario  
})

/* 
const rootReducer = (state, action) => {
    if (action.type === RESET_STORE) {
      state = undefined;
    }
    return appReducer(state, action)
  } */