/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, useEffect } from 'react'

type Props = {}
import { projectList } from '@/data/projectsList'
import ProjectCard from './ui/common/ProjectCard'
import Link from 'next/link'
import {SectionDescription, SectionTitle} from './ui/Title'
import {
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
  Project
} from '@/lib/projects'
import { Spinner } from './ui/PreLoader'

const FeaturedProjects = (props: Props) => {
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const loadProjects = async () => {
      const featuredProjects = await getFeaturedProjects()

      setLoading(false)
      setProjects(featuredProjects)
    }

    loadProjects()
  }, [])

  const FeaturedProjects = projectList.filter(project => project.isFeatured)
  // console.log(FeaturedProjects)
  // console.log(projects)
  return (
    <section className='p-5 mt-10 md:m-0 md:p-20 h-screen//'>
      <div className='flex justify-center mb-8 items-center flex-col'>
        <SectionTitle>FEATURED PROJECTS</SectionTitle>
        <SectionDescription>Highlighting my most significant projects, where I've collaborated with fellows to solve real-world challenges.

</SectionDescription>
      </div>
      {loading ? (
        <p className='text-base font-semibold text-center'>
          <Spinner />
        </p>
      ) : (
        <>
          <div className='flex flex-col gap-4'>
            <ProjectCard projects={projects as Project[]} />
          </div>

          <div className="flex justify-center my-4">
            <button className=' text-xl uppercase text-bgd bg-primary-blue w-auto rounded-full py-1 px-4'>
              <Link href='/projects' className='font-gitlab-mono font-[600]'>
                See More Projects...
              </Link>
            </button>
          </div>
        </>
      )}
    </section>
  )
}

export default FeaturedProjects
