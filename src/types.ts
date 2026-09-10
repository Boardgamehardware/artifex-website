export interface Slide {
  kind: 'image' | 'video'
  src: string
  fallbackSrc?: string
  alt: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}
