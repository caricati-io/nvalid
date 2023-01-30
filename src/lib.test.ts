import { describe, expect, test } from '@jest/globals'

import validation from './validator'

const libName = '@caricati/validation'

describe('validation module', () => {
  test('should validates e-mail', () => {
    try {
      validation('testing').email()
    } catch (error) {
      expect('e-mail is invalid').toBe(error.message)
    }
    expect(validation('user@test.com').email()).toMatchObject({ libName })
  })

  test('should validates IP', () => {
    try {
      validation('132.123').ip()
    } catch (error) {
      expect('ip is invalid').toBe(error.message)
    }
    expect(validation('127.0.0.1').ip()).toMatchObject({ libName })
  })

  test('should validates password', () => {
    const validate = validation('123')
    try {
      validate.password()
    } catch (error) {
      expect('password is invalid').toBe(error.message)
    }
    expect(validation('132qwe123').password()).toMatchObject({ libName })
  })

  test('should validates username', () => {
    const validate = validation('123')
    try {
      validate.username()
    } catch (error) {
      expect('username is invalid').toBe(error.message)
    }
    expect(validation('Dracula').username()).toMatchObject({ libName })
  })

  test('should validates required', () => {
    const validate = validation('')
    try {
      validate.required()
    } catch (error) {
      expect('value is required').toBe(error.message)
    }
    expect(validation('Hi!').required()).toMatchObject({ libName })
  })

  test('should validates required', () => {
    const validate = validation('testing')
    try {
      validate.match(/teste/)
    } catch (error) {
      expect('invalid pattern').toBe(error.message)
    }
    expect(validation('Hello').match(/llo/)).toMatchObject({ libName })
  })

  test('should validates min', () => {
    try {
      validation('hello').min(10)
    } catch (error) {
      expect('minimum exceeded').toBe(error.message)
    }
    expect(validation(50).min(10)).toMatchObject({ libName })
  })

  test('should validates max', () => {
    try {
      validation('testing').max(5)
    } catch (error) {
      expect('maximum exceeded').toBe(error.message)
    }
    expect(validation(5).max(6)).toMatchObject({ libName })
  })
})
