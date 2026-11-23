import { motion } from 'framer-motion'
import {
  FiMessageSquare,
  FiZap,
  FiVideo,
  FiCheckCircle,
} from 'react-icons/fi'

const steps = [
  {
    number: '01',
    title: 'DISCOVERY',
    description:
      'We begin by understanding your vision, goals, audience and the story you want to communicate.',
    icon: FiMessageSquare,
  },
  {
    number: '02',
    title: 'CREATIVE PLANNING',
    description:
      'We develop the creative direction, plan the production and establish the details needed to bring the idea to life.',
    icon: FiZap ,
  },
  {
    number: '03',
    title: 'PRODUCTION',
    description:
      'Our team brings the concept to life through the production process, using the right creative and technical approach.',
    icon: FiVideo,
  },
  {
    number: '04',
    title: 'FINAL DELIVERY',
    description:
      'We refine the finished work and prepare the agreed deliverables for presentation and use.',
    icon: FiCheckCircle,
  },
]

export default function ProductionProcess() {
  return (
    <section id="process" className="bg-[#050505] py-24 md:py-32">
      <div className="section-shell">

        <div className="max-w-3xl">
          <p className="eyebrow mb-6">
            <span />
            HOW WE WORK
          </p>

          <h2 className="section-heading">
            FROM FIRST IDEA TO
            <span className="text-campiq-yellow"> FINAL FRAME.</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base">
            Great production starts with a clear process. We turn creative
            ideas into carefully planned and executed experiences.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-campiq-yellow bg-[#050505] text-campiq-yellow">
                  <Icon size={24} />
                </div>

                <p className="mt-7 text-xs font-bold tracking-[0.25em] text-campiq-yellow">
                  STEP {step.number}
                </p>

                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-white/45">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}