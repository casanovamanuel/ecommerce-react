import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
//import '@materializecss/materialize/dist/css/materialize.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { CartContextProvider } from './context/CartContext'


function App() {


  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
            <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>

        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App
