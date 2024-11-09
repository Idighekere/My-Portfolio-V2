/* eslint-disable react/no-unescaped-entities */
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {SectionTitle, SectionDescription } from './ui/Title'

type Props = {}

type ConnectType = {
  name: string
  link: string
  icon: string
}

const connectLinks: ConnectType[] = [
  {
    name: 'Facebook',
    link: 'https://faceboook.com/idighs',
    icon: 'basil:facebook-outline'
  },
  {
    name: 'Twitter',
    link: 'https://x.com/idighekere',
    icon: 'hugeicons:new-twitter'
  },
  {
    name: 'Whatsapp',
    link: 'https://wa.me/+2347041300445',
    icon: 'basil:whatsapp-outline'
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/idighekere-udo',
    icon: 'basil:linkedin-outline'
  }
]

const About = (props: Props) => {
  return (
    <main className='p-5 bg-secondary/80 md:p-20'>
      <div className='flex justify-center flex-col items-center'>
        <SectionTitle>ABOUT ME</SectionTitle>
        <SectionDescription>A brief insight into who I am, my journey as a developer, and the driving passions that shape my work in technology.</SectionDescription>
      </div>

      <div className='flex-col gap-3 mt-5 /flex //items-center md:flex-row'>
        <div className='flex flex-col items-center justify-between gap-4 md:gap-7 lg:gap-20 md:items-normal md:flex-row-reverse'>
          {/* <div clasName="flex w-full"> */}
          <div
            className='relative w-full max-w-full rounded-lg md:w-1/2 /h-72'
            data-aos='zoom-in'
          >
            <Image
              src={'/Idighekere Udo.jpeg'}
              width={630}
              height={630}
              alt='Idighekere Udo'
              className='rounded-md /max-w-[250px] /md:max-w-[350px] filter grayscale hover:grayscale-0   mx-auto border-primary-blue border-2 w-full'
              objectFit='cover'
              layout='responsive'
            />
          </div>
          {/* </div> */}
          <div className='w-full md:w-1/2' data-aos='fade-up'>
            <div className='flex flex-col justify-center gap-3 text-soft-white'>
              <p className=''>
                I am a self-driven and dedicated frontend web developer,
                currently pursuing a Bachelor's degree in Computer Engineering.{' '}
              </p>
              <p>
                With a focus on creating responsive, accessible, and engaging
                web applications, I specialize in modern web technologies,
                including HTML, CSS, Tailwind CSS, React, and Next.js.
              </p>
              <p>
                My expertise in frontend development is complemented by
                experience in managing and troubleshooting WordPress sites,
                enabling me to provide end-to-end support for web projects.
              </p>
              <p className=''>
                Beyond technical skills, I bring a strong work ethic, a
                problem-solving approach, and a passion for creating valuable
                digital solutions. I thrive in collaborative environments and
                I&apos;m always eager to learn and improve myself
              </p>
              <p className=''></p>
            </div>
            <div className='w-full m-auto mt-5 /flex '>
              {/* <a
                href={'/pdf/resume.pdf'}
                download="Idighekere Udo's Resume"
                className=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  className={`px-4 py-1 border border-primary-blue 50 text-soft-white bg-primary-blue  rounded-md flex items-center font-[400] gap-1`}
                >
                  <p>Download Resume</p>{' '}
                  <Icon icon='hugeicons:download-05' width='26' height='26' />
                </button>
              </a> */}
               <a
                href={'https://docs.google.com/document/d/1QXmSc6RqADJc7-krkZ904zdzOS0sQEk6eny8WhTmBP8/edit?usp=sharing'}
                download="Idighekere Udo's Resume"
                className=''
                target='_blank'
                rel='noopener noreferrer'
              >
                <button
                  className={`px-4 py-[6px] border border-primary-blue 50 text-soft-white bg-primary-blue  rounded-full flex items-center font-[400] gap-1 w-full justify-center`}
                >
                  <p>View Resume</p>{' '}
                  <Icon icon='hugeicons:download-05' width='26' height='26' />
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default About
