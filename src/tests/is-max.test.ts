import { describe, expect, test } from '@jest/globals'

import isMax from '../lib/is-max'

describe('validates max', () => {
  test('should checks valid max method', () => {
    const now = new Date()
    expect(isMax('testing', 7)).toBeTruthy()
    expect(isMax(6, 5)).toBeTruthy()
    expect(isMax(now, now.getTime())).toBeTruthy()
    expect(
      isMax(new Date(2022, 10, 11), new Date(2022, 10, 10).getTime())
    ).toBeTruthy()
  })

  test('should checks invalid max method', () => {
    expect(isMax('555', 4)).toBeFalsy()
    expect(isMax(100, 5000)).toBeFalsy()
    expect(
      isMax(new Date(2010, 11, 12), new Date(2022, 11, 12).getTime())
    ).toBeFalsy()
    expect(
      isMax(new Date(2021, 11, 31), new Date(2022, 0, 1).getTime())
    ).toBeFalsy()
  })

  test('should dispatchs an exception when the type is invalid', () => {
    expect.assertions(4)
    expect(() => isMax(false, 100)).toThrow('The type "boolean" is not valid.')
    expect(() => isMax(true, 100)).toThrow('The type "boolean" is not valid.')
    expect(() => isMax({}, 100)).toThrow('The type "object" is not valid.')
    expect(() => isMax(() => {}, 100)).toThrow(
      'The type "function" is not valid.'
    )
  })
})
