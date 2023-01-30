export const regex = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$|^$/

export default function isIp(ip: string) {
  return regex.test(ip)
}
