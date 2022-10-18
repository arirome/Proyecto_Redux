import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Respuestaslogin =() => {

    const [errorMessage, setErrorMessage] = useState(null)

    const buscadorUsuario = useSelector((state) => state.buscadorUsuario)



   /*  buscadorUsuario.error !== '' 
    ?
    (setErrorMessage('error'),
    setTimeout(() => {
        setErrorMessage(null)
    }, 3000)) */
 
   
  
    

  return (
    <div>

 
 
{/* //<span className='text-danger'>{setErrorMessage}</span>
 */}




<span className='text-danger'>error</span>




 
{/* //{buscadorUsuario.error == '' && window.location.href= `/Panel`}
 */}

    </div>
  )
}

export default Respuestaslogin