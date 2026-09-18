import { type ComputedRef, ref, computed, watchEffect, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const THEME_KEY = 'lig4-theme'

const theme = ref<Theme>('light')

export function useTheme(): {
  theme: ComputedRef<Theme>
  isDark: ComputedRef<boolean>
  setTheme: (newTheme: Theme) => void
  toggleTheme: () => void
} {
  const isDark = computed(() => theme.value === 'dark')

  function setTheme(newTheme: Theme): void {
    theme.value = newTheme
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  function toggleTheme(): void {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  function getSystemPreference(): Theme {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  function initializeTheme(): void {
    const savedTheme = localStorage.getItem(THEME_KEY) as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(getSystemPreference())
    }
  }

  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
  })

  onMounted(() => {
    initializeTheme()
  })

  return {
    theme: computed(() => theme.value),
    isDark,
    setTheme,
    toggleTheme,
  }
}
