import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import { site } from './data/site'
import { ParticleBackground } from './components/ParticleBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { SelectionSignals } from './components/SelectionSignals'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { ContactModal } from './components/ContactModal'
import { Footer } from './components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.title,
  email: site.email,
  telephone: site.phone,
  url: site.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressCountry: 'IN',
  },
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    'React',
    'Node.js',
    'Express',
    'MySQL',
    'AWS',
    'Full-stack development',
    'Agentic AI systems',
    'MCP tool orchestration',
  ],
}

function App() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>{`${site.name} · ${site.title} | React · Node.js · AWS`}</title>
        <meta name="description" content={site.tagline} />
        <link rel="canonical" href={site.url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={site.url} />
        <meta property="og:title" content={`${site.name} · ${site.title}`} />
        <meta property="og:description" content={site.tagline} />
        <meta property="og:image" content={`${site.url}${site.ogImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${site.name} · ${site.title}`} />
        <meta name="twitter:description" content={site.tagline} />
        <meta name="twitter:image" content={`${site.url}${site.ogImage}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Analytics />

      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-lg focus:bg-cyan-glow focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-space-navy focus:shadow-lg"
      >
        Skip to content
      </a>

      <ParticleBackground />
      <Navbar onConnect={() => setContactOpen(true)} />

      <main id="main">
        <Hero onConnect={() => setContactOpen(true)} />
        <Stats />
        <SelectionSignals />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact onOpenModal={() => setContactOpen(true)} />
      </main>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <Footer />
    </>
  )
}

export default App
