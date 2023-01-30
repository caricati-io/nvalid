import ValidationException from '../exception/validation'

export default function isMax(input: any, number: number) {
  if (typeof input === 'string') {
    return input.length >= number
  }
  if (typeof input === 'number') {
    return input >= number
  }
  if (input instanceof Date) {
    return input.getTime() >= number
  }
  throw new ValidationException(`The type "${typeof input}" is not valid.`)
}
