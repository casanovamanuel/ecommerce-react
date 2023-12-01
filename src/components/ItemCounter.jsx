import { Button } from '@chakra-ui/react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

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
        <div>
            <div>
                <Button onClick={decrement}>-</Button>
                <Button onClick={avisar}>{counter} un</Button>
                <Button onClick={increment}>+</Button>
            </div>
        </div>
    )
}

export default ItemCounter