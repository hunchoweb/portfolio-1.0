import React from 'react'
import { motion } from 'framer-motion'
import { useClient } from 'sanity'
import { PageInfo } from '../../typings'


type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className='flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 pt-10 h-screen justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img
            initial={{
                x: -200,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src='https://cdn.sanity.io/images/1aferhwb/production/64ce20fc126169d7bc3f91ddbb37dac95d703b2b-2048x2048.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover'
        />
        

        <div className='space-y-10 pt-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a{' '}
                <span className='decoration-[#F7AB0A]/50 underline'>little</span>{' '}
                background
            </h4>
            <p className='text-lg sm:overflow-y-hidden sm:h-full h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black/10 scrollbar-thumb-[#7AB0A]/80'>
                I'm Ayo. You might also know me as Huncho 🐐. I'm a logical and flexible developer with a passion for finding efficient solutions to complex problems and spends a huge chunk of my time down internet rabbit holes in search for inspiration or answers. 💯 Experience with code design, development, and maintenance. At the heart, I am a problem solver who enjoys creating meaningful experiences by focusing on what matters most. I like to dive into the details and understand the big picture, while simultaneously pushing boundaries to elevate everything I do. Nothing lifts my spirits more than to experiment across digital platforms, leading with my curiosity. I'm passionate about accessibility, storytelling and the power of creating digital experiences that make emotional connections. The ultimate thrill is fixing a bug that has kept me awake or totally rocking a recipe I've been dying to nail. Also did I mention I love music?😂
            </p>
        </div>
    </motion.div>
  )
}

export default About