import { MemberData } from '@/types/MemberTypes'

export function validateForm(data: MemberData): { 
  isValid: boolean
  errors: Partial<MemberData>
} {
  const errors: Partial<MemberData> = {}

  if (data.fullName.trim().length < 3) {
    errors.fullName = "Nama lengkap minimal 3 karakter"
  }

  const nipRegex = /^\d{8}\s\d{6}\s\d{1}\s\d{3}$/
  if (!nipRegex.test(data.nip)) {
    errors.nip = "Format NIP tidak sesuai"
  }

  if (data.upt.trim().length < 5) {
    errors.upt = "Unit Pelaksana Teknis minimal 5 karakter"
  }

  const whatsappRegex = /^62\d{9,12}$/
  if (!whatsappRegex.test(data.whatsappNumber)) {
    errors.whatsappNumber = "Nomor WhatsApp harus diawali 62 dan 9-12 digit"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}