import { useRef, useState } from 'react'
import type { Lang, PortfolioCategory } from './types'
import { Hero } from './components/Hero'
import { CategoryNav } from './components/CategoryNav'
import { PortfolioSection } from './components/PortfolioSection'
import { ServicesSection } from './components/ServicesSection'
import { AboutSection } from './components/AboutSection'
import { Footer } from './components/Footer'
export default function App() {
  const [lang, setLang] = useState<Lang>('es')
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('all')
  const portfolioRef = useRef<HTMLDivElement>(null)

  const toggleLang = () => setLang(l => l === 'es' ? 'en' : 'es')

  const scrollToPortfolio = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Hero lang={lang} onToggleLang={toggleLang} onScrollDown={scrollToPortfolio} />

      <div ref={portfolioRef} id="portafolio">
        <CategoryNav activeId={activeCategory} lang={lang} onSelect={setActiveCategory} />
        <PortfolioSection lang={lang} activeId={activeCategory} />
      </div>

      <div style={{ height: 1, background: 'var(--tc-border)' }} />

      <ServicesSection lang={lang} />

      <div style={{ height: 1, background: 'var(--tc-border)' }} />

      <AboutSection lang={lang} />

      <Footer lang={lang} />

    </div>
  )
}
