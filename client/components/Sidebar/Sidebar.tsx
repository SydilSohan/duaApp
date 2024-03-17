'use client'
import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Categories from './Categories'
import { Dua, DuaCategory, DuaSubcategory } from '@/types/types'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { HiBars3 } from 'react-icons/hi2'
type Props = {
  data : DuaCategory[]
  subCats : DuaSubcategory[]
  activeCat : string
  subCatId : string
  searchParams?: {[key : string] : string | string[] | undefined} 
  subDuas : Dua[] | null
}

const Sidebar = ({data, subCats ,  subDuas,  activeCat, subCatId}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>

<>
      <Button gap={4} borderRadius={'0 0 0 0'} p={4} h={'50px'} justifyContent={'start'} bg={'white'} borderBottom={'1px solid #e3e3e3'} color={'black'} maxW={'100%'} position={'fixed'} top={'0'} left={'0'} w={'100vw'}  colorScheme='white'  onClick={onOpen}>
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
         
          <DrawerCloseButton />

       <DrawerBody p={0}>
      
       <Categories data={data} subCats={subCats} activeCat={activeCat} subCatId={subCatId} subDuas={subDuas} onClose={onClose} />
      
       </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
   

 
    
    </>
  )
}

export default Sidebar