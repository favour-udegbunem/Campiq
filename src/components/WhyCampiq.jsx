import { motion } from 'framer-motion'
import {
  FiTarget,
  FiEye,
  FiUsers,
  FiLayers,
} from 'react-icons/fi'

const reasons = [
  {
    number: '01',
    title: 'CREATIVE THINKING',
    description:
      'We approach every project with curiosity, fresh ideas and a focus on meaningful storytelling.',
    icon: FiEye,
  },
  {
    number: '02',
    title: 'PURPOSE-DRIVEN WORK',
    description:
      'We consider the purpose behind every project so that the creative direction supports the intended message.',
    icon: FiTarget,
  },
  {
    number: '03',
    title: 'COLLABORATIVE APPROACH',
    description:
      'We value communication and collaboration, bringing ideas together throughout the creative process.',
    icon: FiUsers,
  },
  {
    number: '04',
    title: 'PRODUCTION CAPABILITIES',
    description:
      'From planning to production and delivery, we bring the creative and practical parts of a project together.',
    icon: FiLayers,
  },
]

export default function WhyCampiq() {
  return (
    <section className="bg-[#0C0C0C] py-24 md:py-32">
      <div className="section-shell">

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          <div>
            <p className="eyebrow mb-6">
              <span />
              THE CAMPIQ DIFFERENCE
            </p>

            <h2 className="section-heading">
              NOT JUST
              <br />
              CONTENT.
              <br />
              <span className="text-campiq-yellow">EXPERIENCES.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-8 text-white/50 md:text-base">
              We believe that good media does more than capture attention.
              It communicates ideas, creates connections and gives stories
              a visual identity.
            </p>

            <a href="#contact" className="button-primary mt-9">
              WORK WITH US
              <span>↗</span>
            </a>
          </div>

          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon

              return (
                <motion.div
                  key={reason.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0C0C0C] p-7 transition duration-300 hover:bg-[#151515] md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={27} className="text-campiq-yellow" />

                    <span className="text-xs font-bold tracking-widest text-white/25">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="mt-9 font-display text-xl font-bold text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/45">
                    {reason.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}