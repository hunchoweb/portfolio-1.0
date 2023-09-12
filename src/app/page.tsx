'use client';
import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0'>
      <Header/>
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn.sanity.io/images/1aferhwb/production/752f0e89b1d013b9f97ae7c7ce6ef912864f6b53-399x399.jpg"
              alt=""
              width={35}
              height={35}
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
