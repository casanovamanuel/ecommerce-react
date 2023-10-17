import { useState } from 'react'
import Loquillo from './components/Loquillo'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import '@materializecss/materialize/dist/css/materialize.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Billboard from './components/Billboard'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Billboard mensaje="Ruta Inicio"/>}/>
        <Route exact path="/2" element={<Billboard mensaje="Ruta 2"/>}/>
        <Route exact path="/1" element={<Billboard mensaje="Ruta 1"/>}/>
        <Route exact path="/3" element={<Billboard mensaje="Ruta 3"/>}/>
      </Routes>
      <ItemListContainer greeting="Hola que tal?" />
    </BrowserRouter>
  )
}

export default App
