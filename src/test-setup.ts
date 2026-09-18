import { config } from '@vue/test-utils'
import i18n from '@/lib/i18n'

config.global.plugins = [i18n]

// Force pt-BR for unit tests to match existing expectations
const localeRef = i18n.global.locale as unknown as string | { value: string }
if (typeof localeRef === 'string') {
  ;(i18n.global.locale as unknown as string) = 'pt-BR'
} else {
  localeRef.value = 'pt-BR'
}
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', 'pt-BR')
}
try {
  localStorage.setItem('lig4:locale', 'pt-BR')
} catch {
  // ignore
}
