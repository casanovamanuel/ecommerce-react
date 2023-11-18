import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { doc, getFirestore, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [product, setProduct] = useState({});
  //@todo mejorar esto
  useEffect(() => {
    const db = getFirestore()
    const productDoc = doc(db, "products", itemId)
    getDoc(productDoc)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() })
      })
  }, [])


  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer