'use client'

import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function Franchise() {
  const fieldClass =
    'w-full bg-white/[0.03] border border-white/14 focus:border-white/45 outline-none text-white placeholder:text-white/45 px-4 py-3 text-[15px] leading-[1.4] transition-colors'

  const sectionTitleClass =
    'text-[clamp(28px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.02em]'

  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white relative overflow-hidden flex flex-col">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-white top-[-200px] left-[50%]" />
      <div className="ambient-glow bg-white/50 bottom-[-100px] right-[-200px]" />

      {/* Charcoal atmosphere overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Hero */}
      <section className="relative z-10 pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-[980px]"
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-6">
              Franchise Opportunities
            </p>
            <h1 className="text-[clamp(40px,7vw,88px)] font-semibold leading-[0.98] tracking-[-0.03em] mb-7">
              Own an Apex Global Investigations Territory
            </h1>
            <p className="text-[19px] text-white/75 leading-[1.65] max-w-[900px] mb-11">
              Apex Global Investigations is building a national network of franchise owner-operators across
              defined territories. We are seeking experienced professionals in investigations, law enforcement,
              security, compliance, and related risk disciplines who want to build a high-trust business in
              their local market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="bg-white/[0.04] border border-white/10 p-5">
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/55 mb-2">Territory Model</p>
                <p className="text-[16px] text-white/75 leading-[1.5]">
                  Defined market coverage with structured support from AGI.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-5">
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/55 mb-2">Operator Profile</p>
                <p className="text-[16px] text-white/75 leading-[1.5]">
                  Experienced professionals with investigative and business judgment.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-5">
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/55 mb-2">Client Focus</p>
                <p className="text-[16px] text-white/75 leading-[1.5]">
                  Corporate investigations, litigation support, and security solutions.
                </p>
              </div>
            </div>

            <a href="#franchise-interest" className="btn-primary inline-block">
              Start Franchise Interest Form
            </a>
          </motion.div>
        </div>
      </section>

      {/* Qualification process */}
      <section className="relative z-10 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">How Qualification Works</p>
            <h2 className={`${sectionTitleClass} mb-10`}>A 3-Step Qualification Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <p className="service-number mb-4">STEP 01</p>
                <h3 className="text-[24px] font-semibold mb-4 tracking-[-0.01em]">Submit Interest Form</h3>
                <p className="text-[17px] text-white/75 leading-[1.7]">
                  Complete the franchise intake form with your background, preferred territory, and
                  qualification details.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <p className="service-number mb-4">STEP 02</p>
                <h3 className="text-[24px] font-semibold mb-4 tracking-[-0.01em]">Speak With Our Team</h3>
                <p className="text-[17px] text-white/75 leading-[1.7]">
                  Qualified candidates are invited to a qualification call to review fit, territory alignment,
                  and business expectations.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <p className="service-number mb-4">STEP 03</p>
                <h3 className="text-[24px] font-semibold mb-4 tracking-[-0.01em]">Complete Formal Review</h3>
                <p className="text-[17px] text-white/75 leading-[1.7]">
                  Finalists move forward with additional documentation, formal review, and next-step franchise
                  materials.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support grid */}
      <section className="relative z-10 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">What Franchisees Receive</p>
            <h2 className={`${sectionTitleClass} mb-10`}>Built-In Support for Growth</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <h3 className="text-[21px] font-medium mb-3">Brand Standards and Positioning</h3>
                <p className="text-[16px] text-white/75 leading-[1.65]">
                  Guidance on brand presentation, service positioning, and client communication standards
                  designed for corporate and legal audiences.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <h3 className="text-[21px] font-medium mb-3">Training and Operational Guidance</h3>
                <p className="text-[16px] text-white/75 leading-[1.65]">
                  Core operating frameworks, service-delivery standards, and quality expectations to support
                  consistent work product across markets.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <h3 className="text-[21px] font-medium mb-3">Territory Framework</h3>
                <p className="text-[16px] text-white/75 leading-[1.65]">
                  Defined territorial strategy to support local market development while preserving national
                  standards and brand consistency.
                </p>
              </div>
              <div className="bg-white/[0.04] border border-white/10 p-8">
                <h3 className="text-[21px] font-medium mb-3">Business and Growth Support</h3>
                <p className="text-[16px] text-white/75 leading-[1.65]">
                  Ongoing support focused on business development, engagement quality, risk management, and
                  long-term value creation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notice */}
      <section className="relative z-10 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.04] border border-white/10 p-8 md:p-10"
          >
            <p className="text-[13px] uppercase tracking-[0.2em] text-white/60 mb-4">Important Notice</p>
            <p className="text-[16px] md:text-[17px] text-white/75 leading-[1.75]">
              Submission of the interest form below does not constitute approval, franchise award, or a
              contractual agreement. Any franchise offering is made only through a Franchise Disclosure
              Document (FDD) and formal franchise documentation, subject to applicable law.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intake form */}
      <section id="franchise-interest" className="relative z-10 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.04] border border-white/10 p-7 md:p-10"
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">Step 1 Intake</p>
            <h2 className={`${sectionTitleClass} mb-4`}>Franchise Interest Form</h2>
            <p className="text-[16px] text-white/70 leading-[1.7] mb-10 max-w-[900px]">
              Complete this intake to help our team evaluate territory fit, experience, and overall franchise
              qualifications. Qualified candidates are invited to a follow-up call and formal review.
            </p>

            <form action="mailto:info@apexgi.com" method="post" encType="text/plain" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-[14px] text-white/75 mb-2">
                    Full Name
                  </label>
                  <input id="fullName" name="Full Name" type="text" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[14px] text-white/75 mb-2">
                    Email Address
                  </label>
                  <input id="email" name="Email Address" type="email" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[14px] text-white/75 mb-2">
                    Phone Number
                  </label>
                  <input id="phone" name="Phone Number" type="tel" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="location" className="block text-[14px] text-white/75 mb-2">
                    City / State
                  </label>
                  <input id="location" name="City and State" type="text" placeholder="City, State" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="territoryPrimary" className="block text-[14px] text-white/75 mb-2">
                    Desired Territory (Primary)
                  </label>
                  <input id="territoryPrimary" name="Desired Territory Primary" type="text" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="territorySecondary" className="block text-[14px] text-white/75 mb-2">
                    Desired Territory (Secondary)
                  </label>
                  <input id="territorySecondary" name="Desired Territory Secondary" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="licenseStatus" className="block text-[14px] text-white/75 mb-2">
                    PI License Status
                  </label>
                  <select id="licenseStatus" name="PI License Status" required className={fieldClass}>
                    <option value="">Select status</option>
                    <option value="Licensed">Licensed</option>
                    <option value="In Process">In Process</option>
                    <option value="Not Yet Licensed">Not Yet Licensed</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="statesLicensed" className="block text-[14px] text-white/75 mb-2">
                    State(s) Licensed (if applicable)
                  </label>
                  <input id="statesLicensed" name="States Licensed" type="text" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="experienceYears" className="block text-[14px] text-white/75 mb-2">
                    Years of Investigations / Security Experience
                  </label>
                  <select id="experienceYears" name="Years of Experience" required className={fieldClass}>
                    <option value="">Select range</option>
                    <option value="0-2">0-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="20+">20+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="liquidCapital" className="block text-[14px] text-white/75 mb-2">
                    Estimated Liquid Capital Range
                  </label>
                  <select id="liquidCapital" name="Estimated Liquid Capital Range" required className={fieldClass}>
                    <option value="">Select range</option>
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K-$100K">$50K-$100K</option>
                    <option value="$100K-$250K">$100K-$250K</option>
                    <option value="$250K-$500K">$250K-$500K</option>
                    <option value="$500K+">$500K+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="netWorth" className="block text-[14px] text-white/75 mb-2">
                    Estimated Net Worth Range
                  </label>
                  <select id="netWorth" name="Estimated Net Worth Range" required className={fieldClass}>
                    <option value="">Select range</option>
                    <option value="Under $250K">Under $250K</option>
                    <option value="$250K-$500K">$250K-$500K</option>
                    <option value="$500K-$1M">$500K-$1M</option>
                    <option value="$1M-$2M">$1M-$2M</option>
                    <option value="$2M+">$2M+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="licenseDiscipline" className="block text-[14px] text-white/75 mb-2">
                    Any Professional License Suspension/Restriction?
                  </label>
                  <select id="licenseDiscipline" name="License Suspension or Restriction" required className={fieldClass}>
                    <option value="">Select option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="criminalHistory" className="block text-[14px] text-white/75 mb-2">
                    Any Disqualifying Criminal History?
                  </label>
                  <select id="criminalHistory" name="Disqualifying Criminal History" required className={fieldClass}>
                    <option value="">Select option</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="currentRole" className="block text-[14px] text-white/75 mb-2">
                    Current Background / Role
                  </label>
                  <textarea
                    id="currentRole"
                    name="Current Background and Role"
                    rows={4}
                    className={fieldClass}
                    placeholder="Briefly summarize your current role and relevant background."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="candidateGoals" className="block text-[14px] text-white/75 mb-2">
                    Why Apex Global / What Are Your Goals?
                  </label>
                  <textarea
                    id="candidateGoals"
                    name="Candidate Goals"
                    rows={4}
                    className={fieldClass}
                    placeholder="Share why this model interests you."
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 text-[14px] text-white/74 leading-[1.5]">
                  <input
                    type="checkbox"
                    name="Certification of Accuracy"
                    value="Agreed"
                    required
                    className="mt-1 h-4 w-4 border-white/30 bg-transparent"
                  />
                  I certify that the information provided is true, accurate, and complete.
                </label>
                <label className="flex items-start gap-3 text-[14px] text-white/74 leading-[1.5]">
                  <input
                    type="checkbox"
                    name="Permission to Contact"
                    value="Agreed"
                    required
                    className="mt-1 h-4 w-4 border-white/30 bg-transparent"
                  />
                  I authorize Apex Global Investigations to contact me regarding franchise qualification.
                </label>
                <label className="flex items-start gap-3 text-[14px] text-white/74 leading-[1.5]">
                  <input
                    type="checkbox"
                    name="Acknowledgment of No Offer"
                    value="Agreed"
                    required
                    className="mt-1 h-4 w-4 border-white/30 bg-transparent"
                  />
                  I understand this submission does not guarantee approval, franchise award, or any contractual agreement.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-[13px] text-white/55 leading-[1.5] max-w-[760px]">
                  Each submission is reviewed by our team, and qualified candidates are contacted directly for
                  next steps.
                </p>
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Submit Interest
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
