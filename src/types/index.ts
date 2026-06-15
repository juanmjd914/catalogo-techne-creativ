export type PortfolioCategory = 'all' | 'web' | 'gastro' | 'salud' | 'menu' | 'otros'

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
