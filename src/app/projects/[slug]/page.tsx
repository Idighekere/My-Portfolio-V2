// import { useParams } from 'next/navigation'
import ProjectDetails from '@/components/ProjectDetails'
import { projectType, projectList } from "@/data/projectsList";

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import fs from "fs" //nodejs file system module, used to interact with the file system
import path from 'path' //provides utilities for working with file and dir. paths
type Props = {
    params: any
}
//Function to fetch project data based on the slug

// export async const generateStaticParams = () => {
//     //Construc the file path to my project list JSON file
//     const filePath = path.join(process.cwd(), 'public', 'data', 'projectsList.ts')// process.cwd() method returns the current working directory of the Node.js process.

//     //Read the projectsList.ts file
//     const fileContents = fs.readFileSync(filePath, 'utf-8') //Returns the contents of the path.

//     //Parse the file contents into a js object
//     // const projects = JSON.parse

//     return projectList.map(
//         project => ({
//             slug: project.slug
//         })
//     )
// }

// function to fetch project data based on the slug from the URL
const getProjectData = (slug: string) => {
    //find and return the project that matches the provided slug

    return projectList.find(project => project.slug === slug)
}
const page = (props: Props) => {


    const project = getProjectData(props.params.slug)

    if (!project) {
        return <div>Project not found</div>
    }
    return (
        <div className={`px-5 md:px-20`}>
            {/* {props.params.slug} */}

            <ProjectDetails project={project} />
        </div>
    )
}

export default page