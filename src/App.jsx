import { useState } from 'react'
import Loquillo from './components/Loquillo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import '@materializecss/materialize/dist/css/materialize.min.css'

function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola que tal?"/>
    </>
  )
}

export default App
