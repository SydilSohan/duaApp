import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/chakra/Provider'
import { Flex, VStack } from '@chakra-ui/react'
import {IoHandRightOutline, IoHome} from "react-icons/io5"
import { IoMdHome, IoMdBook, IoIosBookmark, IoIosChatboxes, IoIosHeart, IoIosBulb, IoIosBook, IoIosApps } from 'react-icons/Io'
import { BsHandThumbsUpFill } from 'react-icons/bs'
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
{/* <VStack borderRadius={'20px'} className='hidden lg:flex' bg={'white'} height={'90vh'} w={'90px'} alignItems={'center'} justifyContent={'center'}>
  <IoHandRightOutline  className="bg-green-600 px-1 py-2  rounded-md text-white text-4xl flex justify-self-start"  />

<VStack spacing={8}>
  <IoHome  className="bg-slate-100 text-2xl  rounded-full "  />
  <IoIosApps  className="bg-slate-100 text-2xl  rounded-full " />
  <IoIosBulb className="bg-slate-100 text-2xl  rounded-full "  />
  <IoIosBookmark className="bg-slate-100 text-2xl  rounded-full " />
  <IoIosHeart className="bg-slate-100 text-2xl  rounded-full " />
  <IoIosChatboxes  className="bg-slate-100 text-2xl  rounded-full " />
  <IoIosBook className="bg-slate-100 text-2xl  rounded-full "  />
</VStack>
<BsHandThumbsUpFill  className="bg-green-600 px-1 py-2  rounded-md text-white text-4xl flex justify-self-start"  />

</VStack> */}
<div className=''>
{children}
       
</div>
   
    
</Flex>

          </Providers>
         
          </body>
          
    </html>
  )
}
