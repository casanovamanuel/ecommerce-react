import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import '@materializecss/materialize/dist/css/materialize.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { getDownloadURL, ref, getStorage } from "firebase/storage"

function App() {
  const [uriImage, setUriImage] = useState("")

  useEffect(() => {
    const appStorage = getStorage()
    const lalala = ref(appStorage, "tornillo-madera.png")
    getDownloadURL(lalala).then((uri) => setUriImage(uri))
  }, [])

  return (
    <ChakraProvider>
      <img src={uriImage} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
