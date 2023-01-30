import { describe, expect, test } from '@jest/globals'

import isIp from '../lib/is-ip'

describe('validates IP', () => {
  test('should checks valid IP pattern', () => {
    expect(isIp('127.0.0.1')).toBeTruthy()
    expect(isIp('8.8.8.8')).toBeTruthy()
    expect(isIp('0.0.0.0')).toBeTruthy()
    expect(isIp('01.01.01.01')).toBeTruthy()
    expect(isIp('255.255.255.255')).toBeTruthy()
    expect(isIp('192.255.0.15')).toBeTruthy()
  })

  test('should checks invalid IP pattern', () => {
    expect(isIp('a.b.c.d')).toBeFalsy()
    expect(isIp('_._._._')).toBeFalsy()
    expect(isIp('500.500.500.500')).toBeFalsy()
    expect(isIp('256.256.256.256')).toBeFalsy()
    expect(isIp('2555.2555.2555.2555')).toBeFalsy()
    expect(isIp('255-255-255-255')).toBeFalsy()
    expect(isIp('255_255_255_255')).toBeFalsy()
    expect(isIp('255255255255')).toBeFalsy()
  })
})
