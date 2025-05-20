import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight } from "lucide-react"

type ImageCarouselProps = {
  images: string[]
  autoPlay?: boolean
  delay?: number
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlay = false,
  delay = 1000,
}) => {
  const autoplay = Autoplay({ delay, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoPlay ? [autoplay] : []
  )

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((url, index) => (
            <div className="min-w-full relative" key={index}>
              <img
                src={url}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full"
        aria-label="Previous Slide"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full"
        aria-label="Next Slide"
      >
        <ArrowRight />
      </button>
    </div>
  )
}
