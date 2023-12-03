import React, { useState } from 'react'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
import { Image } from '@chakra-ui/react'

const Brand = () => {
    const [imageUri, setImageUri] = useState("")
    const appStorage = getStorage()
    const imageRef = ref(appStorage, "logo-no-background.svg")
    getDownloadURL(imageRef).then((uri) => { setImageUri(uri) })
    return (
        <Image boxSize='160px' src={imageUri}></Image>
    )
}

export default Brand