import axios from 'axios'

import {
  FETCH_USUARIO_REQUEST,
  FETCH_USUARIO_SUCCESS,
  FETCH_USUARIO_ERROR,
  FETCH_CLEAR_STATE

} from "../tipos/types";


export const fetchUsuarioRequest = () => {

  return {

    type: FETCH_USUARIO_REQUEST


  }

}


export const fetchClearState = () => {

  return {

    type: FETCH_CLEAR_STATE,
    

  }

}

export const fetchUsuarioSuccess = (Email) => {

  return {

    type: FETCH_USUARIO_SUCCESS,
    payload: Email

  }

}

export const fetchUsuarioError = (error) => {

  return {

    type: FETCH_USUARIO_ERROR,
    payload: error


  }

}

export const fetchUsuario = (valor) => async dispatch => {

  
//procesar info
    //dispatch(fetchUsuarioRequest())

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users?email=${valor}`)

    res.data.length != 0 && console.log('hay data')

    //console.log(res.data, 'hola')

    //console.log(res.data.length, 'lenght')

    if (res.data.length === 0) {

//mandar error
      return dispatch(fetchUsuarioError('No se encontro el email'))
      
      //dispatch(fetchUsuarioError(true))
      

    
    }

    

//traer info si todo esta bien
    dispatch(fetchUsuarioSuccess(res.data))

  
}

export default fetchUsuario;