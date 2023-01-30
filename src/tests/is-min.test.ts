import { describe, expect, test } from '@jest/globals'

import isMin from '../lib/is-min'

describe('validates min', () => {
  test('should checks valid min method', () => {
    expect(isMin('hi', 10)).toBeTruthy()
    expect(isMin(1000, 1001)).toBeTruthy()
    expect(isMin('hi', 2)).toBeTruthy()
    expect(isMin(6, 6)).toBeTruthy()
  })

  test('should checks invalid min method', () => {
    expect(isMin('hi', 1)).toBeFalsy()
    expect(isMin('testing', 6)).toBeFalsy()
    expect(isMin(6, 5)).toBeFalsy()
  })
})
