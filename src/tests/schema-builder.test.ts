import { describe, expect, test } from '@jest/globals'

import validation from '../schema-builder'

const libName = '@caricati/nvalid'

describe('validation module', () => {
  test('should validates e-mail', () => {
    expect(() => validation('testing').email()).toThrow('e-mail is invalid')
    expect(validation('user@test.com').email()).toMatchObject({ libName })
  })

  test('should validates IP', () => {
    expect(() => validation('132.123').ip()).toThrow('ip is invalid')
    expect(validation('127.0.0.1').ip()).toMatchObject({ libName })
  })

  test('should validates password', () => {
    expect(() => validation('123').password()).toThrow('password is invalid')
    expect(validation('132qwe123').password()).toMatchObject({ libName })
  })

  test('should validates username', () => {
    expect(() => validation('123').username()).toThrow('username is invalid')
    expect(validation('Dracula').username()).toMatchObject({ libName })
  })

  test('should validates required', () => {
    expect(() => validation('').required()).toThrow('value is required')
    expect(validation('Hi!').required()).toMatchObject({ libName })
  })

  test('should validates required', () => {
    expect(() => validation('testing').match(/teste/)).toThrow('invalid pattern')
    expect(validation('Hello').match(/llo/)).toMatchObject({ libName })
  })

  test('should validates min', () => {
    expect(() => validation('hello').min(10)).toThrow('minimum exceeded')
    expect(validation(50).min(10)).toMatchObject({ libName })
  })

  test('should validates max', () => {
    expect(() => validation('testing').max(5)).toThrow('maximum exceeded')
    expect(validation(5).max(6)).toMatchObject({ libName })
  })

  test('should validates string', () => {
    expect(() => validation(false).string()).toThrow('value is not a string')
    expect(validation('').string()).toMatchObject({ libName })
  })
})
