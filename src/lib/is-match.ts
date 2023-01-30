export default function isMatch(input: string, pattern: RegExp | string) {
  if (pattern instanceof RegExp) {
    return pattern.test(input)
  }
  return input === pattern
}
