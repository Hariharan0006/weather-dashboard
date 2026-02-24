import { describe, it, expect } from 'vitest'
import { formatDate } from '../utils/formatDate'

describe('formatDate', () => {
  it('formats ISO date correctly', () => {
    const result = formatDate('2026-02-03')
    expect(result).toBe(new Date('2026-02-03').toLocaleDateString())
  })
})