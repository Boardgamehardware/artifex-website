import { useMemo } from 'react'
import { useDocumentVisible, useMediaQuery, useVisualTestMode } from '../../hooks'
import profilePicture from '../../assets/images/Placeholder Profile Picture.png'
import './ReviewsSection.backup.css'

const reviews = Array.from({ length: 6 }, () => ({
  name: 'Name',
  role: 'Info',
  quote: '“Wow, so good!”',
}))

/**
 * Archived verbatim from the live landing page. This module is intentionally
 * not imported, so the Reviews section and its assets stay out of the bundle.
 */
export default function ReviewsSection() {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const visible = useDocumentVisible()
  const visualTest = useVisualTestMode()
  const cards = useMemo(() => [...reviews, ...reviews], [])

  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <p className="eyebrow">Reviews</p>
        <h2 id="reviews-title">But that’s just us.<br />What do Players have to say?</h2>
      </div>
      <div className="reviews-viewport" aria-label="Player reviews">
        <div className={`review-track ${reducedMotion || !visible || visualTest ? 'is-paused' : ''}`}>
          {cards.map((review, index) => (
            <article className="review-card" key={`${review.name}-${index}`} aria-hidden={index >= reviews.length}>
              <img src={profilePicture} alt="" />
              <h3>{review.name}</h3>
              <p className="review-role">{review.role}</p>
              <blockquote>{review.quote}</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
