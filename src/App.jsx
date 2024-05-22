import './App.css'
import Form from './Components/Form'
import Producto from './Components/Producto'
import { productos } from './utils/productos'

function App() {
  return (
  <>
      {productos.map((item) => 
      <Producto key={item.id} item={item}/>)}
      <Form/>
  </>
  )
}

export default App
