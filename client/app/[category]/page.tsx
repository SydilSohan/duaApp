import AudioPlayer from '@/components/Global/AudioPlayer'
import Sidebar from '@/components/Sidebar/Sidebar'
import { Dua, DuaCategory, DuaSubcategory } from '@/types/types'
import { Flex, HStack, Input, InputGroup, InputRightAddon, Text, VStack } from '@chakra-ui/react'
import {BsCopy, BsBookmark, BsLightbulb,  BsShare, BsInfo} from "react-icons/bs"
import Image from 'next/image'
import React from 'react'
import {  IoIosSearch } from 'react-icons/Io'
import Categories from '@/components/Sidebar/Categories'


async function getData() {
  const res = await fetch('http://localhost:3000/api/cat')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
async function getDuas(catId : any, type?: string) {
  if (!catId) throw new Error('no id provided')

  const res = await fetch(`http://localhost:3000/api/dua/${catId}?type=${type}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
async function getSubCat(subId : string | undefined) {
    
    if (!subId) throw new Error('no id provided')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const res = await fetch(`http://localhost:3000/api/subcat/${subId}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
const page = async  ({ params, searchParams }: { params: { category: string } ; searchParams: {[key : string] : string | string[] | undefined} }) => {
const catId  = searchParams.cat as string
const subCatId = searchParams.subcat as string
const data : DuaCategory[]= await getData() 
const subCats : DuaSubcategory[] = await getSubCat(catId)
const duas : Dua[] = await getDuas(catId)
const subDuas: Dua[] | null = searchParams.subcat ? await getDuas(searchParams.subcat, "sub") : null;
  return (
    <main className="flex flex-grow  flex-col justify-start text-center pb-16 gap-4 max-w-screen-xl m-2">
      
<Flex className='flex-col lg:flex-row' justifyContent={'space-between'}>
  <div className='flex sm:hidden'>

  <Sidebar data={data} subCatId={subCatId} subDuas={subDuas} subCats={subCats} activeCat={catId} />
  </div>
<h2 className='lg:ml-4 mb-4 lg:text-4xl font-normal text-left'>{params.category}</h2>


<InputGroup  display={'flex'} bg={'white'} px={4} py={2} borderRadius={'12px'} maxW={300}  size='sm'>
    
    <Input focusBorderColor='#15803D' border={'none'}  type='text' placeholder='Search By Dua Name' />
    <InputRightAddon borderRadius={'6px'}>
      <IoIosSearch />
    </InputRightAddon>
  </InputGroup>
</Flex>

<HStack alignItems={'start'} justifyContent={'start'} className='max-w-screen-xl w-full' >

  
<div className='hidden lg:flex sticky top-0'>

<Categories data={data} subCats={subCats} activeCat={catId} subCatId={subCatId} subDuas={subDuas}  />


</div>
   
      <VStack gap={4} maxW={['100%', "70%"]}  >

        {duas.map((dua)=>
        
        <div key={dua.id} id={dua.dua_id.toString()} className=' bg-white p-4  rounded-2xl flex flex-col min-w-full'>
      <HStack>
        <Image alt='' width={40} height={40} src={'/duacard.svg'} />
        <Text fontWeight={'500'} fontSize={16} className='text-green-500'>
         {dua.id}. {dua.dua_name_en}
        </Text>
       
      </HStack>
      <VStack  justifyContent={'start'} alignItems={'start'} textAlign={'left'} >
      <Text   fontSize={18}  my={8} >
          {dua.top_en}
        </Text>
        <Text  fontSize={26} fontWeight={700} my={4}  justifySelf={'end'} alignSelf={'end'} textAlign={'right'}>
          {dua.dua_arabic}
        </Text>
        <Text  wordBreak={'break-all'} fontSize={18}  className='italic' ><strong>Transliteration : </strong> {dua.translation_en}</Text>
        <Text   >Translation: {dua.translation_en}</Text>
        <Text  fontSize={18}   className='text-green-600'>Reference</Text>
        <Text  fontSize={18}  className='text-gray-500'>
        {dua.refference_en}

        </Text>
<Flex className='flex-col lg:flex-row gap-6'  justifyContent={'space-between'}>
<AudioPlayer src={dua.audio} />
  
  <HStack spacing={4}>
<BsCopy className={"cursor-pointer"}  />
<BsBookmark className={"cursor-pointer"}  />
<BsLightbulb  className={"cursor-pointer"} /><BsShare className={"cursor-pointer"} />
<BsInfo className={"cursor-pointer"}  />

  </HStack>
  </Flex>     
      </VStack>


      </div>
        )}
 
      

        
      </VStack>
    
</HStack>

    </main>
  )
}

export default page