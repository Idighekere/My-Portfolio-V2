'use client'
import React, { useState, useEffect } from 'react'
import { projectList } from '@/data/projectsList'
import ProjectCard from '@/components/ui/common/ProjectCard'
import Props from '@/components/ui/common/ProjectCard'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import {SectionTitle, SectionDescription } from '@/components/ui/Title'
import { getAllProjects, getProjectsByCategory, Project } from '@/lib/projects'
import { Spinner } from '@/components/ui/PreLoader'

// type Props = {}
interface Props {
  featured: Project
}
type tabsType = {
  id: string
  title: string
}
const tabsLists: tabsType[] = [
  {
    id: 'all',
    title: 'All'
  },
  {
    id: 'frontend',
    title: 'Frontend'
  },
  {
    id: 'wordpress-design',
    title: 'Wordpress Design'
  },
  {
    id: 'landing-page',
    title: 'Landing Pages'
  }
]
type Prop = {
  currentTab: string
  handleTabChange: any
  tab: any
}
const Tabs = ({ tab, handleTabChange, currentTab }: Prop) => {
  return (
    <button
      onClick={() => handleTabChange(tab.id)}
      className={`${
        currentTab === tab.id ? 'font-[600] text-bgd bg-primary-blue text- px-2 rounded-full hover:bg-transparent border border-transparent hover:border-primary-blue hover:text-primary-blue' : 'font-[400] '
      } cursor-pointer hover:text-light-blue uppercase text-xl whitespace-nowrap block  font-incognito `}
    >
      {tab.title}
    </button>
  )
}
const Page = (props: any) => {
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[] | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const [currentTab, setCurrentTab] = useState<string>('all')

  useEffect(() => {
    setLoading(true)
    const loadProjects = async () => {
      const {filteredProjects,allProjects} = await getProjectsByCategory(currentTab)
      //const allProject = await getAllProjects()

      setLoading(false)
      setProjects(allProjects)
      setFilteredProjects(filteredProjects)
    }

    loadProjects()
  }, [currentTab])

  const handleTabChange = (id: string) => {
    setCurrentTab(id)
  }

  //console.log(projects)
  const Projects = currentTab === 'all' ? projects : filteredProjects

  //console.log(Projects)
  return (
    <main>
      <div className='flex justify-center mb-8 items-center flex-col'>
        <SectionTitle>MY PROJECTS</SectionTitle>
        <SectionDescription>A collection of diverse projects that reflect my growth, learning, and hands-on experience in software development.

</SectionDescription>
      </div>

      <div className='mb-5 '>
        <span className='text-[.5rem] flex flex-col md:hidden'>
          <Icon icon='octicon:arrow-both-24' width='26' height='26' />
          <p>Scroll</p>
        </span>
        <span className='flex justify-start gap-3 overflow-x-auto md:justify-center /w-full'>
          {tabsLists.map(tab => (
            <Tabs
              currentTab={currentTab}
              tab={tab}
              handleTabChange={handleTabChange}
              key={tab.id}
            />
          ))}
        </span>
      </div>
      {loading ? (
        <p className='text-base font-semibold text-center'><Spinner/></p>
      ) : (
        <>
          {Projects?.length===0 ? (
            <p className='text-base font-semibold text-center '>No project found</p>
          ) : (
            <div
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 .grid-flow-dense .grid-row-auto auto-rows-fr gap-4'
              style={{ gridAutoRows: 'auto' }}
            >
              {/* {projects?.map((project:Project,index:number) => (
                <ProjectCard
                  featured={project}
                  key={index}
                />
              ))} */}
              <ProjectCard
                  projects={Projects as Project[]}

                />
            </div>
          )}
        </>
      )}
    </main>
  )
}

export default Page
