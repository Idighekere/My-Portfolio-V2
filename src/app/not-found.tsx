import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
<div className="flex h-screen justify-center items-center p-5 md:p-20">

            <div className="flex flex-col items-center">

                <h3 className="text-5xl font-bold text-center">404</h3>
                <p className="text-xl text-center">Ooops!, The page you requested is not found</p>
                <a href="/" className="mt-5 text-center text-xl border border-primary-blue px-3 py-1 rounded-md">Go Home</a>
            </div>
        </div>  )
}

export default NotFound