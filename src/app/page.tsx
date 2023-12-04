'use client'
import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header'
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import WorkExperience from '@/components/WorkExperience';
import Link from 'next/link';
import Image from 'next/image'
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchExperiences } from '@/utils/fetchExperience';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocial } from '@/utils/fetchSocials';
import { GetStaticProps } from 'next';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ projects, skills, pageInfo, experiences, socials}: Props) {
  return (
    <div className='snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0'>
      <Header socials={socials}/>
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
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

export const getStaticProp: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 30 seconds
    revalidate: 30,
  };
};  