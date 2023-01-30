export default function isRequired(input: any) {
  if (typeof input === 'boolean') return true
  if (typeof input === 'number' && !Number.isNaN(input)) return true
  if (typeof input === 'string') return !!input.trim()
  return !!input
}
