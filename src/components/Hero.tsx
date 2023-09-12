import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from "next/image";
import Link from 'next/link';

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words:[
            "Hi, The Name's Hunchoweb",
            'Guy-who-loves-Coffee.tsx',
            '<ButLovesToCodeMore />'
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image
          className='relative rounded-full h-[150px] w-[150px] sm:h-32 sm:w-32 mx-auto object-cover'
          src={'https://cdn.sanity.io/images/1aferhwb/production/752f0e89b1d013b9f97ae7c7ce6ef912864f6b53-399x399.jpg'} 
          alt={''}
          width={150}
          height={150} 
        />
        <div className='z-20 relative'>
            <h2 className='tracking-[15px] text-sm uppercase text-gray-500 pb-2'>Frontend Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor='#F7AB0A'/>
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>        
                </Link>
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>        
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>        
                </Link>
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>        
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero