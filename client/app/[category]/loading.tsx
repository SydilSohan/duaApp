import { Flex, HStack, InputGroup, InputRightAddon, Skeleton, SkeletonCircle, SkeletonText, Spinner, VStack, Box, Container } from '@chakra-ui/react'
import React from 'react'
import "./custom.css"

import { BsBookmark, BsLightbulb, BsShare, BsInfo } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
type Props = {}

const loading = (props: Props) => {
  return (
    <main className="flex flex-grow  flex-col justify-start text-center pb-16 gap-4 max-w-screen-xl m-2">
      <Flex className='flex-col lg:flex-row' justifyContent={'space-between'}>
      
        <h2 className='lg:ml-4 my-4 lg:text-4xl font-normal text-left'>Loading...</h2>
        <InputGroup display={'flex'} bg={'white'} px={4} py={2} borderRadius={'12px'} maxW={300} size='sm'>
          
          <InputRightAddon borderRadius={'6px'}>
            <FaSearch />
          </InputRightAddon>
        </InputGroup>
        
      </Flex>
      <HStack alignItems={'start'} justifyContent={'start'} >
        <div   className='hidden lg:flex sticky top-4 max-w-[380px]'>
        <div className='rounded-t-2xl  bg-white  overflow-auto sticky top-0 lg:min-w-[380px] overflow-x-hidden hidden lg:flex flex-col'>
    <div className='bg-green-700 text-white p-4 rounded-t-2xl '> Categories</div>
    <Container maxW={'400px'}  bg='white'>
                  <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
                  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />

                  <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
                  <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />

                </Container>
    </div>
        </div>
        <VStack gap={4} maxW={['100%', "70%"]} w={['100%','850px']}>
          { 
            [...Array(5)].map((_, index) => (
              <div key={index}  className=' bg-white p-4  rounded-2xl flex flex-col min-w-full '>
           
              
                  <div  className='min-w-[90vw] sm:min-w-min bg-white flex flex-col'   >
                  <SkeletonCircle size='10' />
                  <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
                  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />

                  <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
                  <SkeletonText mt='4' noOfLines={1} spacing='4' skeletonHeight='2' />

                </div>
                  <Flex className='flex-col lg:flex-row gap-6' justifyContent={'space-between'}>
                  <Flex bg={'white'}> <Skeleton width={'100%'} height={'40px'} /></Flex>
                    <HStack spacing={4}>
                      <BsBookmark className={"cursor-pointer"} />
                      <BsLightbulb className={"cursor-pointer"} />
                      <BsShare className={"cursor-pointer"} />
                      <BsInfo className={"cursor-pointer"} />
                    </HStack>
                  </Flex>
              </div>
            ))
          }
        </VStack>
      </HStack>
    </main>
  )
}

export default loading