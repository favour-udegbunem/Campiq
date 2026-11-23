import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight, FiPlay, FiVideo } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Brand Film Production',
    category: 'Films',
    description: 'Visual storytelling designed to bring a brand’s identity to life.',
    number: '01',
  },
  {
    id: 2,
    title: 'Commercial Production',
    category: 'Commercials',
    description: 'Creative visual content for campaigns and brand communication.',
    number: '02',
  },
  {
    id: 3,
    title: 'Music Video Production',
    category: 'Music Videos',
    description: 'Creative visuals that bring music, artistry and storytelling together.',
    number: '03',
  },
  {
    id: 4,
    title: 'Event Coverage',
    category: 'Events',
    description: 'Capturing important moments through professional media production.',
    number: '04',
  },
  {
    id: 5,
    title: 'Visual Storytelling',
    category: 'Films',
    description: 'Turning ideas and stories into engaging visual experiences.',
    number: '05',
  },
  {
    id: 6,
    title: 'Campaign Content',
    category: 'Commercials',
    description: 'Creative content built to communicate ideas with clarity.',
    number: '06',
  },
]

const categories = [
  'All',
  'Films',
  'Commercials',
  'Music Videos',
  'Events',
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        )

  return (
    <section id="work" className="bg-[#080808] py-24 md:py-32">
      <div className="section-shell">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">
              <span />
              SELECTED WORK
            </p>

            <h2 className="section-heading max-w-3xl">
              IDEAS MADE <span className="text-campiq-yellow">VISIBLE.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              A look at the creative possibilities of visual storytelling,
              media production and powerful brand experiences.
            </p>
          </div>

          <a href="#contact" className="button-outline w-fit">
            START A PROJECT
            <FiArrowUpRight size={16} />
          </a>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="mt-12 flex flex-wrap gap-3 border-b border-white/10 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                activeCategory === category
                  ? 'bg-campiq-yellow text-black'
                  : 'border border-white/15 text-white/55 hover:border-campiq-yellow hover:text-campiq-yellow'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <motion.div
          layout
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.35 }}
                className="group"
              >

                {/* VIDEO THUMBNAIL PLACEHOLDER */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-white/10 bg-[#171717] transition duration-500 group-hover:border-campiq-yellow/40">

                  {/* Placeholder background details */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,217,16,0.07),_transparent_65%)]" />

                  {/* Placeholder content */}
                  <div className="relative z-10 flex flex-col items-center text-center">

                    <div className="mb-4 flex h-16 w-16 items-center justify-center border border-dashed border-white/25 text-white/40 transition duration-300 group-hover:border-campiq-yellow group-hover:text-campiq-yellow">
                      <FiVideo size={27} />
                    </div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Video Thumbnail
                    </p>

                    <p className="mt-2 text-xs text-white/20">
                      Image placeholder
                    </p>

                  </div>

                  {/* Project number */}
                  <div className="absolute left-5 top-5 z-20 text-xs font-bold tracking-widest text-white/60">
                    {project.number}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-campiq-yellow">
                    <FiPlay size={13} />
                    {project.category}
                  </div>

                  {/* Enquiry link */}
                  <a
                    href="#contact"
                    aria-label={`Enquire about ${project.title}`}
                    className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center bg-campiq-yellow text-black opacity-0 transition duration-300 hover:bg-white group-hover:opacity-100"
                  >
                    <FiArrowUpRight size={20} />
                  </a>

                </div>

                {/* PROJECT DETAILS */}
                <div className="pt-5">
                  <h3 className="font-display text-xl font-bold tracking-tight text-white transition group-hover:text-campiq-yellow">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    {project.description}
                  </p>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA */}
        <div className="mt-14 flex flex-col items-center justify-center border-t border-white/10 pt-10 text-center">
          <p className="text-sm text-white/50">
            Have an idea you'd like to bring to life?
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-wider text-campiq-yellow transition hover:gap-5"
          >
            Let's create something
            <FiArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  )
}