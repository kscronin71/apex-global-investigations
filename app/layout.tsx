import type { Metadata } from 'next'
import { Suspense } from 'react'
import './globals.css'
import Navigation from './components/Navigation'
import GoogleAnalytics from './components/GoogleAnalytics'

// SEO-optimized metadata
// Title Tag: Targets high-value keywords while staying under 60 characters
// Meta Description: Under 150 characters, includes CTA and key differentiator
export const metadata: Metadata = {
  metadataBase: new URL('https://apexgi.com'),
  title: 'Corporate Investigations & Intelligence | Apex Global Investigations',
  description: 'Elite Corporate Investigations, Fraud Detection, and Litigation Support. Former federal agents. Confidential consultation available.',
  keywords: [
    'corporate investigations',
    'fraud investigation',
    'litigation support',
    'business intelligence',
    'corporate surveillance',
    'private investigator',
    'due diligence',
    'asset search',
    'background investigation',
    'executive protection',
  ],
  authors: [{ name: 'Apex Global Investigations' }],
  creator: 'Apex Global Investigations',
  publisher: 'Apex Global Investigations',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://apexgi.com',
    siteName: 'Apex Global Investigations',
    title: 'Corporate Investigations & Intelligence | Apex Global Investigations',
    description: 'Elite Corporate Investigations, Fraud Detection, and Litigation Support. Former federal agents.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Apex Global Investigations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Investigations & Intelligence | Apex Global Investigations',
    description: 'Elite Corporate Investigations, Fraud Detection, and Litigation Support. Former federal agents.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://apexgi.com',
  },
}

// JSON-LD Structured Data for better search visibility
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Apex Global Investigations',
  description: 'Elite corporate investigations, fraud detection, litigation support, and business intelligence services.',
  url: 'https://apexgi.com',
  telephone: '(833) 343-2164',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6632 Telegraph Rd, Suite 245',
    addressLocality: 'Bloomfield Hills',
    addressRegion: 'MI',
    postalCode: '48301',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.5467,
    longitude: -83.2454,
  },
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: [
    'Corporate Investigations',
    'Fraud Investigation',
    'Litigation Support',
    'Business Intelligence',
    'Due Diligence',
    'Background Investigations',
    'Asset Search',
    'Executive Protection',
  ],
  priceRange: '$$$',
  image: 'https://apexgi.com/og-image.jpg',
  sameAs: [
    'https://www.linkedin.com/company/apex-global-investigations',
  ],
}

// If a stale HTML response references missing CSS, refresh once with a cache-busting query.
const cssRecoveryScript = `
(() => {
  if (typeof window === 'undefined') return;

  const RETRY_KEY = '__agi_css_retry_at__';
  const RETRY_COOLDOWN_MS = 30000;
  const VERIFY_TIMEOUT_MS = 2200;

  const hasStyles = () => {
    try {
      const body = document.body;
      if (!body) return false;
      const bg = window.getComputedStyle(body).backgroundColor;
      return Boolean(bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent');
    } catch {
      return false;
    }
  };

  const shouldRetry = () => {
    try {
      const previous = Number(sessionStorage.getItem(RETRY_KEY) || '0');
      return Date.now() - previous > RETRY_COOLDOWN_MS;
    } catch {
      return true;
    }
  };

  const recoverOnce = () => {
    if (!shouldRetry()) return;
    try {
      sessionStorage.setItem(RETRY_KEY, String(Date.now()));
    } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set('_asset_retry', String(Date.now()));
    window.location.replace(url.toString());
  };

  const verifyStylesheets = () => {
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
    if (!links.length) {
      window.setTimeout(() => {
        if (!hasStyles()) recoverOnce();
      }, VERIFY_TIMEOUT_MS);
      return;
    }

    let remaining = links.length;
    let hadError = false;

    const markDone = () => {
      remaining -= 1;
      if (remaining <= 0) {
        window.setTimeout(() => {
          if (hadError || !hasStyles()) recoverOnce();
        }, 100);
      }
    };

    links.forEach((styleLink) => {
      if (styleLink.sheet) {
        markDone();
        return;
      }

      styleLink.addEventListener('load', markDone, { once: true });
      styleLink.addEventListener(
        'error',
        () => {
          hadError = true;
          markDone();
        },
        { once: true }
      );
    });

    window.setTimeout(() => {
      if (!hasStyles()) recoverOnce();
    }, VERIFY_TIMEOUT_MS);
  };

  window.addEventListener('load', verifyStylesheets, { once: true });
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: cssRecoveryScript }} />
      </head>
      <body className="grain-overlay">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
