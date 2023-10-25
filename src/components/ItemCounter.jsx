import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ItemCounter = ({maxCount, productId}) => {
    const [counter, setCounter] = useState(0)

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
    const avisar = () => {alert("agregar: " + productId + " - cantidad:" +counter)}

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