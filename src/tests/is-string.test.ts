import { describe, expect, test } from '@jest/globals'
import isString from '../lib/is-string'

describe('validates string', () => {
  test('should checks valid string', () => {
    expect(isString('')).toBeTruthy()
    expect(isString('1')).toBeTruthy()
    expect(isString('a')).toBeTruthy()
  })

  test('should checks invalid string', () => {
    expect(isString(undefined as any)).toBeFalsy()
    expect(isString(null as any)).toBeFalsy()
    expect(isString(NaN as any)).toBeFalsy()
    expect(isString(false as any)).toBeFalsy()
    expect(isString(true as any)).toBeFalsy()
    expect(isString(1 as any)).toBeFalsy()
    expect(isString(Date as any)).toBeFalsy()
  })
})
