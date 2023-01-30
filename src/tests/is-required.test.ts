import { describe, expect, test } from '@jest/globals'
import isRequired from '../lib/is-required'

describe('validates required', () => {
  test('should checks valid required', () => {
    expect(isRequired('1')).toBeTruthy()
    expect(isRequired('a')).toBeTruthy()
    expect(isRequired(1 as any)).toBeTruthy()
    expect(isRequired({} as any)).toBeTruthy()
    expect(isRequired(Date as any)).toBeTruthy()
    expect(isRequired(true as any)).toBeTruthy()
    expect(isRequired(false as any)).toBeTruthy()
    expect(isRequired((() => {}) as any)).toBeTruthy()
  })

  test('should checks invalid required', () => {
    expect(isRequired('')).toBeFalsy()
    expect(isRequired(' ')).toBeFalsy()
    expect(isRequired(NaN as any)).toBeFalsy()
    expect(isRequired(null as any)).toBeFalsy()
    expect(isRequired(undefined as any)).toBeFalsy()
  })
})
