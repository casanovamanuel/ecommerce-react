import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({products}) => {
  const {itemId} = useParams()
  const product = products.find((p)=>p.id == itemId)
  
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer