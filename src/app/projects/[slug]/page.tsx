/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ParsedUrlQuery } from 'querystring'
import fs from 'fs' //nodejs file system module, used to interact with the file system
import path from 'path' //provides utilities for working with file and dir. paths
//import { getAllProjectSlugs } from '@/lib/projects'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import { parseMD } from '@/lib/parseMD'
import BreadCrumb from '@/components/ui/common/BreadCrumb'
import ShareIcons from '@/components/ui/common/ShareIcons'

import Image from 'next/image'

import SourceCodeLiveLink from '@/components/ui/common/SourceCode_Live_Link'
import Head from 'next/head'
import NotFound from '@/components/NotFound'
type Props = {
  params: any
}

export const generateStaticParams = async () => {
  //Return a list of possible value for slug

  const projectDirectory = path.join(
    process.cwd(),
    'src',
    'contents',
    'projects'
  )
  const fileNames = fs.readdirSync(projectDirectory) //returns an array of all files/folders inside the directory

  // console.log(fileNames)

  const paths = fileNames.map(filename => ({
    params: { slug: filename.replace('.md', '') }
  }))
  // console.log(paths)
  //console.log(params)

  if (!Array.isArray(paths)) {
    console.error('paths is not an array:', paths)
  }

  return paths
}

const ProjectDetailPage = async ({ params }: { params: { slug: string } }) => {
  //Fetch necessary data for the blog post using params.slug

  const  slug = params?.slug

  if (!slug) {
    return { notFound: true } // Handle cases where no slug is found
  }

  //console.log(slug)
  const fullPath = path.join(
    process.cwd(),
    'src',
    'contents',
    'projects',
    `${slug}.md`
  )

  //getProjectBySlug(slug as any)

  if (!fs.existsSync(fullPath)) {
    return <><NotFound/></> // Handle file not found error
  }
  const { metadata, content } = await parseMD(fullPath)
  // console.log(metadata)
  return (
    <>
<Head>
  <title>{metadata.title}</title>

  <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
</Head>
    <main className='parsedown text-soft-white/85'>
      <BreadCrumb title={metadata?.title} slug={metadata?.slug} />

      <div className='relative h-full sm:h-48 lg:h-72 pt-[56.25%] py-3 mt-3'>
        <Image
          src={metadata?.imageUrl}
          alt={metadata.title}
          fill
          className='border-2 rounded-lg border-card-blue-shade/60'
        />
      </div>

      <h1 className='text-center'>{metadata.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />

      {/* CODE LINK && LIVE LINK */}
      <p className='font-bold mt-6'>Explore this project and it's source code:</p>
      <SourceCodeLiveLink
        liveLink={metadata.liveLink}
        codeLink={metadata.codeLink}
      />

      <div className='mt-10'>
        <p className='text-xl font-bold'>Share:</p>
        <ShareIcons shareLink={metadata.slug} shareTitle={metadata.title} />
      </div>
    </main>
    </>
  )
}

export default ProjectDetailPage
