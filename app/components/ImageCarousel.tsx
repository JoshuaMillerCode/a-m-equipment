"use client"

import { useState, useEffect, useCallback } from "react"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Picture {
  src: string;
  alt: string;
}
interface Pictures {
  about: Picture[];
  landing: Picture[];
}

const pictures: Pictures = {
  landing: [
    {
      src: "/landing/DJI_0104.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/landing/DJI_0115.JPG",
      alt: "Quality Control Testing",
    },
    {
      src: "/landing/DJI_0118.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_1383.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_2444.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_2447.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_2998.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_3353.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_4506.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_4924.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_5391.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_5848.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_7091.JPG",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_7097.jpeg",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_7177.jpeg",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_7398.jpeg",
      alt: "Industrial Valves",
    },
    {
      src: "/landing/IMG_7827.jpeg",
      alt: "Industrial Valves",
    },
  ],
  about: [
    {
      src: "/about/IMG_0618.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_1102.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_1320.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_2366.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_2999.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_3149.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_3927.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_4404.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_5811.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_6588.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_6810.jpeg",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_7226.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_7250.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_9025.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_9783.JPG",
      alt: "Valve Manufacturing Process",
    },
    {
      src: "/about/IMG_9788.JPG",
      alt: "Valve Manufacturing Process",
    },
  ]
}

export default function ImageCarousel({ page }: { page: keyof Pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const AUTOPLAY_INTERVAL = 5000 // 5 seconds
  const [imageDimensions, setImageDimensions] = useState<{ width: number, height: number }[]>([])

  const images = pictures[page]

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
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center items-center">
              <NextImage
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className={`${imageDimensions[index] && isLandscape(imageDimensions[index].width, imageDimensions[index].height) ? 'w-full h-full object-cover' : ''}`}
                // style={{ objectFit: 'cover' }}
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

