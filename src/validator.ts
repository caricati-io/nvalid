import ValidationException from './exception/validation'

import isIp from './lib/is-ip'
import isEmail from './lib/is-email'
import isMatch from './lib/is-match'
import isString from './lib/is-string'
import isUsername from './lib/is-username'
import isPassword from './lib/is-password'
import isRequired from './lib/is-required'
import isMin from './lib/is-min'
import isMax from './lib/is-max'

export default function validator(input: any) {
  const parent = {
    libName: '@caricati/validation',
    string(message?: string) {
      if (!isString(input)) {
        throw new ValidationException(message || 'value is not a string')
      }
      return parent
    },
    required(message?: string) {
      if (!isRequired(input)) {
        throw new ValidationException(message || 'value is required')
      }
      return parent
    },
    email(message?: string) {
      if (!isEmail(input)) {
        throw new ValidationException(message || 'e-mail is invalid')
      }
      return parent
    },
    match(pattern: RegExp, message?: string) {
      if (!isMatch(input, pattern)) {
        throw new ValidationException(message || 'invalid pattern')
      }
      return parent
    },
    ip(message?: string) {
      if (!isIp(input)) {
        throw new ValidationException(message || 'ip is invalid')
      }
      return parent
    },
    username(message?: string) {
      if (!isUsername(input)) {
        throw new ValidationException(message || 'username is invalid')
      }
      return parent
    },
    password(message?: string) {
      if (!isPassword(input)) {
        throw new ValidationException(message || 'password is invalid')
      }
      return parent
    },
    min(number: number, message?: string) {
      if (isMin(input, number)) {
        throw new ValidationException(message || 'minimum exceeded')
      }
      return parent
    },
    max(number: number, message?: string) {
      if (isMax(input, number)) {
        throw new ValidationException(message || 'maximum exceeded')
      }
      return parent
    },
  }

  return parent
}
