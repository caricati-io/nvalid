export const regex = /^(?=.{4,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9._-]+(?<![_.-])$/

export default function isUsername(input: string) {
  return regex.test(input)
}
