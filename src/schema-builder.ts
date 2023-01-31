import ValidationException from './exception'

import isIp from './lib/is-ip'
import isEmail from './lib/is-email'
import isMatch from './lib/is-match'
import isString from './lib/is-string'
import isUsername from './lib/is-username'
import isPassword from './lib/is-password'
import isRequired from './lib/is-required'
import isMin from './lib/is-min'
import isMax from './lib/is-max'

export interface Nvalid {
  string(message?: string): Nvalid
  required(message?: string): Nvalid
  email(message?: string): Nvalid
  match(pattern: RegExp, message?: string): Nvalid
  ip(message?: string): Nvalid
  username(message?: string): Nvalid
  password(message?: string): Nvalid
  min(number: number, message?: string): Nvalid
  max(number: number, message?: string): Nvalid
}

function schemaBuilder(input: any): Nvalid {
  return new (function Collection() {
    this.libName = '@caricati/nvalid'
    this.string = (message?: string) => {
      if (!isString(input)) {
        throw new ValidationException(message || 'value is not a string')
      }
      return this
    }
    this.required = (message?: string) => {
      if (!isRequired(input)) {
        throw new ValidationException(message || 'value is required')
      }
      return this
    }
    this.email = (message?: string) => {
      if (!isEmail(input)) {
        throw new ValidationException(message || 'e-mail is invalid')
      }
      return this
    }
    this.match = (pattern: RegExp, message?: string) => {
      if (!isMatch(input, pattern)) {
        throw new ValidationException(message || 'invalid pattern')
      }
      return this
    }
    this.ip = (message?: string) => {
      if (!isIp(input)) {
        throw new ValidationException(message || 'ip is invalid')
      }
      return this
    }
    this.username = (message?: string) => {
      if (!isUsername(input)) {
        throw new ValidationException(message || 'username is invalid')
      }
      return this
    }
    this.password = (message?: string) => {
      if (!isPassword(input)) {
        throw new ValidationException(message || 'password is invalid')
      }
      return this
    }
    this.min = (number: number, message?: string) => {
      if (isMin(input, number)) {
        throw new ValidationException(message || 'minimum exceeded')
      }
      return this
    }
    this.max = (number: number, message?: string) => {
      if (isMax(input, number)) {
        throw new ValidationException(message || 'maximum exceeded')
      }
      return this
    }
  })()
}

export default schemaBuilder
