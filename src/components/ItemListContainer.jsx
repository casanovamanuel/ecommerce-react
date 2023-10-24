import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({products}) => {
  const {categoryId} = useParams()
  
  //@todo mejorar esto
  let filtered = undefined
  if (categoryId) {
    filtered = products.filter((product)=>product.category == categoryId)
  }else{
    filtered = products
  }
  
  return (
    
     <ItemList products={filtered}/>
    
  )
}

export default ItemListContainer