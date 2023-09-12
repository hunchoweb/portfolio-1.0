import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      className='relative flex justify-center items-center'
      initial={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      whileInView={{ opacity: 1 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}    
    >
      <div className="rounded-full border border-[#333333] h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[180px] w-[180px] sm:h-[300px] sm:w-[300px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[180px] w-[180px] sm:h-[500px] sm:w-[500px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#F7AB0A] h-[350px] w-[350px] sm:h-[650px] sm:w-[650px] absolute mt-52 animate-pulse opacity-20" />
      <div className="rounded-full border border-[#333333] h-[180px] w-[180px] sm:h-[800px] sm:w-[800px] absolute mt-52 animate-ping" />
    </motion.div>
  )
}

export default BackgroundCircles