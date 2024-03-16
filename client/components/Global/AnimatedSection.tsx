"use client"
import React, {useEffect, useRef} from 'react'
import {motion, useAnimation, useInView} from "framer-motion"

const AnimatedSection = ({children} : {children : React.ReactNode}) => {
    const controls = useAnimation();
    const ref = useRef(null)
    const inView = useInView(ref, { amount: 0.3,});
        useEffect(() => {
            if (inView) {
                controls.start({ opacity: 1, y: 0, transition : {type : 'spring', damping: 25, stiffness: 100} });
              }
        }, [inView, controls])
  return (
    <motion.div
    ref={ref}
    initial={{opacity : 0.3, y: 10}}
    animate={controls} 
    style={{ overflow: 'hidden' }}
    >
{children}

    </motion.div>
  )
}

export default AnimatedSection