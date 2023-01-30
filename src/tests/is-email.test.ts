import { describe, expect, test } from '@jest/globals'
import isEmail from '../lib/is-email'

describe('validates e-mail', () => {
  test('should checks valid e-mail pattern', () => {
    expect(isEmail('thales@email')).toBeTruthy()
    expect(isEmail('thales@email.com')).toBeTruthy()
    expect(isEmail('thales@127.0.0.1')).toBeTruthy()
    expect(isEmail('u@127.0.0.1')).toBeTruthy()
    expect(isEmail('u@b')).toBeTruthy()
    expect(isEmail('.my_u#name@b')).toBeTruthy()
  })

  test('should checks invalid e-mail pattern', () => {
    expect(isEmail('')).toBeFalsy()
    expect(isEmail(' ')).toBeFalsy()
    expect(isEmail('!@u@b')).toBeFalsy()
    expect(isEmail('@myname')).toBeFalsy()
    expect(isEmail('@myname@')).toBeFalsy()
    expect(isEmail('myname@')).toBeFalsy()
    expect(isEmail('myname@"')).toBeFalsy()
    expect(isEmail('!@"')).toBeFalsy()
    expect(isEmail('"@...')).toBeFalsy()
    expect(isEmail('uname@...')).toBeFalsy()
    expect(isEmail('uname@!@#')).toBeFalsy()
    expect(isEmail('uname@172_123_44_11')).toBeFalsy()
    expect(isEmail('uname@127.0.0.1@')).toBeFalsy()
  })
})
