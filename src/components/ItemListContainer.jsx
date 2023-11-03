import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {collection, getFirestore, getDocs} from 'firebase/firestore'


const ItemListContainer = () => {
  const {categoryId} = useParams()
  const [products, setProducts] = useState([]);
  //@todo mejorar esto
  useEffect(()=>
  {
    const db = getFirestore()
    const productCollection = collection(db, "products")
    getDocs(productCollection)
      .then((snapshot)=>{
        setProducts(snapshot.docs.map((doc)=>({ id : doc.id , ...doc.data() })))
      })
  },[])
  



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