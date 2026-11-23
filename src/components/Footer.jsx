
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="section-shell py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <a href="#" className="font-display text-3xl font-bold">
              CAMPIQ<span className="text-campiq-yellow">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              A creative space for ideas, stories and meaningful
              visual experiences. Welcome to CAMPIQ MEDIA.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-campiq-yellow">
                Explore
              </h3>

              <div className="flex flex-col gap-4 text-sm text-white/60">
                <a href="#about" className="hover:text-white">About Us</a>
                <a href="#studio" className="hover:text-white">Our Studio</a>
                <a href="#services" className="hover:text-white">Services</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-campiq-yellow">
                Connect
              </h3>

              <div className="flex flex-col gap-4 text-sm text-white/60">
                <a href="#contact" className="flex items-center gap-2 hover:text-white">
                  Get in touch <FiArrowUpRight size={15} />
                </a>

                <a href="#contact" className="flex items-center gap-2 hover:text-white">
                  <FaInstagram size={15} /> Instagram
                </a>

                <a href="#contact" className="flex items-center gap-2 hover:text-white">
                  <FaYoutube size={16} /> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} CAMPIQ MEDIA. All rights reserved.</p>
          <p>Ideas into experiences.</p>
        </div>
      </div>
    </footer>
  )
}