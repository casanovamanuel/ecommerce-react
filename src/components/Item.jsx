import { Card, CardBody, CardFooter, CardHeader ,Button} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Item = ({ product }) => {
    const mensajeame = ()=>{alert("asdasdasd")}
    return (
        <Card>
            <CardHeader>{product.name}</CardHeader>
            <CardBody>{product.description}</CardBody>
            <CardFooter>
                <NavLink className="btn" to={`/item/${product.id}`}>Detalles</NavLink>
            </CardFooter>
        </Card>
    )
}

export default Item