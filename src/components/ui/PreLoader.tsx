export const PreLoader = () => {
  let circleCommonClasses = 'w-5 h-5 bg-current rounded-full absolute'

  return (
    <main className='absolute top-0 z-50 w-full h-screen bg-background'>
      <div className='flex items-center justify-center h-screen'>
        <div className='relative w-12 h-12 animate-spin988'>
          <div className={`${circleCommonClasses} top-0 left-0`}></div>
          <div className={`${circleCommonClasses} top-0 right-0 `}></div>
          <div className={`${circleCommonClasses} bottom-0 left-0`}></div>
          <div className={`${circleCommonClasses} bottom-0 right-0 `}></div>
        </div>
      </div>
    </main>
  )
}


export const Spinner = () => {
  return (
    <div className='relative flex justify-center mb-5'>
      {/* <!-- Outer Ring--> */}
      <div
        className='w-12 h-12 rounded-full absolute
                            border-4 border-solid border-primary-blue/50 '
      ></div>

      {/* <!-- Inner Ring --> */}
      <div
        className='w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-primary-blue border-t-transparent '
      ></div>
    </div>
  )
}
