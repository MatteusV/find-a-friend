export function FormatNumberPhone(phone: string) {
  const phoneFormat = phone.replace(/[^+\d]+/g, '')
  return phoneFormat
}
