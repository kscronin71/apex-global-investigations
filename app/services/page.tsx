'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../components/Footer'

const services = [
  {
    slug: 'corporate-investigations',
    num: '01',
    title: 'Corporate Investigations',
    desc: 'Discreet corporate investigations, fraud inquiries, due diligence, and surveillance support for high-stakes business decisions.',
  },
  {
    slug: 'litigation-support',
    num: '02',
    title: 'Litigation Support',
    desc: 'Strategic investigative and analytical support for litigation, arbitration, and mediation matters.',
  },
  {
    slug: 'certified-fraud-examiner',
    num: '03',
    title: 'Certified Fraud Examiner',
    desc: 'Certified Fraud Examiner-led response for misconduct allegations, asset tracing, and defensible fraud reporting.',
  },
  {
    slug: 'security-solutions',
    num: '04',
    title: 'Security Solutions',
    desc: 'Comprehensive risk management, executive protection, and security planning to protect people, property, and operations.',
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-white top-[-200px] left-[30%]" />
      <div className="ambient-glow bg-white/50 bottom-[20%] right-[-200px]" />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Hero */}
      <section className="pt-40 pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">Services</p>
            <h1 className="text-[clamp(36px,5vw,64px)] font-semibold leading-[1.1] tracking-[-0.02em] max-w-3xl mb-6">
              Core Services
            </h1>
            <p className="text-[18px] text-white/70 max-w-2xl leading-relaxed">
              Investigations, litigation support, Certified Fraud Examiner-led engagements, and
              security solutions delivered by former federal law enforcement professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="service-card block h-full group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="service-number">{service.num}</span>
                    <svg
                      className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <h3 className="text-[22px] font-medium mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-white/70 leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Alerts */}
      <section className="pb-8 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-white/[0.04] border border-white/10 p-8 md:p-10"
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">
              Additional Offering
            </p>
            <h3 className="text-[clamp(24px,3.2vw,36px)] font-semibold tracking-[-0.02em] mb-4">
              Intelligence Alerts
            </h3>
            <p className="text-[17px] text-white/75 leading-relaxed max-w-3xl mb-8">
              Subscription-based incident alerting for organizations that need visibility near critical sites.
              Coverage areas, alert radius, and recipient workflows are configured by our team as part of
              onboarding.
            </p>
            <a href="mailto:info@apexgi.com" className="btn-primary inline-block">
              Request Access
            </a>
          </motion.div>
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
                Confidential Consultation
              </p>
              <h2 className="text-[clamp(28px,4vw,48px)] font-semibold mb-6">
                Ready to Discuss Your Case?
              </h2>
              <p className="text-[17px] text-white/75 max-w-xl mx-auto mb-10">
                All consultations are strictly confidential. Our team of former federal agents
                is prepared to assist with your most sensitive matters.
              </p>
              <div className="flex justify-center">
                <a href="tel:8333432164" className="btn-primary">
                  (833) 343-2164
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
