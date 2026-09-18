import { createI18n } from 'vue-i18n'
import { messages } from '@/locales'
import type { IMessageSchema } from '@/types/i18n'

export type { ILocale } from '@/types/i18n'

function getInitialLocale(): string {
  if (typeof window === 'undefined') {
    return 'pt-BR'
  }
  try {
    const saved = localStorage.getItem('lig4:locale')
    if (saved === 'pt-BR' || saved === 'en-US') {
      return saved
    }
    const browser = navigator.language ?? 'pt-BR'
    if (browser.startsWith('en')) {
      return 'en-US'
    }
  } catch {
    return 'pt-BR'
  }
  return 'pt-BR'
}

const initialLocale = getInitialLocale()

const i18n = createI18n<[IMessageSchema], 'pt-BR' | 'en-US'>({
  legacy: false,
  globalInjection: true,
  locale: initialLocale,
  fallbackLocale: 'en-US',
  messages,
})

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', initialLocale)
}

export default i18n
