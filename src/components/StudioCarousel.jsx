import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
} from 'react-icons/fi'
import studioImage1 from '../assets/images/studio/studio-01.jpeg';
import studioImage2 from '../assets/images/studio/studio-02.jpeg';
import studioImage3 from '../assets/images/studio/studio-03.jpeg';
import studioImage4 from '../assets/images/studio/studio-04.jpeg';

const studioImages = [
  {
    src: studioImage1,
    title: 'Inside the Studio',
    description: 'A space built for ideas, creativity and expression.',
  },
  {
    src: studioImage2,
    title: 'The Recording Space',
    description: 'A dedicated environment for creating and capturing content.',
  },
  {
    src: studioImage3,
    title: 'Behind the Scenes',
    description: 'Where preparation meets creative execution.',
  },
  {
    src: studioImage4,
    title: 'The Creative Setup',
    description: 'A closer look at the spaces where content comes to life.',
  },
]

export default function StudioCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const activeImage = studioImages[activeIndex]

  const goToSlide = (index) => {
    if (index === activeIndex) return

    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const nextSlide = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % studioImages.length)
  }

  const previousSlide = () => {
    setDirection(-1)
    setActiveIndex(
      (current) =>
        (current - 1 + studioImages.length) % studioImages.length
    )
  }

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 45 : -45,
      scale: 1.025,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -45 : 45,
      scale: 0.985,
    }),
  }

  return (
    <section id="studio" className="bg-campiq-black py-24 md:py-32">
      <div className="section-shell">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col justify-between gap-7 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">
              <span />
              A LOOK INSIDE OUR SPACE
            </p>

            <h2 className="section-heading mt-6 max-w-2xl">
              INSIDE CAMPIQ
              <br />
              <span className="text-campiq-yellow">STUDIO.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/55 md:pb-2">
            Step into our creative space. Explore the environment where
            creators, brands and ideas come together to make things happen.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative overflow-hidden border border-white/10 bg-[#101010]">

          {/* Main Image */}
          <div className="relative h-[380px] overflow-hidden sm:h-[480px] lg:h-[620px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeImage.src}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Top Label */}
            <div className="absolute left-5 top-5 z-10 flex items-center gap-3 border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-md sm:left-8 sm:top-8">
              <span className="h-2 w-2 rounded-full bg-campiq-yellow" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white sm:text-[10px]">
                CAMPIQ STUDIO
              </span>
            </div>

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-5 sm:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-xl"
                >
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-campiq-yellow">
                    EXPLORE OUR SPACE
                  </p>

                  <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {activeImage.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-white/65 sm:text-base">
                    {activeImage.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Counter */}
            <div className="absolute right-5 top-5 z-10 flex items-center gap-2 bg-black/40 px-4 py-3 backdrop-blur-md sm:right-8 sm:top-8">
              <span className="font-display text-lg font-bold text-campiq-yellow">
                {String(activeIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/40">/</span>
              <span className="text-xs text-white/60">
                {String(studioImages.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex flex-col gap-5 border-t border-white/10 bg-[#0b0b0b] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">

            {/* Thumbnail Navigation */}
            <div className="flex flex-1 gap-2 overflow-x-auto pb-1 sm:gap-3">
              {studioImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`View ${image.title}`}
                  aria-pressed={activeIndex === index}
                  className={`group relative h-14 w-20 shrink-0 overflow-hidden border transition-all duration-300 sm:h-[68px] sm:w-24 ${
                    activeIndex === index
                      ? 'border-campiq-yellow opacity-100'
                      : 'border-white/10 opacity-45 hover:border-white/50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={image.src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {activeIndex === index && (
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-campiq-yellow" />
                  )}
                </button>
              ))}
            </div>

            {/* Previous / Next */}
            <div className="flex items-center justify-between gap-5 sm:justify-end">
              <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 lg:block">
                EXPLORE THE STUDIO
              </span>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 hover:border-campiq-yellow hover:bg-campiq-yellow hover:text-black"
                >
                  <FiArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center bg-campiq-yellow text-black transition-all duration-300 hover:bg-white"
                >
                  <FiArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-7 text-white/45">
            Have a project in mind? Our studio is ready to be part of your
            next creative experience.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 border-b border-campiq-yellow pb-2 text-xs font-bold text-campiq-yellow transition-colors hover:text-white"
          >
            Let's create together
            <FiArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  )
}