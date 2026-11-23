
import { motion } from 'framer-motion'

import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUpRight,
  FiCamera,
  FiVideo,
  FiZap,
} from 'react-icons/fi'

import { MdMovie, MdLightbulb } from 'react-icons/md'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StudioCarousel from '../components/StudioCarousel'

// NEW COMPONENTS
import Portfolio from '../components/Portfolio'
import ProductionProcess from '../components/ProductionProcess'
import WhyCampiq from '../components/WhyCampiq'
import Clients from '../components/Clients'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'

const HERO_POSTER =
  'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=2000&q=85'

const services = [
  {
    number: '01',
    title: 'Content Creation',
    description:
      'We help creators and brands turn ideas into engaging content that connects with their audience.',
    icon: FiCamera,
  },
  {
    number: '02',
    title: 'Video Production',
    description:
      'From concept to final cut, we create quality video content that communicates your message.',
    icon: FiVideo,
  },
  {
    number: '03',
    title: 'Creative Direction',
    description:
      'We bring clarity and creativity to your ideas through thoughtful planning and visual storytelling.',
    icon: MdLightbulb,
  },
  {
    number: '04',
    title: 'Studio Experience',
    description:
      'A dedicated creative environment where individuals, creators and businesses can produce content.',
    icon: MdMovie,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-campiq-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center pt-28">
        <div className="absolute inset-0 overflow-hidden bg-black">
          {/* Background video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
          >
            <source
              src="/videos/campiq-hero.mp4"
              type="video/mp4"
            />
          </video>

          {/* Readability overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25" />
        </div>

        <div className="section-shell relative z-10 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-5xl"
          >
            <div className="eyebrow mb-8">
              <span />
              CREATIVE MEDIA. REAL EXPERIENCES.
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[108px]">
              WE TURN
              <br />
              IDEAS INTO
              <br />
              <span className="text-campiq-yellow">
                EXPERIENCES.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              CAMPIQ MEDIA is a creative media company built to help people
              and brands bring their stories to life through content,
              creativity and visual storytelling.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#studio" className="button-primary">
                Explore Our Studio <FiArrowUpRight size={17} />
              </a>

              <a href="#about" className="button-outline">
                Discover CAMPIQ <FiArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          <div className="mt-24 flex items-center justify-between border-t border-white/20 pt-6 text-[10px] font-bold tracking-[0.2em] text-white/50">
            <span>CREATIVITY WITHOUT LIMITS</span>

            <a
              href="#about"
              className="flex items-center gap-3 hover:text-campiq-yellow"
            >
              SCROLL TO EXPLORE <FiArrowDown size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-shell py-28 md:py-36">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="eyebrow mb-7">
              <span />
              WHO WE ARE
            </div>

            <h2 className="section-heading">
              MORE THAN
              <br />
              JUST <span className="text-campiq-yellow">MEDIA.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="md:pt-12"
          >
            <p className="text-lg leading-9 text-white/75">
              We believe every great idea deserves the right space,
              creativity and execution to become something meaningful.
            </p>

            <p className="mt-6 text-sm leading-8 text-white/45">
              CAMPIQ MEDIA is focused on creating opportunities for
              individuals, creators and businesses to express themselves,
              tell compelling stories and connect with the world through
              powerful visual experiences.
            </p>

            <a
              href="#services"
              className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-campiq-yellow"
            >
              What We Do <FiArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CAMPIQ STUDIO CAROUSEL */}
      <StudioCarousel />

      {/* SERVICES */}
      <section id="services" className="section-shell py-28 md:py-36">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="eyebrow mb-7">
              <span />
              WHAT WE OFFER
            </div>

            <h2 className="section-heading">
              WHAT WE <span className="text-campiq-yellow">DO.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45">
            We combine creativity, technology and storytelling to help
            turn concepts into meaningful media experiences.
          </p>
        </div>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-[#151515] md:p-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-white/30">
                    {service.number}
                  </span>

                  <Icon
                    size={27}
                    className="text-campiq-yellow transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-12 font-display text-2xl font-bold tracking-tight md:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                  {service.description}
                </p>

                <div className="mt-9 h-[2px] w-10 bg-campiq-yellow transition-all duration-300 group-hover:w-20" />
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* NEW: OUR WORK / PORTFOLIO */}
      <Portfolio />

      {/* NEW: PRODUCTION PROCESS */}
      <ProductionProcess />

      {/* NEW: WHY CHOOSE CAMPIQ */}
      <WhyCampiq />

      {/* NEW: CLIENTS AND PARTNERS */}
      <Clients />

      {/* NEW: TESTIMONIALS */}
      <Testimonials />

      {/* NEW: FREQUENTLY ASKED QUESTIONS */}
      <FAQ />

      {/* STATEMENT */}
      <section className="bg-campiq-yellow py-24 text-black md:py-32">
        <div className="section-shell">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <FiZap size={35} className="mb-8" />

            <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              GREAT STORIES
              <br />
              DESERVE TO BE
              <br />
              SEEN AND HEARD.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-black/65">
              Let's create something worth experiencing. Your next
              great idea could start right here.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 border border-black bg-black px-7 py-4 text-xs font-extrabold text-white transition hover:bg-transparent hover:text-black"
            >
              START A CONVERSATION <FiArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-shell py-28 md:py-36">
        <div className="grid gap-14 md:grid-cols-2 md:items-end">
          <div>
            <div className="eyebrow mb-7">
              <span />
              LET'S CONNECT
            </div>

            <h2 className="section-heading">
              HAVE AN
              <br />
              IDEA? <span className="text-campiq-yellow">LET'S</span>
              <br />
              MAKE IT REAL.
            </h2>
          </div>

          <div className="md:pb-3">
            <p className="max-w-md text-sm leading-8 text-white/50">
              Whether you want to create content, use our studio or
              explore a creative collaboration, we'd love to hear from you.
            </p>

            <a
              href="mailto:hello@campiqmedia.com"
              className="mt-8 inline-flex items-center gap-3 border-b border-campiq-yellow pb-3 text-lg font-semibold transition hover:text-campiq-yellow"
            >
              Get in touch <FiArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  )
}