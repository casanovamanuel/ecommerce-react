import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Flex, Button, Spacer, Text, Center } from '@chakra-ui/react'

const ItemCounter = ({ maxCount, productId, price }) => {
    const [counter, setCounter] = useState(0)
    const { addToCart } = useContext(CartContext)

    const increment = () => {
        if (counter < maxCount) {
            setCounter(counter + 1)
        }
    }
    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }



    const avisar = () => {
        //alert("agregar: " + productId + " - cantidad:" + counter)
        addToCart({
            id: productId,
            quantity: counter,
            value: price
        })
    }

    return (
        <Flex>

            <Button onClick={decrement}>-</Button>
            <Center m={2}>{counter} un   </Center>

            <Button onClick={increment}>+</Button>
            <Spacer />
            <Button ml={2} onClick={avisar}>Agregar al Carrito</Button>

        </Flex>
    )
}

export default ItemCounter