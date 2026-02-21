'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0B0D] text-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-white top-[-200px] right-[-200px]" />
      <div className="ambient-glow bg-white/50 bottom-[-200px] left-[-200px]" />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
          <motion.div
            className="max-w-4xl"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Main headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[clamp(42px,7vw,84px)] font-semibold leading-[1.02] tracking-[-0.03em] mb-8"
            >
              Corporate Investigations, Fraud Detection, and Litigation Support.
            </motion.h1>

            {/* Subhead */}
            <motion.p
              variants={fadeInUp}
              className="text-[19px] text-white/70 leading-relaxed max-w-2xl mb-12"
            >
              A team of former federal law enforcement executives — DHS, FBI, Treasury —
              delivering discreet, results-driven investigations for corporations and law firms nationwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mb-24"
            >
              <Link href="#contact" className="btn-primary">
                Request Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-20 pt-12 border-t border-white/10 max-w-lg"
            >
              <div>
                <p className="text-[42px] font-semibold tracking-tight mb-1">100+</p>
                <p className="text-[13px] text-white/55 uppercase tracking-wider">Years of Combined Experience</p>
              </div>
              <div>
                <p className="text-[42px] font-semibold tracking-tight mb-1">Global</p>
                <p className="text-[13px] text-white/55 uppercase tracking-wider">Coverage</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* Services Preview */}
      <section className="py-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">Services</p>
            <div className="flex items-end justify-between">
              <h2 className="text-[clamp(28px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] max-w-xl">
                Comprehensive Solutions for Complex Challenges
              </h2>
              <Link
                href="/services"
                className="hidden md:flex items-center gap-2 text-[14px] text-white/70 hover:text-white transition-colors group"
              >
                View all services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Corporate Investigations', desc: 'Fraud, embezzlement, espionage, and insider threats', slug: 'corporate-investigations' },
              { num: '02', title: 'Litigation Support', desc: 'Expert testimony and dispute resolution', slug: 'litigation-support' },
              { num: '03', title: 'Security Solutions', desc: 'Executive protection and risk management', slug: 'security-solutions' },
            ].map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link href={`/services/${service.slug}`} className="service-card block h-full group">
                  <span className="service-number">{service.num}</span>
                  <h3 className="text-[20px] font-medium mt-6 mb-3">{service.title}</h3>
                  <p className="text-[15px] text-white/70 leading-relaxed">{service.desc}</p>
                  <div className="mt-8 flex items-center gap-2 text-[13px] text-white/60 group-hover:text-white transition-colors">
                    Learn more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">About</p>
              <h2 className="text-[clamp(28px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
                Founded on Principles of Integrity and Excellence
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-[17px] text-white/78 leading-relaxed">
                Apex Global Investigations delivers corporate investigations, litigation support, business
                intelligence, and security solutions for organizations navigating complex risk, fraud, and
                dispute matters. Our leadership team brings deep experience across federal law enforcement,
                legal strategy, forensic accounting, technology, and intelligence operations.
              </p>
              <p className="text-[17px] text-white/78 leading-relaxed">
                Built on more than 100 years of combined executive expertise, we design practical,
                results-driven solutions that mitigate risk, strengthen operational integrity, and protect
                stakeholder value. We support boards, executives, attorneys, HR leaders, and private equity
                professionals across multiple industries.
              </p>
              <p className="text-[17px] text-white/78 leading-relaxed">
                Our services are tailored to each engagement and risk profile, and include internal and
                external corporate investigations, litigation and dispute support, vulnerability and threat
                assessments, and strategic intelligence for high-impact business decisions.
              </p>
              <p className="text-[17px] text-white/78 leading-relaxed">
                Headquartered in Bloomfield Hills, Michigan, Apex Global Investigations is a fully licensed
                and insured advisory and investigations firm serving clients nationwide.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-32 border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-[13px] text-white/60 uppercase tracking-[0.2em] mb-4">Leadership</p>
            <h2 className="text-[clamp(28px,4vw,48px)] font-semibold leading-[1.1] tracking-[-0.02em] max-w-2xl">
              Former Federal Law Enforcement Executives
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                name: 'Kevin M. Cronin, MBA',
                title: 'Principal',
                image: '/images/leadership/kevin-m-cronin.jpg',
                bio: [
                  `Kevin M. Cronin is a highly credentialed business and security executive with over 25 years of experience, including serving as Vice President, Global Crisis Management & Security for a leading e-commerce company, Senior Managing Director for a financial restructuring firm, Department of Homeland Security Special Agent, and police sergeant.`,
                  `As a Special Agent for the U.S. Department of Homeland Security (DHS), Office of Inspector General, Kevin conducted internal agency investigations of corruption, abuse, and mismanagement of funds controlled by DHS. He has worked in an undercover capacity for the Federal Bureau of Investigation (FBI), Drug Enforcement Agency (DEA), DHS, and other federal and state jurisdictions and has directed large-scale, cross-border criminal investigations. Kevin has extensive knowledge of physical and electronic surveillance, has SWAT experience, and has held top-secret security clearance from the United States government. He has successfully prosecuted criminal violations within both federal and state courts and has served as an expert witness in numerous cases.`,
                  `Kevin transitioned his law enforcement experience to the private sector, specializing in risk management, including corporate investigations, intelligence, crisis management, threat and risk assessments, surveillance, counter-surveillance measures, executive protection, and security services for domestic and global clients. Kevin has successfully led numerous criminal and corporate fraud, espionage, embezzlement, theft, insider trading, digital forensics, and cybersecurity investigations, assuring his clients' access to world-class expertise and helping mitigate the significant risks of today's volatile business environment.`,
                  `Kevin holds a Master of Business Administration from Michigan State University and a Bachelor of Arts in Criminal Justice from Concordia University. He has also attended Staff and Command Management Programs at Northwestern University in Evanston, Illinois, and the Federal Law Enforcement Training Center in Brunswick, Georgia.`,
                ],
                agencies: ['DHS', 'FBI', 'DEA'],
              },
              {
                name: 'Todd Dennis',
                title: 'COO/Senior Managing Director - Ann Arbor, MI/Toledo, OH',
                image: '/images/leadership/todd-dennis.png',
                bio: [
                  `Todd Dennis is an experienced criminal investigator with over thirty years of law enforcement experience, including more than twenty years in leadership positions. Todd retired as the Special Agent in Charge, Department of Homeland Security (DHS), Office of Inspector General (OIG), where he managed all internal investigations for DHS in the Midwest, including offices in Detroit, Buffalo, and Chicago.`,
                  `The DHS OIG's main responsibility was to investigate fraud, theft, insider threat, public corruption and other crimes committed by DHS employees, contractors and outside offenders. Todd's law enforcement career also included assignments to a multi-jurisdictional emergency response team, undercover narcotics team, trainer for multiple disciplines, and protection details for federal judiciary members and other controversial individuals.`,
                  `Todd has extensive experience in the corporate security and executive protection industry and has managed contract security and executive protection details at major events across the U.S., including NASCAR, college and professional football, concerts, and music festivals. Todd regularly performs site security assessments at corporate office complexes and personal residences.`,
                ],
                agencies: ['DHS OIG'],
              },
              {
                name: 'Dennis M. McGunagle',
                title: 'Managing Director - Washington D.C.',
                image: '/images/leadership/dennis-m-mcgunagle.jpg',
                bio: [
                  `Dennis M. McGunagle brings nearly four decades of distinguished law enforcement experience, marked by leadership, innovation, and an unwavering commitment to public service and safety. Originally from Middleborough, Massachusetts, he was raised in South Florida, served in the United States Army at home and abroad, ultimately leading law enforcement units for the Department of Homeland Security across geographically diverse areas of the United States and Caribbean. During his nearly 30 years with DHS, he served in nearly every law enforcement role and was eventually appointed to the senior executive service as the Deputy Assistant Inspector General for Investigations, where he led a national team of 270 special agents and investigative support personnel.`,
                  `During his DHS career, Mr. McGunagle transformed the Office of Inspector General from a nascent organization in the immediate aftermath of the September 11th terrorist attacks to a nimble and highly efficient investigative organization, encompassing state-of-the-art digital forensics, internal affairs, and public corruption units. Throughout his career, he played key roles in setting investigative standards for high-profile and politically sensitive civil rights, national security, and employee misconduct investigations. Many of Mr. McGunagle's policies were adopted as best practices across the law enforcement community.`,
                  `Mr. McGunagle is a recognized expert in employee misconduct investigations, including theft, fraud, embezzlement, contract fraud, high-risk terminations, discrimination, harassment, and whistleblower retaliation. He is skilled in security operations, security vulnerability assessments, intelligence collection, and evidentiary search and seizure. His use of innovative surveillance techniques produces high-impact results and prosecutions. Mr. McGunagle also served as a certified firearms and defensive tactics instructor.`,
                  `Some of Mr. McGunagle's early assignments included providing protection for dignitaries such as the former Chairman of the Joint Chiefs Colin Powell and the former Secretary of Defense Dick Cheney, and his work at the World Trade Center immediately following the 2001 terrorist attack strengthened his resolve to protect his country and its citizens from malign forces. While serving as a military policeman, Mr. McGunagle completed a bachelor's degree in criminal justice and was selected to serve as a U.S. Army CID Special Agent, where he conducted felony investigations and dignitary protection operations. Later, during his civilian senior executive career, he completed the DHS Capstone Program, the Department's premier executive leadership program, as well as the Lincoln Leadership course in Gettysburg, Pennsylvania.`,
                ],
                agencies: ['DHS', 'U.S. Army'],
              },
              {
                name: 'Jay Donly',
                title: 'Managing Director - Miami, FL',
                image: '/images/leadership/jay-donly.jpg',
                bio: [
                  `Jay Donly is an accomplished law enforcement professional with over thirty years of law enforcement experience working for the Department of Homeland Security (DHS), Office of Inspector General (OIG), U.S. Department of the Treasury, U.S. Border Patrol, U.S. Immigration and Naturalization Service, and the Florida State Attorney's Office. Jay has over ten years of federal leadership experience with the DHS OIG, as the Director of Field Operations, Special Agent in Charge, and Assistant Special Agent in Charge, and more than twenty years of investigative experience.`,
                  `Jay's duties as the Director of Field Operations included operational and functional development, implementation and supervision of all thirty-one field offices and all criminal, civil and administrative investigative activities. As the Special Agent in Charge of the Miami Field Office, Jay managed the Miami, Orlando, and San Juan, field offices. Under his supervision, these offices led the country in indictments, arrests, convictions, sentencings, and restitution.`,
                  `Jay has personally conducted numerous complex, highly sensitive criminal and administrative investigations in the areas of internal corruption, program and disaster fraud, narcotics and human smuggling. Some of these investigations involved high-ranking government officials, criminal offenses in foreign countries, and millions of dollars in fraud. Since entering the private sector, Jay has worked as a private investigator, often in support of private businesses and attorneys, where he investigated fraud, theft, corporate sabotage and cyberattacks as well as providing security and executive protection services.`,
                ],
                agencies: ['DHS OIG', 'Treasury', 'CBP'],
              },
              {
                name: 'Jon Chmura, CFE',
                title: 'Director, Security and Investigations - Detroit, MI',
                image: '/images/leadership/jon-chmura.jpg',
                bio: [
                  `With more than a decade of investigative experience, Jon brings a focused and principled approach to corporate risk management and intelligence gathering. After earning his degree in Criminal Justice from Michigan State University, Jon began his career as a corporate investigator at a large financial services company, where he honed his skills in fraud detection, internal investigations, and workplace misconduct.`,
                  `Today, Jon leads the analyst team at Apex Global Investigations and plays a central role in managing day-to-day operations. A Certified Fraud Examiner (CFE), he is especially strong in due diligence and misconduct investigations, leveraging his background in open-source intelligence (OSINT), non-confrontational interviewing, and digital evidence review.`,
                  `Jon has completed extensive training in Homeland Security Bombing Prevention, fraud detection, security assessments, and surveillance technology, including CCTV analysis. Known for his integrity, honesty, and genuine approach, Jon is committed to delivering clear, reliable insights that help clients make informed decisions and reduce organizational risk.`,
                ],
                agencies: ['CFE', 'OSINT'],
              },
              {
                name: 'Catherine Lane, MBA, EA',
                title: 'Managing Director - Boston, MA',
                image: '/images/leadership/catherine-lane.jpg',
                bio: [
                  `Catherine Lane is an accountant with nearly 20 years of experience in corporate and small business accounting, specializing in financial reporting and analysis across a wide range of industries to include legal, manufacturing, banking, and healthcare. She is also a tax professional, certified as an Enrolled Agent (EA) admitted to practice before the Internal Revenue Service.`,
                  `Ms. Lane earned a Bachelor of Arts in Accounting and a Master of Business Administration from Benedictine College and has served in private industry as a senior consultant, accounting manager, and analyst. She is known for her expertise in financial risk assessment, internal audit, financial reporting, and compliance for both privately held and publicly traded companies.`,
                ],
                agencies: ['EA', 'Forensic Accounting'],
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/[0.04] border border-white/10 p-8"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-[96px] h-[120px] sm:w-[132px] sm:h-[160px] relative overflow-hidden border border-white/20 bg-white/5 shrink-0">
                    <Image
                      src={person.image}
                      alt={`${person.name} headshot`}
                      fill
                      sizes="(max-width: 640px) 96px, 132px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-[20px] font-medium">{person.name}</h3>
                        <p className="text-[15px] text-white/70">{person.title}</p>
                      </div>
                      <div className="flex gap-2 flex-wrap justify-end">
                        {person.agencies.map((agency) => (
                          <span
                            key={agency}
                            className="text-[11px] uppercase tracking-wider text-white/55 border border-white/20 px-2 py-1"
                          >
                            {agency}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4 max-w-[78ch]">
                      {person.bio.map((paragraph, paragraphIndex) => (
                        <p
                          key={`${person.name}-${paragraphIndex}`}
                          className="text-[17px] text-white/78 leading-[1.75]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
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
