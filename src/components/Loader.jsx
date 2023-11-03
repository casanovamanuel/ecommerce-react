import { Spinner } from '@chakra-ui/react'
import React, { useState } from 'react'

const Loader = () => {
  let [loading, setLoading] = useState(true)


    return (
        loading? <Spinner/> : <></>  
  )
}

export default Loader