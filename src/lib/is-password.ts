export default function isPassword(input: string) {
  return input.length >= 8 && /[a-z]/i.test(input) && /\d/.test(input)
}
