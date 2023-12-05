import { Button } from '@chakra-ui/react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';


const PurchaseForm = () => {
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const { cart, clearCart } = useContext(CartContext)

    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    const order = {
        name,
        telephone,
        email,
        products: cart.elements,
        total: cart.total()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderRef = addDoc(orderCollection, order).then((id) => clearCart())
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder={'Nombre'} />
            <input type="text" onChange={(e) => setTelephone(e.target.value)} placeholder={'telefono'} />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder={'email'} />
            <Button type="submit">Guardar</Button>
            <NavLink to="/">
                <Button>Volver</Button>
            </NavLink>

        </form>

    )
}

export default PurchaseForm