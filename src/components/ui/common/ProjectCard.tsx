'use client'

import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Project } from '@/lib/projects'

export interface Props {
  project: {
    slug: string
    title: string
    description: string
    imageUrl: string
    isFeatured: boolean
    category: string
    stacks: string[]
    codeLink: string
    liveLink: string
    date: string
    content: string
  }
}

const ProjectCard = ({ projects }: {projects:Project[]}) => {
  const pathname = usePathname()
  const projectPathname = '/projects'
  // console.log(pathname)
  // console.log(projects)
  return (
    <>
      {projects?.map((project: Project) => (
        <div key={project.id}>
          <div
            className='//bg-custom-gradient p-[2px] rounded-lg shadow-light h-full'
            data-aos='zoom-in-up'
          >
            <div
              className={` hover:scale-[1.01] transform transition-transform ease-in-out  flex lg:cgap-8 flex-col  border border-primary-blue/40 rounded-lg hover:shadow-md hover:shadow-blue-shade/30 duration-300 text-soft-white ${
                pathname === projectPathname ? 'lg:flex-col' : 'lg:flex-row'
              }`}
            >
              <div
                className={`${
                  pathname === projectPathname
                    ? ' rounded-tl-lg rounded-tr-lg '
                    : 'md:pt-10 md:px-7 lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-tr-none'
                }  flex flex-col justify-end items-center /border-2 border-secondary`}
              >
                <div
                  className={` gap-1 py-3 hidden flex-wrap ${
                    pathname === projectPathname ? 'hidden' : 'md:flex'
                  }`}
                >
                  <p className='text-[.9rem] font-[600]'>Stacks</p>
                  {project?.stacks?.map((icon: string) => (
                    <span
                      key={icon}
                      className='px-2 text-sm duration-150 rounded-full hoover:bg-transparent //border border-light-blue bg-primary-blue/20 text-primary-blue'
                    >
                      {/* <Icon icon={icon} width="22px" height="22px" /> */}
                      {icon}
                    </span>
                  ))}
                </div>
                <div
                  className={`"z-10 relative w-full h-full sm:h-48 //md:h-64 /lg:h-72 pt-[56.25%] " ${
                    pathname === projectPathname ? '' : 'lg:w-96 '
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    fill
                    alt={project.title}
                    className={` rounded-tl-lg rounded-tr-lg w-full lg:object-clover  ${
                      pathname === projectPathname
                        ? 'w-full'
                        : 'lg:max-w-[600px] lg:w-[600px]'
                    }`}
                    // layout="responsive"
                  />
                </div>
              </div>
              <div
                className={`group //shadow-md shadow-[#d1d1d1]/40 p-5 bg-secondary/50
  hover:bg-secondary/40  rounded-bl-lg rounded-br-lg rounded-tr-none rounded-tl-none" ${
    pathname === projectPathname
      ? ''
      : 'md:p-10 lg:rounded-tr-lg lg:rounded-br-lg lg:rounded-tl-none lg:rounded-bl-none border-l border-primary-blue/40 w-full'
  }`}
              >
                <h2 className='group-hover:text-primary-blue text-xl md:text-2xl font-[600]'>
                  {project.title}
                </h2>
                <p>{project.description}</p>

                <div
                  className={`flex gap-1 flex-wrap  py-3  ${
                    pathname === projectPathname ? '' : 'md:hidden'
                  }`}
                >
                  {/* <p className="text-[.9rem] font-[600]">Stacks</p> */}
                  {project?.stacks.map((stack: string) => (
                    <span
                      key={stack}
                      className='px-2 text-sm duration-150 rounded-full hoover:bg-transparent //border border-light-blue //bg-background text-primary-blue bg-primary-blue/20'
                    >
                      {/* <Icon icon={stack} width="22px" height="22px" /> */}
                      {stack}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex justify-between w-full items-center mt-4  bottom-1 ${
                    pathname == projectPathname ? '' : 'md:mt-5 lg:mt-24'
                  }`}
                >
                  <div className={`flex justify-between`}>
                    <Link
                      href={`/projects/${project?.slug}`}
                      className={`flex items-center text-soft-white  hover:text-primary-blue duration-200 border-b border-soft-white hover:border-primary-blue /py-1`}
                    >
                      Details{' '}
                      <Icon
                        icon='basil:arrow-right-solid'
                        width='26'
                        height='26'
                      />
                    </Link>
                  </div>
                  <div
                    className={`flex justify-between gap-2 md:gap-3 items-center /mt-5 md:items-end //flex-col flex-row /w-full ${
                      pathname === projectPathname ? '' : 'md:justify-end'
                    }`}
                  >
                    {project.codeLink && (
                      <Link
                        href={project.codeLink}
                        className={`px-1 py-2 rounded-md text-soft-white  hover:text-primary-blue duration-200 ${
                          pathname === projectPathname ? '' : 'md:hidden'
                        }`}
                      >
                        {' '}
                        <Icon
                          icon='akar-icons:github-fill'
                          width='27'
                          height='27'
                        />
                      </Link>
                    )}

                    <Link
                      href={project.liveLink}
                      className={`px-1 py-2   duration-200 text-soft-white  hover:text-primary-blue ${
                        pathname === projectPathname ? '' : 'md:hidden'
                      }`}
                    >
                      <Icon icon='quill:link-out' width='27' height='27' />
                      {/* <p className="text-sm whitespace-nowrap">Live</p>{" "} */}
                    </Link>
                    {project.codeLink && (
                      <Link
                        href={project.codeLink}
                        className={`px-1 py-2 rounded-md   hover:text-primary-blue border hover:border-primary-blue text-soft-white shadow-primary-blue hover:shadow-md  duration-200 hidden  ${
                          pathname === projectPathname ? '' : 'md:inline-block'
                        }`}
                      >
                        <button className='w-[7rem] flex items-center gap-3 md:gap-4 justify-center '>
                          <Icon
                            icon='akar-icons:github-fill'
                            width='24'
                            height='24'
                          />
                          <p className='text-[1.125rem] whitespace-nowrap'>
                            Code
                          </p>{' '}
                        </button>
                      </Link>
                    )}
                    <Link
                      href={project.liveLink}
                      className={`px-1 py-2 bg-primary-blue rounded-md text-soft-white hover:bg-transparent hover:text-primary-blue border-primary-blue border  duration-200 hidden ${
                        pathname === projectPathname ? '' : 'md:inline-block'
                      }`}
                    >
                      <button className='w-[7rem] flex items-center gap-3 md:gap-4 justify-center'>
                        <Icon icon='quill:link-out' width='24' height='24' />
                        <p className='text-[1.125rem] whitespace-nowrap'>
                          Live
                        </p>{' '}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectCard
