import { describe, expect, it } from 'vitest'
import { hotspotOccupant, initialPlacements, placeProp } from './configurator'

describe('configurator placement rules', () => {
  it('starts props on the approved hotspots', () => {
    expect(initialPlacements).toEqual({
      dragon: 'secret-academy-top',
      gauntlet: 'noble-palace-top',
      owl: 'ancient-stone-right',
      potion: 'wanted-left',
      spider: 'wanted-top',
      staff: 'ancient-stone-left',
      ears: 'ancient-stone-top',
      rogue: 'wanted-bottom',
    })
  })

  it('moves a prop to an open hotspot', () => {
    const next = placeProp(initialPlacements, 'dragon', 'ancient-stone-bottom')
    expect(next.dragon).toBe('ancient-stone-bottom')
    expect(hotspotOccupant(next, 'ancient-stone-bottom')).toBe('dragon')
  })

  it('exchanges props when a prop is dropped on an occupied hotspot', () => {
    const next = placeProp(initialPlacements, 'rogue', 'wanted-top')
    expect(next.rogue).toBe('wanted-top')
    expect(next.spider).toBe('wanted-bottom')
    expect(hotspotOccupant(next, 'wanted-top')).toBe('rogue')
    expect(hotspotOccupant(next, 'wanted-bottom')).toBe('spider')
  })
})
