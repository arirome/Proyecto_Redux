
import Rutas from "./routes/Rutas";

//redux import
import { Provider } from 'react-redux'
import store from './redux/store/store'
//

function App() {


  return (
    <>
    <Provider  store={store}>

    <Rutas/>

    </Provider>
   
    </>
    
  )
}

export default App
