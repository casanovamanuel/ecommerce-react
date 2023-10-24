import { useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import '@materializecss/materialize/dist/css/materialize.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const productos = [
    { id: "1", name: "tornillo madera", description: "tornillo para asegurar algo a una madera", category: 1, price: 100, stock: 100 },
    { id: "2", name: "tornillo plastico", description: "tornillo para juntar piezas plasticas", category: 1, price: 100, stock: 100 },
    { id: "3", name: "clavo grande", description: "clavo para piezas grandes", category: 2, price: 100, stock: 100 },
    { id: "4", name: "calvo chiquito", description: "clavo para muebles", category: 2, price: 100, stock: 100 },
    { id: "5", name: "tuerca pequena", description: "tuerca 6 mm", category: 3, price: 100, stock: 100 },
    { id: "6", name: "tuerca mediana", description: "tuerca 12 mm", category: 3, price: 100, stock: 100 },
    { id: "7", name: "tuerca grande", description: "tuerca 18 mm", category: 3, price: 100, stock: 100 }
  ]
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer products={productos} />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer products={productos} />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer products={productos}/>} />
        </Routes>

      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
