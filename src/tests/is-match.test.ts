import { describe, expect, test } from '@jest/globals'

import isMatch from '../lib/is-match'

describe('validates matchs', () => {
  test('should checks valid match function', () => {
    expect(isMatch('123', '123')).toBeTruthy()
    expect(isMatch('333', /\d{3}/)).toBeTruthy()
  })

  test('should checks invalid match function', () => {
    expect(isMatch('', '123')).toBeFalsy()
    expect(isMatch('3', /\d{3}/)).toBeFalsy()
  })
})
