'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
type duration = {
  start: string
  end: string
}
type experience = {
  company: string
  desc: string
  duration: duration
  tasks: string[]
  logo?: string
}
type Props = {}
import { education } from '@/data'

import { EducationTimeline } from '@/components/EducationTimeline'
import {SectionTitle, SectionDescription } from '@/components/ui/Title'
const Education = (props: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false // Whether animation should happen only once
    })
  }, [])
  return (
    <main className='p-3 md:p-20'>
      <div className='flex justify-center mb-8 flex-col items-center'>
        <SectionTitle>EDUCATION LEVEL</SectionTitle>
        <SectionDescription>My academic background, showcasing a solid foundation in engineering and technology through my primary, secondary, and tertiary education.






</SectionDescription>
      </div>
      <div className='flex flex-col '>
        {education.map(edu => (
          <EducationTimeline edu={edu} key={edu.id} />
        ))}
      </div>
    </main>
  )
}

export default Education
