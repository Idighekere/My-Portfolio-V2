import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import React from 'react'
import { Circle } from './ui/TimelineChunks'
import { EducationType } from '@/data'

type Props = {
  edu: EducationType
}
export const EducationTimeline = ({ edu }: Props) => {
  return (
    <>
      <div
        className='relative flex w-full gap-3 /flex-col /justify-center /items-start'
        data-aos='fade-up'
      >
        <div className='before:bg-primary-blue/40 before:w-[2px] before:h-full /before:p-4 before:absolute before:left-[14px] before:transform before:-translate-x-1/2 before:inline-block before:top-1'>
          <div className='flex flex-col'>
            <div className='relative flex items-start mb-4 gap-x-4 lg:gap-x-6'>
              <div className='p-1 border-4 rounded-full border-secondary h-7 w-7 bg-primary-blue'>
                <div className='flex-col items-center flxex /relative h-84'></div>
              </div>
              <div
                className='flex flex-col items-start w-full'
                data-aos='fade-down'
              >
                <h3 className='text-2xl font-[600]   /font-incognito /text-soft-white m-0 p-0 '>
                  {edu.degree}
                </h3>
                <p className='text-[1.125rem] font-[600]  text-soft-white p-0 m-0'>
                  {edu.school}
                </p>
                <time className='pb-2 text-sm uppercase tracking - widest text-dark-grey/70'>
                  <span className='tracking-[.26em] text-dark-grey/60'>
                    {edu.duration.start}
                  </span>{' '}
                  -{' '}
                  <span
                    className={`${
                      edu.duration.end == 'Present' ? 'text-primary-blue' : ''
                    } tracking-[.26em]`}
                  >
                    {edu.duration.end}
                  </span>
                </time>
                <p>{edu.desc}</p>
                {/* <ul className='ml-1 list-none list-outside marker:text-primary-blue'>{xp.tasks.map(task => (<li key={task} className='relative ml-0 before:w-2 before:h-2 before:bg-primary-blue before:p-1 before:rounded-full before:flex before:mr-1 before:items-center before:justify-center before:flex-row //before:inline /before:absolute before:left-0 /before:top-1/2 before:transform-translate'>{task}</li>))}</ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
