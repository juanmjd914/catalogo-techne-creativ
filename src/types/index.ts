export type PortfolioCategory = 'all' | 'landing-basica' | 'landing-premium' | 'corporativo' | 'menu-basico' | 'menu-premium' | 'citas' | 'ecommerce-basico' | 'ecommerce-completo'

export interface PortfolioItem {
  id: number
  name: string
  category: Exclude<PortfolioCategory, 'all'>
  image: string
  description: string
  url: string | null
  price: string | null
}

export interface Service {
  id: number
  icon: string
  title: string
  description: string
  features: string[]
  waMessage: string
}

export type Lang = 'es' | 'en'
