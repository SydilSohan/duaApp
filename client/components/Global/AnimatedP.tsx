"use client"
// import React from "react";
// import { motion } from "framer-motion";

// const AnimatedTextCharacter = ({ text } : {text : string}) => {
// // splitting text into letters
//   const letters = Array.from(text);

// // Variants for Container
//   const container = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
//     }),
//   };

// // Variants for each letter
//   const child = {
//     visible: {
//       opacity: 1,
//       x: 0,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       x: -20,
//       y: 10,
//       transition: {
//         type: "spring",
//         damping: 12,
//         stiffness: 100,
//       },
//     },
//   };

//   return (
//     <motion.div
//       style={{ overflow: "hidden", display: "flex"}}
//       variants={container}
//       initial="hidden"
//       animate="visible"
//     >
//       {letters.map((letter, index) => (
//         <motion.span variants={child} key={index}>
//           {letter === " " ? "\u00A0" : letter}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default AnimatedTextCharacter;
import React, { useRef, useState } from "react";
import { motion , useInView} from "framer-motion";
// import { useInView } from "react-intersection-observer";
const AnimatedTextCharacter = ({ text }: { text: string }) => {
const ref = useRef(null)

  const [hasAnimated, setHasAnimated] = useState(false);

  const inView = useInView(ref , {once: true});

  // Don't animate if it has already animated or not in view
  const shouldAnimate = inView;

  // Mark as animated once animation is complete
  const onAnimationComplete = () => {
    setHasAnimated(true);
  };

  // splitting text into letters
  const letters = Array.from(text);

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex" }}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      onAnimationComplete={onAnimationComplete}
      ref={ref}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
