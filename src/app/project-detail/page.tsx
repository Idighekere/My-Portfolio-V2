import React from 'react'
import ProjectDetails from '@/components/ProjectDetails'
import { projectList } from '@/data/projectsList'

type Props = {}

const page = (props: Props) => {
    const project = projectList
    return (
        <div>



            {
                projectList.map(project => (<ProjectDetails key={project.id} project={project} />))

            }

        </div>
    )
}

export default page