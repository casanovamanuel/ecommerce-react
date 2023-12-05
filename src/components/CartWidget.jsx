import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Circle, VStack, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {
  const { cart } = useContext(CartContext)

  return (
    <NavLink className="center" to="/cart" >
      <VStack>
        <Circle bg="lightgreen" h='20' w='20'>
          <img height="48" width="48" alt="Carrito" src="data:image/png;base64,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" />
        </Circle>
        <Text>Productos: {cart.size()}</Text>
        <Text >Total: {cart.total()}</Text>
      </VStack>
    </NavLink>
  )

}

export default CartWidget