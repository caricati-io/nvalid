import ValidationException from '../exception/validation'

type Input = Date | string

export default function isExpiredFromNow(input: Input) {
  if (typeof input !== 'string' || !((input as any) instanceof Date)) {
    throw new ValidationException('Invalid input type')
  }

  const date = typeof input === 'string' ? new Date(input) : input

  return date < new Date(Date.now())
}
