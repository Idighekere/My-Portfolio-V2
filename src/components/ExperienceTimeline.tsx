import { ExperienceType } from '@/types'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import React from 'react'
import { Circle } from './ui/TimelineChunks'




type Props={
    xp: ExperienceType
}
export const ExperienceTimeline = ({xp}:Props) => {
    // console.log(xp)
  return (
    <>
      <div className='relative flex gap-3 /flex-col /items-center /justify-center group' data-aos="fade-up">
        <div className='before:bg-primary-blue/40 before:w-[2px] before:h-full /before:p-4 before:absolute before:left-[14px] before:transform before:-translate-x-1/2 before:inline-block before:top-1 '>

            <div className='flex flex-col '>

                <div className='relative flex items-start mb-5 gap-x-4 lg:gap-x-6 jusr'>
                  <div className='p-1 border-4 rounded-full border-secondary h-7 w-7 bg-primary-blue'>
                    <div className='flex-col items-center flxex /relative h-84'>

                    </div>
                  </div>
                  <div
                    className='flex flex-col items-start w-full /relative'

                    data-aos='fade-down'
                  >
                    <h3 className='text-2xl font-[600] text-center /font-incognito text-soft-white m-0 p-0 group-hover:text-primary-blue'>
                      {xp?.company}
                    </h3>
                    <p className='text-[1.125rem] font-[600] text-center text-soft-white p-0 m-0'>
                      {xp?.role}
                    </p>
                    <time className='pb-2 text-sm tracking-widest uppercase text-dark-grey'>
                      <span className="text-dark-grey/70 tracking-[.26em]">{xp?.duration?.start}</span> -{' '}
                      <span
                        className={`${
                          xp?.duration?.end == 'Present'
                            ? 'text-primary-blue'
                            : ''
                        } tracking-[.26em]`}
                      >
                        {xp?.duration?.end}
                      </span>
                    </time>
                    <ul className='list-none list-outside marker:text-primary-blue /ml-1'>
                      {xp?.tasks?.map(task => (
                        <li
                          key={task}
                          className='flex items-start gap-2 ml-0 /relative /before:w-2 /before:h-2 before:/bg-primary-blue /before:p-1 before:rounded-full before:mr-1 before:justify-center before:flex-row //before:inline /before:absolute before:left-0 /before:top-1/2 /before:transform-translate'
                        >
                          <Icon
                            icon='ei:check'
                            width='20'
                            height='20'
                            style={{ color: '#149ddd' }}
                          />{' '}
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

            </div>

        </div>
      </div>
    </>
  )
}
