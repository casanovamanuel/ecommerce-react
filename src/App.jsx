import { useState } from 'react'
import Loquillo from './components/Loquillo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


function App() {
  const [unaVariable, setUnaVariable] = useState("a") // hook de estado!!!
  const mensajito = "esto es un mensajito"

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola que tal?"/>
    </>
  )
}

export default App
