import React from 'react'
import Item from './Item'


const ItemList = ({products}) => {
  return (
    products.map((p)=><Item key={p.id} product={p}/>)
  )
}

export default ItemList