import { computed } from 'vue'
import i18n from '@/lib/i18n'
import type { ILocale } from '@/types/i18n'

const LOCALE_KEY = 'lig4:locale'

export const availableLocales: ILocale[] = ['pt-BR', 'en-US']

export function useLocale(): {
  locale: import('vue').ComputedRef<ILocale>
  setLocale: (newLocale: ILocale) => void
  toggleLocale: () => void
} {
  const locale = computed<ILocale>(() => {
    const current = i18n.global.locale as unknown as string | { value: string }
    return (typeof current === 'string' ? current : current.value) as ILocale
  })

  function setLocale(newLocale: ILocale): void {
    const loc = i18n.global.locale as unknown as { value: string }
    if (typeof loc === 'string') {
      ;(i18n.global.locale as unknown as string) = newLocale
    } else {
      loc.value = newLocale
    }
    try {
      localStorage.setItem(LOCALE_KEY, newLocale)
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', newLocale)
    }
  }

  function toggleLocale(): void {
    setLocale(locale.value === 'pt-BR' ? 'en-US' : 'pt-BR')
  }

  return {
    locale,
    setLocale,
    toggleLocale,
  }
}
