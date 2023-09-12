import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 pt-[8px] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src='https://cdn.sanity.io/images/1aferhwb/production/9f04f2006b96164d5a96bf6e2b616ee7a52cd749-200x200.jpg' 
            alt=''
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO of 100DEVS</h4>
            <p className='font-bold text-2xl mt-1'>100DEVS</p>
            <div className='flex space-x-2 my-2'>
                <Image
                    src='https://cdn.sanity.io/images/1aferhwb/production/cb46967d05c0dfbe9c48c9eef3984e8d3afedf77-512x512.png' 
                    alt=''
                    width={10}
                    height={10}
                    className='h-10 w-10 rounded-full'
                />
                <Image
                    src='https://cdn.sanity.io/images/1aferhwb/production/cb46967d05c0dfbe9c48c9eef3984e8d3afedf77-512x512.png' 
                    alt=''
                    width={10}
                    height={10}
                    className='h-10 w-10 rounded-full'
                />
                <Image
                    src='https://cdn.sanity.io/images/1aferhwb/production/cb46967d05c0dfbe9c48c9eef3984e8d3afedf77-512x512.png' 
                    alt=''
                    width={10}
                    height={10}
                    className='h-10 w-10 rounded-full'
                />
            </div>
            <p className='uppercase py-5 text-gray-300'>MON JAN 24 2022 - THU APR 06 2023</p>

            <ul className='list-disc space-y-4 ml-5 text-lg h-40 overflow-y-scroll scrollbar-thin scrollbar-track-black/10 scrollbar-thumb-[#7AB0A]/80'>
                <li>I craft the client's needs on web, mobile, and blockchain</li>
                <li>I craft the client's needs on web, mobile, and blockchain</li>
                <li>I craft the client's needs on web, mobile, and blockchain</li>
                <li>I craft the client's needs on web, mobile, and blockchain</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard