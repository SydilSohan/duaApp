'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
type Props = {};

const NewScroll = ({text, link} : { text : string, link : string}) => {

  return (
    <> 
    <Link className='w-full fixed bottom-4' href={link}>
      <motion.div     initial={{opacity : 0.3, y: 10}} animate={{ opacity: 1, y: 0, transition : {type : 'spring', damping: 25, stiffness: 100} }}>
      <Button className='w-10/12' fontSize={'16px'} borderRadius={'200px'} px={8} variant={'gradient'}  py={6}> {text} </Button>

        
      </motion.div>
    
    </Link>
    </>
  );
};

export default NewScroll;
