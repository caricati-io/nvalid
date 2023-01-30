import { describe, expect, test } from '@jest/globals'

import isMax from '../lib/is-max'

describe('validates max', () => {
  test('should checks valid max method', () => {
    expect(isMax('testing', 7)).toBeTruthy()
    expect(isMax(6, 5)).toBeTruthy()
  })

  test('should checks invalid max method', () => {
    expect(isMax('555', 4)).toBeFalsy()
    expect(isMax(100, 5000)).toBeFalsy()
  })
})
