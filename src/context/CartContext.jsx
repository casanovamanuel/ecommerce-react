import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartContextProvider = ({ children }) => {
    const cartDefault = {
        elements: [],
        total: function () { // el uso de flechitas aca se rompe
            return this.elements.reduce((acumulado, actual) => acumulado + (actual.value * actual.quantity), 0)
        },
        size: function () {
            return this.elements.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
        }
    }
    const [cart, setCart] = useState(cartDefault)

    const addToCart = function (element) {

        if (element.id === undefined) {
            alert("no no no  mal armado")
        }
        if (cart.elements.some((someElement) => someElement.id === element.id)) {
            alert("no no no repitas")
        } else {
            let newCart = { ...cart }
            newCart.elements.push(element)
            setCart(newCart)
        }

    }

    const removeFromCart = (id) => {
        let newCart = { ...cart }
        newCart.elements = newCart.elements.filter((filterElement) => filterElement.id !== id)
        setCart(newCart)
    }

    const clearCart = () => {
        setCart(cartDefault)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}