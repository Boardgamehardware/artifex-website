import appSlide1Webm from './assets/images/How It Works Video 1.webm'
import appSlide1Mp4 from './assets/images/How It Works Video 1.mp4'
import appSlide2Webm from './assets/images/How It Works Video 3.webm'
import appSlide2Mp4 from './assets/images/How It Works Video 3.mp4'
import appSlide3 from './assets/images/How it works - 3.gif'
import appSlide4 from './assets/images/App - Placeholder Image 4.png'
import customizeDeviceAcademy from './assets/images/Customize Device - Academy.png'
import customizeDevicePalace from './assets/images/Customize Device - Palace.png'
import customizeDeviceStone from './assets/images/Customize Device - Stone.png'
import customizeDeviceWanted from './assets/images/Customize Device - Wanted.png'
import type { FaqItem, ModelConfig, PropConfig, Slide } from './types'

export const publicAssetUrl = (filename: string) => `${import.meta.env.BASE_URL}${filename}`

export const artifactModelUrl = publicAssetUrl('Customize 3D Model - Wanted.glb')

export const models: ModelConfig[] = [
  { id: 'ancient-stone', label: 'Ancient Stone', imageUrl: customizeDeviceStone },
  { id: 'secret-academy', label: 'Secret Academy', imageUrl: customizeDeviceAcademy },
  { id: 'wanted', label: 'Wanted: Dead or Alive', imageUrl: customizeDeviceWanted },
  { id: 'noble-palace', label: 'Noble Palace', imageUrl: customizeDevicePalace },
]

export const props: PropConfig[] = [
  {
    id: 'dragon',
    label: 'Dragon',
    modelUrl: publicAssetUrl('Prop - Dragon.glb'),
    initialHotspot: 'secret-academy-top',
  },
  {
    id: 'gauntlet',
    label: 'Gauntlet',
    modelUrl: publicAssetUrl('Prop - Gauntlet.glb'),
    initialHotspot: 'noble-palace-top',
  },
  {
    id: 'owl',
    label: 'Owl',
    modelUrl: publicAssetUrl('Prop - Owl.glb'),
    initialHotspot: 'ancient-stone-right',
  },
  {
    id: 'potion',
    label: 'Potion',
    modelUrl: publicAssetUrl('Prop - Potion.glb'),
    initialHotspot: 'wanted-left',
  },
  {
    id: 'spider',
    label: 'Spider',
    modelUrl: publicAssetUrl('Prop - Spider.glb'),
    initialHotspot: 'wanted-top',
  },
  {
    id: 'staff',
    label: 'Staff',
    modelUrl: publicAssetUrl('Prop - Staff.glb'),
    initialHotspot: 'ancient-stone-left',
  },
  {
    id: 'ears',
    label: 'Ears',
    modelUrl: publicAssetUrl('Prop - Ears.glb'),
    initialHotspot: 'ancient-stone-top',
  },
  {
    id: 'rogue',
    label: 'Rogue',
    modelUrl: publicAssetUrl('Prop - Rogue.glb'),
    initialHotspot: 'wanted-bottom',
  },
]

export const slides: Slide[] = [
  { kind: 'video', src: appSlide1Webm, fallbackSrc: appSlide1Mp4, alt: 'How the Artifex app works, step one' },
  { kind: 'video', src: appSlide2Webm, fallbackSrc: appSlide2Mp4, alt: 'How the Artifex app works, step two' },
  { kind: 'image', src: appSlide3, alt: 'How the Artifex app works, step three' },
  { kind: 'image', src: appSlide4, alt: 'Arca Studio app preview, pink placeholder' },
]

export const faqs: FaqItem[] = [
  {
    id: 'what-is-it',
    question: 'What is the Artifact Mini?',
    answer: 'The Artifact Mini is a digital tabletop miniature with a vivid screen, made to bring animated characters and campaign moments to the table.',
  },
  {
    id: 'comparison',
    question: 'How does the Artifact Mini compare to other digital miniatures?',
    answer: 'The Artifact Mini is a one-of-a-kind, high-quality digital miniature that supports animation and is thoughtfully designed to fit the scenery of your campaign.',
  },
  {
    id: 'customize',
    question: 'Can I customize my Artifact Mini?',
    answer: 'Yes. Magnetic hotspots let you rearrange compatible props, while different casings and character artwork help each miniature feel unique.',
  },
  {
    id: 'included',
    question: 'What comes in the box?',
    answer: 'Each Artifact Mini includes the LCD display, magnetic charging stand, and a USB-C to USB-A cable.',
  },
]
