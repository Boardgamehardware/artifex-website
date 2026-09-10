import { useEffect, useRef, useState, type ReactNode } from 'react'
import './App.css'
import { discordInviteUrl, faqs, slides } from './content'
import { useDocumentVisible, useMediaQuery, useVisualTestMode } from './hooks'
import type { Slide } from './types'

import logo from './assets/images/LOGO - vertical.svg'
import artifactMiniVideo from './assets/images/artifact mini.webm'
import tabletopImage1 from './assets/images/Tabletop Img 1.webp'
import tabletopImage2 from './assets/images/Tabletop Img 2.webp'
import animationBackgroundWebm from './assets/images/Animate Your Heros.webm'
import customizeFeatureWebm from './assets/images/Magnetic Attachment Customizability Video.webm'
import customizeFeatureMp4 from './assets/images/Magnetic Attachment Customizability Video.mp4'
import voteStaff from './assets/images/vote/staff-1200x1200.webp'
import voteOwl from './assets/images/vote/owl-1200x1200.webp'
import voteNameBoard from './assets/images/vote/name-board-1200x1200.webp'
import voteConcentration from './assets/images/vote/concentration-1200x1200.webp'
import voteHeroic from './assets/images/vote/heroic-1200x1200.webp'
import voteSpider from './assets/images/vote/spider-1200x1200.webp'
import voteCharmed from './assets/images/vote/charmed-1200x1200.webp'
import voteFighterBadge from './assets/images/vote/fighter-badge-1200x1200.webp'
import voteSickle from './assets/images/vote/sickle-1200x1200.webp'
import voteRogueBadge from './assets/images/vote/rogue-badge-1200x1200.webp'
import voteBurning from './assets/images/vote/burning-1200x1200.webp'
import voteDragon from './assets/images/vote/dragon-1200x1200.webp'
import voteScull from './assets/images/vote/scull-1200x1200.webp'
import specsDrawing from './assets/images/Specs - Decorative Side Drawing.webp'
import ctaBackground from './assets/images/BG image - Footer.webp'
import nextImageIcon from './assets/Icons/Next Image Button.png'
import downArrow from './assets/Icons/Downward arrow.png'
import upArrow from './assets/Icons/Upward arrow.png'
import discordIcon from './assets/Icons/Discord icon.png'
import emailIcon from './assets/Icons/Email icon.png'
import facebookIcon from './assets/Icons/Facebook icon.png'
import instagramIcon from './assets/Icons/Instagram icon.png'
import batteryIcon from './assets/Icons/specs - battery icon.png'
import wirelessIcon from './assets/Icons/specs - wireless icon.png'
import chargingIcon from './assets/Icons/specs - charging icon.png'
import includedIcon from './assets/Icons/specs - included icon.png'
import costIcon from './assets/Icons/specs - cost icon.png'
import displayIcon from './assets/Icons/specs - display icon.png'
import sizeIcon from './assets/Icons/specs - size icon.png'
import casingIcon from './assets/Icons/specs - casing icon.png'

const specs = [
  { title: 'Battery', text: <>2 day standby clock<br />5 hours active</>, icon: batteryIcon },
  { title: 'Wireless', text: <>Bluetooth and Wi-Fi<br />connectivity</>, icon: wirelessIcon },
  { title: 'Charging', text: <>Effortless magnetic<br />charging port</>, icon: chargingIcon },
  { title: 'Included', text: <>Artifact Mini LCD Display<br />Magnetic Charging Stand<br />USB-C to A Cable</>, icon: includedIcon },
  { title: 'Cost', text: <>$59<br />Plus Taxes &amp; Shipping</>, icon: costIcon },
  { title: 'Display', text: <>4K Liquid Crystal full-color<br />screen, animation-supported</>, icon: displayIcon },
  { title: 'Size', text: <>50 x 30 x 15 mm</>, icon: sizeIcon },
  { title: 'Casing Options', text: <>Stone, Academy, Wanted, Palace</>, icon: casingIcon },
]

type CustomizationItem = {
  title: string
  image?: string
}

const customizationItems: CustomizationItem[] = [
  { title: 'Weapons', image: voteStaff },
  { title: 'Animal familiars', image: voteOwl },
  { title: 'Erasable nameplates', image: voteNameBoard },
  { title: 'Concentration and Death Saves', image: voteConcentration },
  { title: 'Heroic Inspiration', image: voteHeroic },
  { title: 'Light-up accessories', image: voteSpider },
  { title: 'Animal ears', image: undefined },
  { title: 'Condition markers', image: voteCharmed },
  { title: 'Class markers', image: voteFighterBadge },
  { title: 'Faction markers', image: undefined },
  // Preserve the temporary titles while assigning the remaining final artwork.
  { title: 'Accessory idea 11', image: voteSickle },
  { title: 'Accessory idea 12', image: voteRogueBadge },
  { title: 'Accessory idea 13', image: voteBurning },
  { title: 'Accessory idea 14', image: voteDragon },
  { title: 'Accessory idea 15', image: voteScull },
]

function CustomizationCard({ item, liked, onToggleLike }: { item: CustomizationItem; liked: boolean; onToggleLike: () => void }) {
  return (
    <article className="customization-card">
      <div className="customization-card-media">
        {item.image && <img src={item.image} alt="" />}
      </div>
      <div className="customization-card-footer">
        <p>{item.title}</p>
        <button
          className="customization-like"
          type="button"
          aria-label={`${liked ? 'Unlike' : 'Like'} ${item.title}`}
          aria-pressed={liked}
          onClick={onToggleLike}
        >
          <span className="customization-like-heart" aria-hidden="true">♥</span>
          <span className="customization-like-count" aria-live="polite">{liked ? 1 : 0}</span>
        </button>
      </div>
    </article>
  )
}

function InertAction({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inert-action ${className}`} role="link" aria-disabled="true">
      {children}
    </span>
  )
}

function SocialLinks({ dark = false }: { dark?: boolean }) {
  const links = [
    { label: 'Discord', icon: discordIcon },
    { label: 'Email', icon: emailIcon },
    { label: 'Instagram', icon: instagramIcon },
    { label: 'Facebook', icon: facebookIcon },
  ]
  return (
    <div className={`social-links ${dark ? 'social-links--dark' : ''}`} aria-label="Social links coming soon">
      {links.map((link) => (
        <span key={link.label} role="link" aria-label={`${link.label} link unavailable`} aria-disabled="true">
          <img src={link.icon} alt="" />
        </span>
      ))}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner">
        <img className="brand-logo" src={logo} alt="Artifex Tinkers" />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span /> <span /> <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="mobile-menu" className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Main navigation">
          <InertAction>Artifact Mini</InertAction>
          <InertAction>About Us</InertAction>
          <InertAction className="nav-cta">Preorder!</InertAction>
        </nav>
      </div>
    </header>
  )
}

function SplashSection() {
  const mobile = useMediaQuery('(max-width: 767px)')
  const heroVideo = (
    <div className="splash-product-media">
      <video
        className="splash-product-video"
        src={artifactMiniVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Artifact Mini product video"
      />
    </div>
  )

  return (
    <section className="splash-section" aria-labelledby="splash-title">
      <div className="section-container splash-layout">
        <div className="splash-copy">
          <p className="eyebrow">Where Tabletop Meets Technology</p>
          <h1 id="splash-title">Artifact Mini</h1>
          <p>
            Display your TTRPG character in motion on the Artifact's double-sided screens; with magnetic physical accessories and a design made for tabletop play.
          </p>
          {mobile && heroVideo}
          <InertAction className="primary-button">Preorder Now!</InertAction>
        </div>
        {!mobile && heroVideo}
      </div>
      <button
        className="scroll-cue"
        type="button"
        aria-label="Scroll to key features"
        onClick={() => document.getElementById('what-is-it')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
      >
        <img src={downArrow} alt="" />
      </button>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section
      id="what-is-it"
      className="art-section feature-section what-section animation-section"
      aria-labelledby="what-title animation-title"
    >
      <div className="what-copy">
        <h2 id="what-title">A Miniature That’s Just Better.</h2>
      </div>
      <div className="feature-media-grid">
        <div className="feature-column">
          <img className="feature-media" src={tabletopImage1} alt="Two Artifact Mini devices on a fantasy game board" />
          <div className="feature-caption">
            <h3 className="feature-subtitle">Built For The Tabletop</h3>
            <p>The foot of the Artifact Mini fits a standard 1-inch battlemap grid and its double-sided design keeps your character visible around the table.</p>
          </div>
        </div>
        <div className="feature-column">
          <img className="feature-media" src={tabletopImage2} alt="Artifact Mini devices arranged on a tabletop" />
          <div className="animation-copy feature-caption">
            <h3 id="animation-title" className="feature-subtitle">Four Fantastical Designs</h3>
            <p>With four outer designs inspired by different character backgrounds and map settings, the Artifact is designed to meld seamlessly into the tabletop. </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function AnimationFeatureSection() {
  return (
    <section className="animation-feature-section" aria-labelledby="animation-feature-title">
      <div className="animation-feature-copy">
        <h2 id="animation-feature-title">Animate Your Heros!</h2>
        <p>See your characters animated beautifully on twin high-resolution LCD screens, adding movement and atmosphere to your campaign.</p>
      </div>
      <div className="animation-feature-media">
        <video
          className="animation-feature-video"
          src={animationBackgroundWebm}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

function CustomizeFeatureVideo({ label }: { label: string }) {
  return (
    <video
      className="background-video customize-feature-media"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={customizeFeatureWebm} type="video/webm" />
      <source src={customizeFeatureMp4} type="video/mp4" />
    </video>
  )
}

function CustomizeSection() {
  const [likedItems, setLikedItems] = useState<Set<string>>(() => new Set())

  const toggleLike = (item: string) => {
    setLikedItems((current) => {
      const next = new Set(current)
      if (next.has(item)) next.delete(item)
      else next.add(item)
      return next
    })
  }

  return (
    <section className="customize-section" aria-labelledby="customize-title">
      <div className="section-container customize-feature-layout customize-feature-intro">
        <div className="customize-feature-copy customize-intro-copy">
          <h2 id="customize-title">Totally Customizable.</h2>
          <p>The Artifact Mini uses magnetic connection points to snap our specially-designed modular accessories to its top, front, and sides, allowing your character to be truly represented in 3D space.</p>
        </div>
        <CustomizeFeatureVideo label="Magnetic accessories attaching to an Artifact Mini" />
      </div>

      <div className="section-container accessory-voting-intro">
        <h3 className="feature-subtitle">Vote for Your Favorites</h3>
        <p>Which accessories would you love to see us make next? Your votes will help us decide what to prioritize first.</p>
      </div>

      <div
        className="section-container customization-card-grid"
        role="region"
        aria-label="Accessory voting cards"
      >
        {[customizationItems.slice(0, 8), customizationItems.slice(8)].map((row, rowIndex) => (
          <div
            className="customization-card-row"
            role="region"
            aria-label={`Accessory voting ${rowIndex === 0 ? 'top' : 'bottom'} row`}
            tabIndex={0}
            key={rowIndex}
          >
            {row.map((item) => (
              <CustomizationCard item={item} liked={likedItems.has(item.title)} onToggleLike={() => toggleLike(item.title)} key={item.title} />
            ))}
          </div>
        ))}
      </div>
      <DiscordCommunitySection />
    </section>
  )
}

function DiscordCommunitySection() {
  return (
    <section className="section-container discord-community" aria-labelledby="discord-community-title">
      <h3 id="discord-community-title" className="feature-subtitle">Have Another Idea?</h3>
      <p>Don't see the accessory you want? Join our Discord and tell us what you'd love to add to your Artifact Mini.</p>
      <a className="primary-button discord-community-button" href={discordInviteUrl || undefined} aria-disabled={!discordInviteUrl || undefined}>
        Discuss on Discord
      </a>
    </section>
  )
}

function SlideshowMedia({ slide, active, shouldPlay }: { slide: Slide; active: boolean; shouldPlay: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (!shouldPlay) {
      video.pause()
      return
    }

    const playAttempt = video.play()
    playAttempt?.catch(() => undefined)
  }, [shouldPlay])

  if (slide.kind === 'image') {
    return (
      <img
        className={`slide-media ${active ? 'is-active' : ''}`}
        src={slide.src}
        alt={active ? slide.alt : ''}
        loading="eager"
        decoding="async"
      />
    )
  }

  return (
    <video
      ref={videoRef}
      className={`slide-media ${active ? 'is-active' : ''}`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={active ? slide.alt : undefined}
      aria-hidden={!active}
    >
      <source src={slide.src} type="video/webm" />
      {slide.fallbackSrc && <source src={slide.fallbackSrc} type="video/mp4" />}
    </video>
  )
}

function AppSlideshow() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const visible = useDocumentVisible()
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const visualTest = useVisualTestMode()

  useEffect(() => {
    if (paused || !visible || reducedMotion || visualTest) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 3500)
    return () => window.clearInterval(timer)
  }, [paused, reducedMotion, visible, visualTest])

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="slide-frame" aria-live="polite">
        {slides.map((slide, index) => (
          <SlideshowMedia
            key={slide.src}
            slide={slide}
            active={index === active}
            shouldPlay={index === active && visible && !reducedMotion && !visualTest}
          />
        ))}
        <button type="button" className="next-slide" onClick={() => setActive((current) => (current + 1) % slides.length)} aria-label="Next image">
          <img src={nextImageIcon} alt="" />
        </button>
      </div>
      <div className="slide-dots" aria-label="Choose a slide">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" className={index === active ? 'is-active' : ''} aria-current={index === active} aria-label={`Show slide ${index + 1}`} onClick={() => setActive(index)} />
        ))}
      </div>
    </div>
  )
}

function AppSection() {
  return (
    <section className="app-section" aria-labelledby="app-title">
      <div className="section-container app-layout">
        <div className="app-copy">
          <h2 id="app-title">How Does It Work?</h2>
          <p>Simply upload your selected artwork onto our companion app, send it to a connected device, and optionally customize your device with our magnetic attachments.</p>
        </div>
        <AppSlideshow />
      </div>
    </section>
  )
}

function SpecsSection() {
  return (
    <section className="specs-section" aria-labelledby="specs-title">
      <div className="section-container specs-layout">
        <div className="specs-copy">
          <h2 id="specs-title">The Specs.</h2>
          <div className="specs-grid">
            {specs.map((spec) => (
              <div className="spec-item" key={spec.title}>
                <img src={spec.icon} alt="" loading="lazy" />
                <div><h3>{spec.title}</h3><p>{spec.text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="specs-drawing-frame">
          <img className="specs-drawing" src={specsDrawing} alt="Technical line drawing of the Artifact Mini" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  const [open, setOpen] = useState<Set<string>>(() => new Set())
  return (
    <section className="faq-section" aria-labelledby="faq-title">
      <div className="faq-inner">
        <h2 id="faq-title">Frequently Asked Questions!</h2>
        <div className="faq-list">
          {faqs.map((faq) => {
            const expanded = open.has(faq.id)
            return (
              <div className={`faq-item ${expanded ? 'is-open' : ''}`} key={faq.id}>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={`${faq.id}-answer`}
                  onClick={() => setOpen((current) => {
                    const next = new Set(current)
                    if (next.has(faq.id)) next.delete(faq.id)
                    else next.add(faq.id)
                    return next
                  })}
                >
                  <span>{faq.question}</span>
                  <img src={expanded ? upArrow : downArrow} alt="" />
                </button>
                <div id={`${faq.id}-answer`} className="faq-answer" aria-hidden={!expanded}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="more-questions">
          <h2>Have More Questions?</h2>
          <p>Contact us directly on <strong>Discord, Instagram, Facebook,</strong> or <strong>email@gmail.com</strong></p>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <img src={ctaBackground} className="cta-art" alt="Four Artifact Mini designs arranged across a fantasy tabletop" loading="lazy" />
      <div className="section-container cta-copy">
        <h2 id="cta-title">Now on Kickstarter.</h2>
        <p>Want to see our project come to life? Back for just $5 with exclusive rewards.</p>
        <InertAction className="cta-button">Preorder Now!</InertAction>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-layout">
        <div className="footer-brand">
          <img src={logo} alt="Artifex Tinkers" />
          <SocialLinks />
        </div>
        <div className="footer-links">
          <div><InertAction>Arca 1</InertAction><InertAction>Arca 2</InertAction><InertAction>Arca Studio</InertAction></div>
          <div><InertAction>Back on Kickstarter</InertAction><InertAction>Mailing List</InertAction><InertAction>About Us</InertAction></div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <SplashSection />
        <FeaturesSection />
        <AnimationFeatureSection />
        <div className="customize-app-background">
          <CustomizeSection />
          <AppSection />
        </div>
        <SpecsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}

export default App
