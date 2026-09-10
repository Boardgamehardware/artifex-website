import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'

vi.mock('./components/Artifact3D', () => ({ SplashViewer: () => <div data-testid="splash-model" /> }))

describe('landing page interactions', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('starts with every FAQ closed and allows multiple answers to remain open', async () => {
    await act(async () => render(<App />))
    const first = screen.getByRole('button', { name: 'What is the Artifact Mini?' })
    const comparison = screen.getByRole('button', { name: /How does the Artifact Mini compare/i })

    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(comparison).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(first)
    fireEvent.click(comparison)
    expect(first).toHaveAttribute('aria-expanded', 'true')
    expect(comparison).toHaveAttribute('aria-expanded', 'true')
  })

  it('advances the slideshow every three and a half seconds and supports manual dots', async () => {
    vi.useFakeTimers()
    await act(async () => render(<App />))
    const slideOne = screen.getByRole('button', { name: 'Show slide 1' })
    const slideTwo = screen.getByRole('button', { name: 'Show slide 2' })

    expect(slideOne).toHaveAttribute('aria-current', 'true')
    act(() => vi.advanceTimersByTime(3500))
    expect(slideTwo).toHaveAttribute('aria-current', 'true')
    fireEvent.click(slideOne)
    expect(slideOne).toHaveAttribute('aria-current', 'true')
  })

  it('keeps unavailable destinations inert', async () => {
    await act(async () => render(<App />))
    const preorders = screen.getAllByText('Preorder Now!')
    expect(preorders.every((item) => item.getAttribute('aria-disabled') === 'true')).toBe(true)
  })

  it('toggles an independent simulated like count on customization cards', async () => {
    await act(async () => render(<App />))
    expect(screen.getAllByRole('button', { name: /^Like / })).toHaveLength(15)
    const like = screen.getByRole('button', { name: 'Like Weapons' })

    expect(like).toHaveAttribute('aria-pressed', 'false')
    expect(like).toHaveTextContent('0')
    fireEvent.click(like)
    expect(screen.getByRole('button', { name: 'Unlike Weapons' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Unlike Weapons' })).toHaveTextContent('1')
    fireEvent.click(screen.getByRole('button', { name: 'Like Animal familiars' }))
    expect(screen.getByRole('button', { name: 'Unlike Animal familiars' })).toHaveTextContent('1')
    expect(screen.getByRole('button', { name: 'Unlike Weapons' })).toHaveTextContent('1')
  })

  it('uses 13 distinct images and keeps both imageless cards votable', async () => {
    await act(async () => render(<App />))
    const grid = screen.getByRole('region', { name: 'Accessory voting cards' })
    const images = grid.querySelectorAll('img')
    expect(grid.querySelectorAll('.customization-card')).toHaveLength(15)
    const topRow = screen.getByRole('region', { name: 'Accessory voting top row' })
    const bottomRow = screen.getByRole('region', { name: 'Accessory voting bottom row' })
    expect(topRow.querySelectorAll('article')).toHaveLength(8)
    expect(bottomRow.querySelectorAll('article')).toHaveLength(7)
    expect(topRow.querySelector('article:last-child p')).toHaveTextContent('Condition markers')
    expect(bottomRow.querySelector('article:first-child p')).toHaveTextContent('Class markers')
    expect(images).toHaveLength(13)
    expect(new Set([...images].map((image) => image.getAttribute('src'))).size).toBe(13)
    for (const title of ['Animal ears', 'Faction markers']) {
      const button = screen.getByRole('button', { name: `Like ${title}` })
      expect(button.closest('article')!.querySelector('.customization-card-media')).toBeEmptyDOMElement()
      fireEvent.click(button)
      expect(screen.getByRole('button', { name: `Unlike ${title}` })).toHaveTextContent('1')
    }
  })
})
