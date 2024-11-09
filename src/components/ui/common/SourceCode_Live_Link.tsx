import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import Link from 'next/link'
import React from 'react'

const SourceCodeLiveLink = ({codeLink,liveLink}:{codeLink:string, liveLink:string}) => {
  return (
    <div className='flex w-full gap-4 mt-4 font-[600]'>
  { codeLink && (
    <Link
      href={ codeLink}
      className={`px-1 py-1 rounded-full   hover:text-primary-blue border hover:border-primary-blue text-soft-white shadow-primary-blue hover:shadow-md  duration-200 hidden/ w-full flex items-center gap-3 md:gap-4 justify-center`}
    >
      {/* <button className=""> */}
      <Icon icon='akar-icons:github-fill' width='22' height='22' />
      <p className='text-[1.125rem] whitespace-nowrap'>Code</p>{' '}
      {/* </button> */}
    </Link>
  )}
  <Link
    href={ liveLink}
    className={`px-1 py-1 bg-primary-blue rounded-full text-soft-white hover:bg-transparent hover:text-primary-blue border-primary-blue border  duration-200 hidden/ w-full flex items-center gap-3 md:gap-4 justify-center`}
  >
    {/* <button className=""> */}
    <Icon icon='quill:link-out' width='22' height='22' />
    <p className='text-[1.125rem] whitespace-nowrap'>Live</p> {/* </button> */}
  </Link>
</div>

  )
}

export default SourceCodeLiveLink
