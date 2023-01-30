import { describe, expect, test } from '@jest/globals'

import isMin from '../lib/is-min'

describe('validates min', () => {
  test('should checks valid min method', () => {
    expect(isMin('hi', 10)).toBeTruthy()
    expect(isMin(1000, 1001)).toBeTruthy()
    expect(isMin('hi', 2)).toBeTruthy()
    expect(isMin(6, 6)).toBeTruthy()
    expect(
      isMin(new Date(2022, 11, 11), new Date(2022, 11, 12).getTime())
    ).toBeTruthy()
  })

  test('should checks invalid min method', () => {
    expect(isMin('hi', 1)).toBeFalsy()
    expect(isMin('testing', 6)).toBeFalsy()
    expect(isMin(6, 5)).toBeFalsy()
    expect(
      isMin(new Date(2023, 0, 1), new Date(2022, 11, 12).getTime())
    ).toBeFalsy()
    expect(
      isMin(
        new Date(2022, 4, 10, 5, 8, 10),
        new Date(2022, 4, 10, 5, 8, 9).getTime()
      )
    ).toBeFalsy()
  })

  test('should dispatchs an exception when the type is invalid', () => {
    expect.assertions(4)
    expect(() => isMin(false, 100)).toThrow('The type "boolean" is not valid.')
    expect(() => isMin(true, 100)).toThrow('The type "boolean" is not valid.')
    expect(() => isMin({}, 100)).toThrow('The type "object" is not valid.')
    expect(() => isMin(() => {}, 100)).toThrow(
      'The type "function" is not valid.'
    )
  })
})
