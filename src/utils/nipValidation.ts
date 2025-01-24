export function validateNIP(nip: string): boolean {
  const nipRegex = /^\d{8}\s\d{6}\s\d{1}\s\d{3}$/
  return nipRegex.test(nip)
}