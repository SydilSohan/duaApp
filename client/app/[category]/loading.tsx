import { Spinner } from '@chakra-ui/react'
import React from 'react'
import "./custom.css"
type Props = {}

const loading = (props: Props) => {
  return (
    <div><Spinner />
    
    </div>
  )
}

export default loading