'use client';
import About from '@/components/About';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0'>
      <Header/>
      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* Projects  */}

      {/* Contact Me */}

    </div>
  )
}
