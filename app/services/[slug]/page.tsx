import { notFound } from 'next/navigation'
import ServiceDetailClient from './ServiceDetailClient'

export const dynamic = 'force-static'
export const dynamicParams = false

type ServiceContent = {
  num: string
  title: string
  subtitle: string
  description: string
  features: { title: string; desc: string }[]
  capabilities: string[]
  process: { step: string; title: string; desc: string }[]
}

const servicesData: Record<string, ServiceContent> = {
  'corporate-investigations': {
    num: '01',
    title: 'Corporate Investigations',
    subtitle: 'Methodical Investigations and Diligence for Critical Business Decisions',
    description: 'Our investigation team, made up of former federal, state, and local law enforcement professionals, takes a methodical approach to fact-finding, conflict resolution, and risk reduction. We deliver discreet, legally defensible investigations tailored to the business problem at hand.',
    features: [
      { title: 'Internal & External Corporate Investigations', desc: 'Internal and external corporate investigations' },
      { title: 'Criminal, Fraud & White-Collar Investigations', desc: 'Criminal investigations; fraud and white-collar investigations; insurance investigations' },
      { title: 'Due Diligence & Asset Verification', desc: 'Due diligence for partnerships and acquisitions; asset verification and location' },
      { title: 'Surveillance & Workforce Risk', desc: 'Physical and electronic surveillance; employee misconduct, theft, and high-risk terminations' },
    ],
    capabilities: [
      'Internal and external corporate investigations',
      'Criminal and white-collar investigations',
      "Fraud detection (including workers' compensation, insurance, and documentation fraud)",
      'Background investigations and open-source exposure profiles',
      'Asset searches, asset location, and protection',
      'Physical and electronic surveillance and countermeasures',
    ],
    process: [
      { step: '01', title: 'Intake & Scope', desc: 'Define objectives, legal context, and decision requirements for the matter.' },
      { step: '02', title: 'Investigation Plan', desc: 'Build a methodical investigation and diligence plan based on risk and facts available.' },
      { step: '03', title: 'Evidence Development', desc: 'Conduct interviews, analysis, surveillance, and record development using defensible methods.' },
      { step: '04', title: 'Findings & Strategy', desc: 'Deliver clear findings and recommendations to support business, legal, or compliance decisions.' },
    ],
  },
  'certified-fraud-examiner': {
    num: '03',
    title: 'Certified Fraud Examiner',
    subtitle: 'Specialized CFE Support for Fraud Detection, Response, and Prevention',
    description: 'Our Certified Fraud Examiners are credentialed professionals trained to detect, investigate, and prevent fraud. With experience in financial forensics, internal investigations, and regulatory compliance, we help clients navigate misconduct and financial irregularities with clear, defensible findings.',
    features: [
      { title: 'Internal Theft & Financial Misstatement', desc: 'Suspect internal theft, embezzlement, or financial misstatement' },
      { title: 'Whistleblower & Conduct Investigations', desc: 'Need to investigate whistleblower complaints or code of conduct violations' },
      { title: 'Fraud Litigation Support', desc: 'Are preparing for litigation involving fraud, breach of fiduciary duty, or white-collar crime' },
      { title: 'Asset Tracing & Controls', desc: 'Require assistance with asset tracing or financial recovery; assess and strengthen internal controls to prevent future losses' },
    ],
    capabilities: [
      'Investigation of suspected theft, embezzlement, and financial misstatement',
      'Support for fraud, breach of fiduciary duty, and white-collar litigation',
      'Asset tracing and financial recovery support',
      'Investigation techniques across financial and legal evidence',
      'Regulatory and internal reporting documentation',
      'Anti-fraud control assessment and remediation',
    ],
    process: [
      { step: '01', title: 'Allegation & Risk Scoping', desc: 'Review allegations, objectives, and available evidence to define a targeted workplan.' },
      { step: '02', title: 'Forensic Investigation', desc: 'Collect records, analyze transactions, and develop facts through structured investigative methods.' },
      { step: '03', title: 'Findings & Documentation', desc: 'Deliver clear, supportable findings for management, counsel, and regulatory stakeholders.' },
      { step: '04', title: 'Remediation Planning', desc: 'Recommend practical control and process improvements to reduce recurring fraud risk.' },
    ],
  },
  'litigation-support': {
    num: '02',
    title: 'Litigation Support',
    subtitle: 'Strategic Insights and Analytical Expertise for Complex Litigation Matters',
    description: 'Apex Global Investigations delivers strategic insights and analytical expertise to support complex litigation matters. Whether the issue involves litigation, arbitration, or mediation, we help clients build stronger cases and reach informed outcomes. We collaborate closely with legal counsel to provide critical information and expert input throughout the legal process.',
    features: [
      { title: 'Early Case Assessment and Strategy', desc: 'Early case assessment and strategy' },
      { title: 'Discovery and eDiscovery Support', desc: 'Discovery and eDiscovery support' },
      { title: 'Damages Analysis', desc: 'Damages analysis' },
      { title: 'Asset Search and Recovery', desc: 'Asset search and recovery' },
      { title: 'Expert Reports, Rebuttals, and Testimony', desc: 'Expert reports, rebuttals, and testimony' },
    ],
    capabilities: [
      'Early case assessment and strategy',
      'Discovery and eDiscovery support',
      'Damages analysis',
      'Asset search and recovery',
      'Expert reports, rebuttals, and testimony',
    ],
    process: [
      { step: '01', title: 'Case Assessment', desc: 'Review case materials and identify investigative opportunities.' },
      { step: '02', title: 'Investigation', desc: 'Conduct targeted investigation to develop facts and evidence.' },
      { step: '03', title: 'Expert Work Product', desc: 'Prepare reports, rebuttals, and evidence packages aligned to litigation strategy.' },
      { step: '04', title: 'Hearing & Trial Support', desc: 'Support counsel through negotiation, mediation, arbitration, and testimony phases.' },
    ],
  },
  'security-solutions': {
    num: '04',
    title: 'Security Solutions',
    subtitle: 'Comprehensive Security and Risk Management for Organizations and Individuals',
    description: 'Apex Global Investigations offers a complete range of security and risk management services for both corporate and individual clients. Our team includes seasoned professionals with experience in securing government facilities, corporate campuses, private residences, and high-profile events. We provide proactive, customized solutions designed to reduce risk and protect people, property, and reputation.',
    features: [
      { title: 'Security and Vulnerability Assessments', desc: 'Security and vulnerability assessments for facilities, operations, and personnel.' },
      { title: 'Executive Protection and Armed Security', desc: 'Executive protection and armed security for high-risk or high-profile situations.' },
      { title: 'Special Event Security', desc: 'Special event security planning and on-site coordination.' },
      { title: 'Crisis Management and Emergency Response Planning', desc: 'Crisis management and emergency response planning to improve readiness and resilience.' },
    ],
    capabilities: [
      'Security and vulnerability assessments',
      'Executive protection and armed security',
      'Special event security',
      'Crisis management and emergency response planning',
      'Physical and electronic surveillance',
      'Travel intelligence briefs (domestic and international)',
      'Asset protection and loss prevention',
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Identify vulnerabilities and preemptive security measures to protect people, assets, and infrastructure.' },
      { step: '02', title: 'Planning', desc: 'Structure key communication and contingency strategies for emergency response.' },
      { step: '03', title: 'Implementation', desc: 'Deploy security solutions, internal controls, and coordination protocols.' },
      { step: '04', title: 'Stabilization', desc: 'Supplement internal response teams and accelerate the stabilization of operations.' },
    ],
  },
  'business-intelligence': {
    num: '05',
    title: 'Business Intelligence',
    subtitle: 'Strategic Insights for Informed Decisions',
    description: 'Apex Global Investigations provides business intelligence services that empower clients to make informed strategic decisions. We collect and analyze data from multiple sources to assess markets, identify risks, and support operational planning. We support executives, attorneys, HR leaders, and private equity professionals in navigating complex business environments with confidence.',
    features: [
      { title: 'Pre-Transaction Due Diligence', desc: 'Pre-transaction due diligence for investors and acquirers.' },
      { title: 'M&A Support', desc: 'M&A support, including pre-deal analysis and post-acquisition reviews.' },
      { title: 'Market Entry Intelligence', desc: 'Market entry intelligence for international companies entering the U.S. market.' },
      { title: 'Competitive Landscape Analysis', desc: 'Strategic and competitive landscape analysis for informed planning and positioning.' },
      { title: 'Internal Audits', desc: 'Internal audits of business records, including financials and I-9 compliance.' },
    ],
    capabilities: [
      'Pre-transaction due diligence for investors and acquirers',
      'M&A support, including pre-deal analysis and post-acquisition reviews',
      'Market entry intelligence for international companies entering the U.S. market',
      'Strategic and competitive landscape analysis',
      'Internal audits of business records, including financials and I-9 compliance',
    ],
    process: [
      { step: '01', title: 'Requirements Definition', desc: 'Identify key intelligence requirements and decision points.' },
      { step: '02', title: 'Collection', desc: 'Gather information through multiple channels and sources.' },
      { step: '03', title: 'Analysis', desc: 'Synthesize data into actionable intelligence products.' },
      { step: '04', title: 'Dissemination', desc: 'Deliver timely intelligence briefings and reports.' },
    ],
  },
  'threat-assessment': {
    num: '06',
    title: 'Vulnerability & Threat Assessments',
    subtitle: 'Global Threat Assessments and Actionable Business Intelligence',
    description: 'Apex Global Investigations provides global threat assessments and actionable business intelligence. We help clients implement preemptive measures to protect infrastructure, personnel, and brand integrity. We deliver clear, actionable intelligence to help clients make informed decisions and reduce exposure.',
    features: [
      { title: 'Background Investigations', desc: 'Background investigations at various levels.' },
      { title: 'Travel Risk Assessments', desc: 'Travel risk assessments for personnel and operations.' },
      { title: 'Security Video and Access Control Planning', desc: 'Security video and access control system planning.' },
      { title: 'Business Continuity and Crisis Planning', desc: 'Business continuity and crisis management planning.' },
    ],
    capabilities: [
      'Background investigations at various levels',
      'Travel risk assessments',
      'Security video and access control system planning',
      'Executive protection',
      'Business continuity and crisis management planning',
      'Loss prevention',
      'Fraud identification and prevention',
    ],
    process: [
      { step: '01', title: 'Threat Identification', desc: 'Identify relevant threat vectors and high-risk scenarios for the organization.' },
      { step: '02', title: 'Vulnerability Assessment', desc: 'Evaluate personnel, facility, travel, and operational vulnerabilities.' },
      { step: '03', title: 'Mitigation Design', desc: 'Prioritize mitigation measures and implementation requirements.' },
      { step: '04', title: 'Actionable Briefing', desc: 'Deliver clear, decision-ready intelligence and response recommendations.' },
    ],
  },
}

// Backward-compatible alias for existing links.
servicesData['fraud-prevention'] = servicesData['certified-fraud-examiner']

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
