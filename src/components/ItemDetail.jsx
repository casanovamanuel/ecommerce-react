import { Box, Card,CardBody, CardHeader, CardFooter } from '@chakra-ui/react'
import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <Card>
        <CardHeader>{product.name}</CardHeader>
        <CardBody>
            <Box>
                una fotito
            </Box>
            <Box>
            {product.description}
            </Box></CardBody>
        <CardFooter>price: {product.price} - stock : {product.stock}</CardFooter>
    </Card>
  )
}

export default ItemDetail