import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {
    Heading, Button, Container, VStack,
    Table, TableContainer, TableCaption, Thead,
    Td, Th, Tr, Tbody, Tfoot, Icon
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext)

    if (cart.size() === 0) {
        return (
            <VStack>
                <Container centerContent>
                    <Heading>El carrito esta vacío</Heading>
                </Container>
                <Container centerContent>
                    <NavLink to="/">
                        <Button>VOLVER</Button>
                    </NavLink>
                </Container>
            </VStack>
        )
    }


    return (
        <VStack minWidth="100%" >
            <TableContainer minWidth="800px">
                <Table>
                    <TableCaption placement="top">Productos en el Carrito</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th>Cantidad</Th>
                            <Th>Precio</Th>
                            <Th>Borrar?</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.elements.map((element) => {
                            return (<Tr key={element.id}>
                                <Td>{element.name}</Td>
                                <Td>{element.quantity}</Td>
                                <Td>{element.value * element.quantity}</Td>
                                <Td>
                                    <Button bg="red" onClick={() => removeFromCart(element.id)}>
                                        <Icon as="WarningIcon" color="white" />
                                    </Button>
                                </Td>
                            </Tr>)
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th>Cantidad: {cart.size()}</Th>
                            <Th>Total: {cart.total()}</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            <NavLink to="/purchase">
                <Button>Comprar</Button>
            </NavLink>
        </VStack>

    )
}

export default Cart