import React from 'react'

export const SectionTitle = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className='/whitespace-nowrap text-[1.5rem] md:text-4xl font-[700] text-center /px-4 /font-incognito text-primary-blue border-b-4 inline-block border-primary-blue /border /rounded-full '>
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
