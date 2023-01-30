import { describe, expect, test } from '@jest/globals'

import isPassword from '../lib/is-password'

describe('validates password', () => {
  test('should checks valid password pattern', () => {
    expect(isPassword('abc123AB')).toBeTruthy()
    expect(isPassword('1234567a')).toBeTruthy()
    expect(isPassword('qwe123as')).toBeTruthy()
    expect(isPassword('Abc!@#12')).toBeTruthy()
    expect(isPassword('AAABBBCCCDDD1')).toBeTruthy()
    expect(isPassword('aaabbbcccddd1')).toBeTruthy()
    expect(isPassword('0000000a')).toBeTruthy()
  })

  test('should checks invalid password pattern', () => {
    expect(isPassword('a')).toBeFalsy()
    expect(isPassword('ab')).toBeFalsy()
    expect(isPassword('abc')).toBeFalsy()
    expect(isPassword('abc123')).toBeFalsy()
    expect(isPassword('abc1234')).toBeFalsy()
    expect(isPassword('12345678')).toBeFalsy()
    expect(isPassword('00000000')).toBeFalsy()
    expect(isPassword('aaaaaaaa')).toBeFalsy()
    expect(isPassword('12345678910')).toBeFalsy()
    expect(isPassword('AAABBBCCCDDD')).toBeFalsy()
  })
})
