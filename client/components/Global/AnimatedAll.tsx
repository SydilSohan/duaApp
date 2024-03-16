"use client"
import React, {useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {}

const AnimatedAll = ({children} : {children: React.ReactNode}) => {
  const ref = useRef<HTMLDivElement>(null)
  const {scrollYProgress} = useScroll({target: ref, offset: ["0 1", "1.33 1"]})
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const blurProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

    return (
    <motion.div ref={ref} style={{scale: scaleProgress, opacity: blurProgress}} >
{children}

    </motion.div>
  )
}

export default AnimatedAll