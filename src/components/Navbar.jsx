import { useState } from 'react'
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Studio', href: '#studio' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Notice: No inline-flex here.
  const talkButton =
    'items-center justify-center gap-3 rounded-lg border border-campiq-yellow bg-campiq-yellow px-6 py-3 text-xs font-extrabold text-black transition-all duration-300 hover:bg-black hover:text-white'

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <nav className="section-shell flex h-[76px] items-center justify-between">

        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold tracking-tight">
          CAMPIQ<span className="text-campiq-yellow">.</span>
          <span className="ml-2 text-[9px] font-medium tracking-[0.3em] text-white/50">
            MEDIA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Let's Talk Button */}
        <a
          href="#contact"
          className={`${talkButton} hidden md:inline-flex`}
        >
          Let's Talk <FiArrowUpRight size={16} />
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="text-white md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-7 md:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-xl font-medium"
              >
                {link.name}
              </a>
            ))}

            {/* Let's Talk appears only inside the mobile menu */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`${talkButton} inline-flex w-fit`}
            >
              Let's Talk <FiArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}