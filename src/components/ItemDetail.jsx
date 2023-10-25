import { Box, Card,CardBody, CardHeader, CardFooter } from '@chakra-ui/react'
import React from 'react'
import ItemCounter from './ItemCounter'

const ItemDetail = ({product}) => {
  return (
    <Card>
        <CardHeader>{product.name}</CardHeader>
        <CardBody>
            <Box>
                una fotito
            </Box>
            <Box>
            <p>{product.description}</p>
            <p>price: {product.price} - stock : {product.stock}</p>
            </Box>
        </CardBody>
        <CardFooter>
            
        
        <ItemCounter maxCount={product.stock}/>
        </CardFooter>
    </Card>
  )
}

export default ItemDetail