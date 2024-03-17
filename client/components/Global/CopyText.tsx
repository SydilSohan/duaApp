'use client'
import { Button, useToast } from "@chakra-ui/react"
import { FaCopy } from "react-icons/fa"

export default function ToastExample({textValue} : {textValue : string}) {
    const toast = useToast()
    const handleClick = () => {
        navigator.clipboard.writeText(textValue)
        toast({
            title: 'Success',
            description: "Copied to clipboard",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }
    return (
      <Button
        onClick={handleClick}
      >
        <FaCopy />
      </Button>
    )
  }