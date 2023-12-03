import React from 'react'
import Item from './Item'
import { SimpleGrid } from '@chakra-ui/react'


const ItemList = ({ products }) => {
  return (
    <SimpleGrid columns={{ sm: 3, md: 3 }} spacing={5}>
      {products.map((p) => <Item key={p.id} product={p} />)}
    </SimpleGrid>
  )
}

export default ItemList