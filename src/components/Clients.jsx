import { motion } from 'framer-motion'

import client1 from '../assets/images/clients/client-01.png'
import client2 from '../assets/images/clients/client-02.png'

const clients = [
  { name: 'Client One', logo: client1 },
  { name: 'Client Two', logo: client2 },
]

export default function Clients() {
  return (
    <section id="clients" className="bg-[#050505] py-24">
      <div className="section-shell">

        <div className="text-center">
          <p className="eyebrow justify-center mb-6">
            <span />
            OUR NETWORK
            <span />
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            THE PEOPLE WE{' '}
            <span className="text-campiq-yellow">WORK WITH.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/45">
            We value the brands, organizations and creative partners
            who have been part of the CAMPIQ journey.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="flex min-h-40 items-center justify-center border border-white/10 bg-[#0B0B0B] p-8 transition duration-300 hover:border-campiq-yellow/50"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-20 max-w-full object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}