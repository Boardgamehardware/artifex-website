import appSlide1Webm from './assets/images/How It Works Video 1.webm'
import appSlide1Mp4 from './assets/images/How It Works Video 1.mp4'
import appSlide2Webm from './assets/images/How It Works Video 3.webm'
import appSlide2Mp4 from './assets/images/How It Works Video 3.mp4'
import appSlide3 from './assets/images/How it works - 3.gif'
import appSlide4 from './assets/images/App - Placeholder Image 4.png'
import type { FaqItem, Slide } from './types'

export const publicAssetUrl = (filename: string) => `${import.meta.env.BASE_URL}${filename}`

export const artifactModelUrl = publicAssetUrl('Customize 3D Model - Wanted.glb')

// Set the community invite URL before enabling the Discord CTA.
export const discordInviteUrl = ''

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
