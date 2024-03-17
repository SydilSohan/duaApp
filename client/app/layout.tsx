import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/chakra/Provider'
import { Flex, VStack } from '@chakra-ui/react'
import {IoHandRightOutline, IoHome} from "react-icons/io5"

import { BsApp, BsBook, BsChat, BsHandThumbsUpFill } from 'react-icons/bs'
import { FaBookmark, FaHeart, FaLightbulb } from 'react-icons/fa'
const Monts = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reefers Club',
  description: 'Where Cannabis Comes Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${Monts.className} overflow-x-hidden `}>
        
        <Providers>
          
      <Flex className='w-screen bg-repeat-y justify-center items-start mx-auto min-h-screen ' bgColor={'#EBEEF2'} pt={10}>

<div className=''>
{children}
       
</div>
   
    
</Flex>

          </Providers>
         
          </body>
          
    </html>
  )
}
