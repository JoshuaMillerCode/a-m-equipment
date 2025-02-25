"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/placeholder.svg",
    alt: "Valve Manufacturing Process",
  },
  {
    src: "/placeholder.svg",
    alt: "Quality Control Testing",
  },
  {
    src: "/placeholder.svg",
    alt: "Industrial Valves",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const AUTOPLAY_INTERVAL = 5000 // 5 seconds

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const nextSlideWithReset = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }, [currentIndex])

  useEffect(() => {
    if (isHovered) return

    const interval = setInterval(() => {
      nextSlideWithReset()
    }, AUTOPLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [isHovered, nextSlideWithReset])

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500"
        />

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