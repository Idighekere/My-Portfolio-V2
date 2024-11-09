'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
type duration = {
  start: string
  end: string
}
type experience = {
  id: string
  company: string
  desc: string
  duration: duration
  tasks: string[]
  logo?: string
}
type Props = {}
import { experience } from '@/data/experience'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { volunteerExperience } from '@/data'
import { SectionTitle, SectionDescription } from '@/components/ui/Title'
const Experience = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false // Whether animation should happen only once
    })
  }, [])
  return (
    <main className='p-3 md:p-20 '>
      <section>
        <div className='flex justify-center mb-8 items-center flex-col'>
          <SectionTitle>WORK EXPERIENCE</SectionTitle>
          <SectionDescription>
            An overview of my professional roles, responsibilities, and
            contributions, demonstrating my practical experience and growth
            within the tech industry.
          </SectionDescription>
        </div>
        <div className='flex flex-col w-full /items-center'>
          {experience.map(xp => (
            <ExperienceTimeline xp={xp} key={xp.id} />
          ))}
        </div>
      </section>

      {/*VOLUNTEER EXPERIENCE*/}
      <section className='my-10'>
        <div className='flex justify-center mb-8 flex-col items-center'>
          <SectionTitle>VOLUNTEER EXPERIENCE</SectionTitle>
          <SectionDescription>
            Experiences where I’ve contributed my skills and knowledge to help
            communities and organizations achieve their goals.
          </SectionDescription>
        </div>
        <div className='flex flex-col w-full /items-center'>
          {volunteerExperience.map(xp => (
            <ExperienceTimeline xp={xp} key={xp.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Experience
