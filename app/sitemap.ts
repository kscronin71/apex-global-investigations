import type { MetadataRoute } from 'next'

const siteUrl = 'https://apexglobalinvestigations.com'

const staticRoutes = [
  '',
  '/services',
  '/franchise',
]

const serviceRoutes = [
  '/services/corporate-investigations',
  '/services/litigation-support',
  '/services/certified-fraud-examiner',
  '/services/security-solutions',
  '/services/business-intelligence',
  '/services/threat-assessment',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [...staticRoutes, ...serviceRoutes]

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/services' ? 0.9 : 0.8,
  }))
}
