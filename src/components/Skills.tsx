/* eslint-disable react/no-unescaped-entities */
import { Icon, IconifyIcon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import React from 'react'
import { SectionDescription, SectionTitle } from './ui/Title'

type Props = {}
type LanguageType = {
  // map(arg0: (list: any) => React.JSX.Element): React.ReactNode
  name?: string
  icon?: string | IconifyIcon
}

const ListsOfTools: LanguageType[] = [
  {
    name: 'HTML',
    icon: 'simple-icons:html5'
  },
  {
    name: 'CSS',
    icon: 'simple-icons:css3'
  },
  {
    name: 'Javascript',
    icon: 'simple-icons:javascript'
  },
  {
    name: 'Typescript',
    icon: 'simple-icons:typescript'
  },
  {
    name: 'Tailwind',
    icon: 'simple-icons:tailwindcss'
  },
  {
    name: 'React Js',
    icon: 'simple-icons:react'
  },
  {
    name: 'Next Js',
    icon: 'akar-icons:nextjs-fill'
  },
  {
    name: 'Wordpress',
    icon: 'simple-icons:wordpress'
  },
  {
    name: 'Firebase',
    icon: 'simple-icons:firebase'
  },
  {
    name: 'ShadCN UI',
    icon: 'simple-icons:shadcnui'
  },
  {
    name: 'Docker',
    icon: 'simple-icons:docker'
  }
]

const LanguageBox: React.FC = ({ icon, name }: LanguageType) => {
  return (
    <div className='grid grid-cols-3 gap-3 p-5 sm:grids-cols-3 md:grid-cols-4 lg:grid-cols-5 py-9 md:p-10 md:gap-5 '>
      {ListsOfTools.map(tool => (
        <div
          className='flex flex-col items-center transition-transform duration-200 ease-in-out transform cursor-pointer text-primary-blue hover:text-light-blue hover:scale-110 //hover:shadow-md'
          key={tool.icon as string}
          data-aos='zoom-in'
        >
          <Icon
            icon={tool.icon as string | IconifyIcon}
            height='55'
            width='55'
            className='text-7xl md:text-9xl'
          />
          <p className='text-[0.7rem] mt-1'>{tool.name}</p>
        </div>
      ))}
    </div>
  )
}
const Skills = (props: Props) => {
  return (
    <section className='p-5 mt-10 md:p-20'>
      <div className='flex justify-center mb-5 items-center flex-col'>
        <SectionTitle>MY SKILLS</SectionTitle>
        <SectionDescription>
          A showcase of my technical skills and tools that I've mastered to
          build efficient and scalable solutions.
        </SectionDescription>
      </div>

      <div className='flex flex-col items-center w-full md:flex-row md:items-normal md:justify-between'>
        {/* <div className='hidden md:w-1/2'>
                    <h1 className='text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue '>My Skills</h1>

                    <p className="text-light-blue">What I work with</p>

                </div> */}

        <div className='rounded-lg bg-secondary /flex j/ustify-center mx-auto w-full /md:w-[80%] //md:w-1/2'>
          <LanguageBox />
        </div>
      </div>
    </section>
  )
}

export default Skills
