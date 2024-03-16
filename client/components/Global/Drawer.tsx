'use client'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { HiBars3 } from 'react-icons/hi2'
export default function DrawerExample({children}: {children: React.ReactNode | undefined}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button gap={4} borderRadius={'0 0 0 0'} justifyContent={'start'} bg={'white'} borderBottom={'1px solid #e3e3e3'} color={'black'} maxW={'100%'} position={'fixed'} top={'0'} left={'0'} w={'100vw'}  colorScheme='white'  onClick={onOpen}>
        <HiBars3 />
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        blockScrollOnMount={false}
        preserveScrollBarGap={false}
        trapFocus={false}
        closeOnEsc={true}
        
      >
        <DrawerOverlay />
        <DrawerContent>
         
          <DrawerHeader> <DrawerCloseButton /></DrawerHeader>

       <DrawerBody p={0}>
      
       {children}
       </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}