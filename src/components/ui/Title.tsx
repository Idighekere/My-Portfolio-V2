import React from 'react'

export const SectionTitle = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className='/whitespace-nowrap text-[1.6rem] md:text-4xl font-[700] text-center /px-4 /text-text-primary inline-block  bg-section-title-gradient  w-auto /rounded-full bg-clip-text text-transparent /border gradient-border gradient-border:before p-2'>
      {children}
    </h2>
  )
}


export const SectionDescription = ({children}:{children:React.ReactNode}) => {
  return (
    <p className='/whitespace-nowrap  text-center /px-4 /font-incognito text-soft-white/75  inline-block mt-4 '>
      {children}
    </p>
  )
}
