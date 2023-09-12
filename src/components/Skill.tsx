import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{ 
            x: directionLeft ? -200 : 200,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src='https://cdn.sanity.io/images/1aferhwb/production/752f0e89b1d013b9f97ae7c7ce6ef912864f6b53-399x399.jpg'
            className='rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter grayscale group-hover:grayscale-0 transition duration-300 ease-in-out'
        />
    </div>
  )
}

export default Skill