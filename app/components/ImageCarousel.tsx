"use client"

import { useState, useEffect, useCallback } from "react"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import pictures, { Pictures } from "../utils/carouselPictures"


export default function ImageCarousel({ page }: { page: keyof Pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
  const AUTOPLAY_INTERVAL = 5000 // 5 seconds
  const [imageDimensions, setImageDimensions] = useState<{ width: number, height: number }[]>([])

  const images = pictures[page]

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setDirection(-1)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const previousSlide = () => {
    if (currentIndex === 0) {
      setDirection(1)
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextSlideWithReset = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        setDirection(-1)
        return prevIndex - 1
      } else if (prevIndex === 0) {
        setDirection(1)
        return prevIndex + 1
      } else {
        return prevIndex + direction
      }
    })
  }, [direction, images.length])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlideWithReset()
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isHovered, nextSlideWithReset])

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(images.map(image => {
        return new Promise<{ width: number, height: number }>((resolve) => {
          const img = new Image()
          img.src = image.src
          img.onload = () => {
            resolve({ width: img.naturalWidth, height: img.naturalHeight })
          }
        })
      }))
      setImageDimensions(dimensions)
    }

    loadImageDimensions()
  }, [images])

  const isLandscape = (width: number, height: number) => {
    return width > height
  }

  return (
    <div className={`relative ${page === "about" ? "w-3/4" : "w-full"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative aspect-[2/3] md:aspect-[4/3] w-full overflow-hidden rounded-lg">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100.003}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
              <NextImage
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className={`${imageDimensions[index] && isLandscape(imageDimensions[index].width, imageDimensions[index].height) ? 'w-full h-full object-cover' : ''}`}
                // className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

