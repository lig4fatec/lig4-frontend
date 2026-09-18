import { ref } from 'vue'
import { useTheme } from '../../lib/composables/useTheme'

export function useSettings(): {
  soundEnabled: import('vue').Ref<boolean>
  notificationsEnabled: import('vue').Ref<boolean>
  theme: import('vue').ComputedRef<'dark' | 'light'>
  toggleSound: () => void
  toggleNotifications: () => void
  setTheme: (newTheme: 'dark' | 'light') => void
} {
  const soundEnabled = ref<boolean>(true)
  const notificationsEnabled = ref<boolean>(true)
  const { theme, setTheme: setThemeGlobal } = useTheme()

  function toggleSound(): void {
    soundEnabled.value = !soundEnabled.value
  }

  function toggleNotifications(): void {
    notificationsEnabled.value = !notificationsEnabled.value
  }

  function setTheme(newTheme: 'dark' | 'light'): void {
    setThemeGlobal(newTheme)
  }

  return {
    soundEnabled,
    notificationsEnabled,
    theme,
    toggleSound,
    toggleNotifications,
    setTheme,
  }
}
