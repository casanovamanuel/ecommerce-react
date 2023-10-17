import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <div>{greeting}</div>
     <ItemList/>
    </>
  )
}

export default ItemListContainer