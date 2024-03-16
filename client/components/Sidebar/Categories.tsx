'use client'
import { HStack, VStack, Text, Flex, useDisclosure } from '@chakra-ui/react'
import React, { useCallback } from 'react'
import Image from 'next/image'
import { Dua, DuaCategory, DuaSubcategory } from '@/types/types'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import ScrollLink from '../Global/Scroll'
import { ScrollArea } from '../ui/scroll-area'

type Props = {
  data : DuaCategory[]
  subCats : DuaSubcategory[]
  activeCat : string
  subCatId : string
  subDuas : Dua[] | null,
  onClose? : () => void
}
   
const Categories =  ({data, subCats, subCatId, subDuas, onClose} : Props) => {

  const searchParams = useSearchParams()
  const activeCat  = searchParams.get("cat")
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair

    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)
   
        return params.toString()
      },
      [searchParams]
    )
  return (
  <ScrollArea className='rounded-t-2xl  h-screen   bg-white  overflow-auto sticky top-0'>
    <div className='bg-green-700 text-white p-4 rounded-t-2xl '> Categories</div>
<VStack   p={2} >{data.map((item ) => (

  
<Flex flexDir={'column'} flexGrow={1} w={'100%'} key={item.id}>
    <Link href={`/${encodeURIComponent(item.cat_name_en.replace(/\s+/g, '-')).toLocaleLowerCase()}?cat=${item.cat_id.toString()}`}>
        <HStack className={"bg-slate-100 rounded-lg "}>
    <Image className='bg-white rounded-lg m-2' src={'/duar_gurutto.svg'} width={50} height={50} alt={item.cat_name_en} />
    <VStack alignItems={'start'} justifyContent={'start'} spacing={0} textAlign={'left'}>
        <Text fontSize={'large'} as={'h2'}  >{item.cat_name_en} </Text>
        <Text fontSize={'medium'} as={'h2'}  > Subcategories: {item.no_of_subcat} </Text>

    </VStack>
    </HStack>
    </Link>

   {activeCat === item.cat_id.toString() ? 
   
   <VStack mt={6} justifyContent={'start'} alignItems={'start'}  textAlign={'start'} >
    {subCats.map((subItem) => 
          <VStack pl={8} alignItems={'start'} key={subItem.id}>

       <Link href={ '?' + createQueryString("subcat", subItem.subcat_id.toString())} >
<Text fontSize={'medium'}  >
{subItem.subcat_name_en}
    </Text>
    </Link>
        {subCatId === subItem.subcat_id.toString() &&  subDuas && 
        
        <VStack  pl={4} alignItems={'start'}>

          {subDuas.map((dua) => <VStack key={dua.id}>
            <HStack>
               <Image src={'/duaarrow.svg'} alt=''  width={20} height={20} />
          {/* <Link href={ '?' + createQueryString("dua", dua.dua_id.toString())}>
       <Text fontSize={'small'}>

       {dua.dua_name_en}
       </Text>
        </Link> */}
        <ScrollLink href={`#${dua.dua_id}`} >
        <Text onClick={onClose} fontSize={'small'}>

{dua.dua_name_en}
</Text>
        </ScrollLink>
            </HStack>
           
            </VStack>
            
            )}
      
        </VStack>}

    
    

          </VStack>
     
  
    )}
   </VStack>
   
   : 
   <></>
   
   }

</Flex>


))}</VStack>
    
  </ScrollArea>

      

    
  )
}

export default Categories