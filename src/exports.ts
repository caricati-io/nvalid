import isMatch from './lib/is-match'
import isString from './lib/is-string'
import isPassword from './lib/is-password'
import isRequired from './lib/is-required'
import isIp, { regex as regexIp } from './lib/is-ip'
import isEmail, { regex as regexEmail } from './lib/is-email'
import isUsername, { regex as regexUsername } from './lib/is-username'

import validator from './validator'
import isMin from './lib/is-min'
import isMax from './lib/is-max'

export {
  isEmail,
  isIp,
  isMin,
  isMax,
  isMatch,
  isPassword,
  isRequired,
  isString,
  isUsername,
  regexEmail,
  regexIp,
  regexUsername,
}

export default validator
