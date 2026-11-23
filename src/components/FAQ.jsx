import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const questions = [
  {
    question: 'What does CAMPIQ MEDIA do?',
    answer:
      'CAMPIQ MEDIA is a creative media company focused on media production, visual storytelling and creating engaging experiences through its creative services.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'Our services cover creative media and production. Contact our team with your project idea so we can discuss the specific services and production requirements involved.',
  },
  {
    question: 'How can I start a project with CAMPIQ?',
    answer:
      'You can reach out through our contact section. Share your idea, the kind of production you have in mind and any important project details. Our team can then discuss the next steps with you.',
  },
  {
    question: 'Can I use CAMPIQ STUDIO for my project?',
    answer:
      'You can contact us to discuss your studio requirements, the kind of production you want to carry out and studio availability.',
  },
  {
    question: 'How long does a production project take?',
    answer:
      'Project timelines depend on the type of production, creative requirements and project scope. The timeline can be discussed during the initial project consultation.',
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Send us your project details through the contact section. We can discuss the requirements and provide information about the next steps and applicable costs.',
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="bg-[#050505] py-24 md:py-32">
      <div className="section-shell">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <p className="eyebrow mb-6">
              <span />
              GOT QUESTIONS?
            </p>

            <h2 className="section-heading">
              LET'S CLEAR
              <span className="text-campiq-yellow"> THINGS UP.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-white/50">
              Find answers to some common questions about CAMPIQ MEDIA,
              our creative services and how to get started.
            </p>

            <a href="#contact" className="button-primary mt-9">
              ASK US DIRECTLY
              <span>↗</span>
            </a>
          </div>

          <div className="border-t border-white/15">
            {questions.map((item, index) => {
              const isOpen = activeIndex === index

              return (
                <div
                  key={item.question}
                  className="border-b border-white/15"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left"
                  >
                    <span className={`text-sm font-bold transition md:text-base ${
                      isOpen ? 'text-campiq-yellow' : 'text-white'
                    }`}>
                      {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/15 text-campiq-yellow">
                      {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-white/50">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}