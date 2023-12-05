import { Box, Card, CardBody, CardHeader, CardFooter, Spinner, Center } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ItemCounter from './ItemCounter'
import { getDownloadURL, ref, getStorage } from "firebase/storage"


const ItemDetail = ({ product }) => {
  const [uriImage, setUriImage] = useState("")

  useEffect(() => {
    if (product.image !== undefined) {
      const appStorage = getStorage()
      const imageref = ref(appStorage, product.image)
      getDownloadURL(imageref).then((uri) => setUriImage(uri))
    }
  }, [product])
  if (product.image === undefined) {
    return (<Spinner />)
  }
  return (
    <Center>
      <Card w={400}>
        <CardHeader>{product.name}</CardHeader>
        <CardBody>
          <Box>
            <img height='64' width='64' src={uriImage} />
          </Box>
          <Box>
            <p>{product.description}</p>
            <p>price: {product.price} - stock : {product.stock}</p>
          </Box>
        </CardBody>
        <CardFooter>
          <ItemCounter productId={product.id}
            maxCount={product.stock}
            price={product.price}
            productName={product.name} />
        </CardFooter>
      </Card>
    </Center>
  )
}

export default ItemDetail