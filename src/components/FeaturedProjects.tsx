"use client"

import React, { useState } from 'react'

type Props = {}
import { projectList } from '@/data/projectsList'
import ProjectCard from './ui/common/ProjectCard'
import Link from 'next/link'

const FeaturedProjects = (props: Props) => {
    // const [project, setProject] = useState([])

    const FeaturedProjects = projectList.filter(project => project.isFeatured)
    // console.log(FeaturedProjects)
    return (
        <section className="mt-10 md:m-0 p-5 md:p-20 h-screen//">
            <div className="flex justify-center mb-8">

                <h2 className="text-4xl font-[600] text-center //mb-6 font-incognito text-soft-white border-b-4 inline-block border-primary-blue ">FEATURED PROJECTS</h2>
            </div>



            <div className="flex flex-col  gap-4">
                {FeaturedProjects.map(feat => (<ProjectCard featured={feat} key={feat.id} />))}</div>

            <div className='flex justify-center text-xl text-primary-blue uppercase my-4'>
                <Link href="/projects" className="font-gitlab-mono font-[600]">See All Projects...</Link>
            </div>
        </section>
    )
}

export default FeaturedProjects