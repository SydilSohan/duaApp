// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
// import { twJoin } from 'tailwind-merge'

import { theme} from "./theme"
export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
      <ChakraProvider theme={theme}>
        {children}


      </ChakraProvider>
  )
}