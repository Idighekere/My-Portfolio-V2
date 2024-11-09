/* eslint-disable react/no-unescaped-entities */
'use client'
import { useRouter } from 'next/navigation'


const NotFound: React.FC = () => {
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/') // Navigate to home page
  }

  return (
    <main className=''>


      <div className='flex flex-col items-center justify-center h-screen text-center'>
        <h1 className='text-4xl md:text-6xl font-bold text-current'>404</h1>
        <p className='text-lg text-current/50 mt-4'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <button onClick={handleGoHome} className='mt-6 bg-primary-blue px-5 py-2 rounded-full'>
          Go back to Home
        </button>
      </div>


    </main>
  )
}

export default NotFound
