import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    quote: 'Add an approved testimonial from a CAMPIQ client here.',
    name: 'Client Name',
    role: 'Client / Organization',
  },
  {
    id: 2,
    quote: 'Add another genuine client experience or feedback here.',
    name: 'Client Name',
    role: 'Client / Organization',
  },
  {
    id: 3,
    quote: 'Share feedback that reflects the experience of working with CAMPIQ.',
    name: 'Client Name',
    role: 'Client / Organization',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B0B0B] py-24 md:py-32">
      <div className="section-shell">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">
              <span />
              CLIENT EXPERIENCES
            </p>

            <h2 className="section-heading max-w-2xl">
              WORDS THAT
              <span className="text-campiq-yellow"> MATTER.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/45">
            Every collaboration is an opportunity to create something
            meaningful. Here's where our clients can share their experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="flex min-h-[280px] flex-col border border-white/10 bg-[#101010] p-7 md:p-9"
            >
              <FiMessageCircle size={26} className="text-campiq-yellow" />

              <p className="mt-8 flex-1 text-base leading-8 text-white/65">
                "{item.quote}"
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="text-sm font-bold text-white">
                  {item.name}
                </h3>

                <p className="mt-1 text-xs text-white/40">
                  {item.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}