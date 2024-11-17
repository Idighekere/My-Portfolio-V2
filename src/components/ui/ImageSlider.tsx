'use client'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from 'react'

type ImageSliderProps = {
  // images: string[];
  images: { src: string; alt?: string }[]
  autoplay?: boolean
  interval?: number // Time in ms
  showControls?: boolean
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoplay = true,
  interval = 3000,
  showControls = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex == images.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  // Autoplay effect
  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer) // Cleanup
  }, [autoplay, interval,nextSlide])

  return (
    <div className='relative overflow-hidden'>
      {/* Slider Wrapper */}
      <div
        className='flex transition-transform duration-500 ease-in-out rounded-lg'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className='min-w-full flex-shrink-0 max-h-[600px] object-cover w-full  flex justify-center items-center rounded-lg md:block'
          >
            <img
              src={image.src}
              alt={image.alt || `Slide ${index + 1}`}
              className='w-full h-auto object-contain rounded-lg'
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showControls && (
        <>
          <button
            onClick={prevSlide}
            className='absolute left-2 top-1/2 -translate-y-1/2 bg-primary-blue/90 text-white p-1 md:p-2 rounded-full text-2xl font-[600] flex items-center justify-center'
          >
            <Icon icon='jam:chevron-left' width='1.2em' height='1.2em' />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-2 top-1/2 -translate-y-1/2 bg-primary-blue/90 text-white p-1 md:p-2 rounded-full text-2xl font-[600] flex items-center justify-center'
          >
            <Icon icon='jam:chevron-right' width='1.2em' height='1.2em' />
          </button>
        </>
      )}

      {/* Indicators */}
      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-primary-blue' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
