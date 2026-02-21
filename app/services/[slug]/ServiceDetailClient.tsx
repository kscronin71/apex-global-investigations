'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../../components/Footer'

type ServiceContent = {
  num: string
  title: string
  subtitle: string
  description: string
  features: { title: string; desc: string }[]
  capabilities: string[]
  process: { step: string; title: string; desc: string }[]
}

export default function ServiceDetailClient({ service }: { service: ServiceContent }) {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-white top-[-100px] right-[-100px]" />
      <div className="ambient-glow bg-white/50 bottom-[40%] left-[-200px]" />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Breadcrumb */}
      <section className="pt-28 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-[14px] text-white/70"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </motion.div>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-12 pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[48px] font-semibold text-white/20">{service.num}</span>
              <div className="w-16 h-[1px] bg-white/20" />
            </div>
            <h1 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
              {service.title}
            </h1>
            <p className="text-[20px] text-white/75 max-w-3xl leading-relaxed mb-8">
              {service.subtitle}
            </p>
            <p className="text-[17px] text-white/72 max-w-3xl leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">Key Areas</p>
            <h2 className="text-[clamp(24px,3vw,36px)] font-semibold">
              What We Cover
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/[0.04] border border-white/10 p-8 hover:border-white/20 transition-colors"
              >
                <h3 className="text-[18px] font-medium mb-3">{feature.title}</h3>
                <p className="text-[15px] text-white/72 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">Capabilities</p>
              <h2 className="text-[clamp(24px,3vw,36px)] font-semibold mb-6">
                Our Expertise
              </h2>
              <p className="text-[17px] text-white/72 leading-relaxed">
                Our team brings decades of federal law enforcement experience to every engagement,
                ensuring thorough, professional, and legally defensible work product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((capability, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                    <span className="text-[15px] text-white/80">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/[0.04] border border-white/10 p-12 md:p-20 text-center">
              <p className="text-[13px] uppercase tracking-[0.2em] text-white/60 mb-6">
                Get Started
              </p>
              <h2 className="text-[clamp(24px,3vw,40px)] font-semibold mb-6">
                Ready to Discuss {service.title}?
              </h2>
              <p className="text-[17px] text-white/75 max-w-xl mx-auto mb-10">
                Contact us for a confidential consultation. Our team is ready to assist
                with your most sensitive matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:8333432164" className="btn-primary">
                  (833) 343-2164
                </a>
                <Link href="/services" className="btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
