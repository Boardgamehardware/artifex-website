export type ModelId = 'ancient-stone' | 'secret-academy' | 'wanted' | 'noble-palace'
export type HotspotSide = 'top' | 'bottom' | 'left' | 'right'
export type HotspotId = `${ModelId}-${HotspotSide}`
export type PropId =
  | 'dragon'
  | 'gauntlet'
  | 'owl'
  | 'potion'
  | 'spider'
  | 'staff'
  | 'ears'
  | 'rogue'

export interface ModelConfig {
  id: ModelId
  label: string
  imageUrl: string
}

export interface PropConfig {
  id: PropId
  label: string
  modelUrl: string
  initialHotspot: HotspotId
}

export interface Hotspot {
  id: HotspotId
  modelId: ModelId
  side: HotspotSide
  position: readonly [number, number, number]
}

export type PropPlacement = Record<PropId, HotspotId | null>

export interface Slide {
  kind: 'image' | 'video'
  src: string
  fallbackSrc?: string
  alt: string
}

export interface Review {
  name: string
  role: string
  quote: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}
