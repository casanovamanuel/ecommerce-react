import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { Flex, Box, Spacer, Button, Center } from '@chakra-ui/react'
import Brand from './Brand'


const NavBar = () => {
  return (
    <Flex bg="lightcyan">
      <Link to="/">
        <Brand />
      </Link>
      <Spacer />
      <Center p='4'>
        <Link to="/category/1">
          <Button bg="Blue" color="White">Tornillos</Button>
        </Link>
        <Link to="/category/2">
          <Button bg="Blue" color="White">Clavos</Button>
        </Link>
        <Link to="/category/3">
          <Button bg="Blue" color="White">Tuercas</Button>
        </Link>
      </Center>
      <Spacer />
      <Box p='4'>
        <CartWidget />
      </Box>
    </Flex>

  )
}
export default NavBar