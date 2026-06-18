import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/lib/i18n/routing'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { NFCSpotlight } from '@/components/NFCSpotlight'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

function AmbientDivider() {
  return (
    <div
      style={{
        height: '1px',
        background:
          'linear-gradient(to right, transparent, rgba(200,169,110,0.2), transparent)',
        margin: '0 auto',
        width: '80%',
      }}
    />
  )
}

export default function HomePage({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params
  setRequestLocale(locale)

  return (
    <main className="bg-primary">
      <Hero />
      <AmbientDivider />
      <About />
      <AmbientDivider />
      <Services />
      <AmbientDivider />
      <Projects />
      <AmbientDivider />
      <NFCSpotlight />
      <AmbientDivider />
      <Contact />
      <AmbientDivider />
      <Footer />
    </main>
  )
}
