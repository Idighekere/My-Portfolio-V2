import { metadata } from './../app/projects/layout';
'use server'
import path from 'path'
import { parseMD } from './parseMD'
import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export type Project = {
  id: number
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

const projectDirectory = path.join(process.cwd(), 'src', 'contents', 'projects')
export const getProjectBySlug = async ({ slug }: { slug: string }) => {
  //: Promise<Project>
  //   const projectDirectory = path.join(
  //     process.cwd(),
  //     'src',
  //     'contents',
  //     'projects'
  //   )

  const fullPath = path.join(projectDirectory, `${slug}.md`)
  if(fullPath){

    const fileContents = fs?.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark().use(remarkHtml).process(content)
    const contentHtml = processedContent.toString()

    return {
      slug,
      content: contentHtml,
      ...(data as Omit<Project, 'slug' | 'content'>)
    }
  }
  //getAllProjectSlugs()

}
export const getAllProjects = async (): Promise<Project[]> => {
  const fileNames = fs.readdirSync(projectDirectory)

  // Parse each markdown file and get metadata
  const allProjects = await Promise.all(
    fileNames.map(async filename => {
      const { metadata, content } = await parseMD(
        path.join('src', 'contents', 'projects', filename)
      )
      const slug = filename.replace(/\.md$/, '')

      //Promise.all() -  to handle multiple asynchronous operations concurrently, rather than sequentially,
      getProjectBySlug(slug as any)

      const projectData: Project = {
        id: metadata.id,
        slug,
        title: metadata.title,
        description: metadata.description,
        imageUrl: metadata.imageUrl,
        isFeatured: metadata.isFeatured,
        category: metadata.category,
        stacks: metadata.stacks,
        codeLink: metadata.codeLink,
        liveLink: metadata.liveLink,
        date: metadata.date,
        content,
      }
// console.log(metadata)
      return projectData

      // Combine metadata and content
    })
  )


  return allProjects.sort((a, b) => a.id - b.id)

}

export async function getFeaturedProjects (): Promise<Project[]> {
  const allProjects = await getAllProjects()
  const featuredProjects = allProjects?.filter(project => project?.isFeatured)

  return featuredProjects
}

export async function getProjectsByCategory (
  category: string
) {

  //Promise<Project[]>

  const allProjects = await getAllProjects()
  const filteredProjects=allProjects?.filter(project => project?.category === category)

  // console.log(filteredProjects)
  return {filteredProjects,allProjects}

}
