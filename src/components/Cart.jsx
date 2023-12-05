import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import {
    Heading, Button, Container, VStack,
    Table, TableContainer, TableCaption, Thead,
    Td, Th, Tr, Tbody, Tfoot
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)

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
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.elements.map((element) => {
                            return (<Tr>
                                <Td>{element.name}</Td>
                                <Td>{element.quantity}</Td>
                                <Td>{element.value * element.quantity}</Td>
                            </Tr>)
                        })}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th></Th>
                            <Th>Cantidad: {cart.size()}</Th>
                            <Th>Total: {cart.total()}</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </VStack>

    )
}

export default Cart