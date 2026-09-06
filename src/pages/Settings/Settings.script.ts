import { ref } from 'vue'

export function useSettings(): {
  soundEnabled: import('vue').Ref<boolean>
  notificationsEnabled: import('vue').Ref<boolean>
  theme: import('vue').Ref<'dark' | 'light'>
  toggleSound: () => void
  toggleNotifications: () => void
  setTheme: (newTheme: 'dark' | 'light') => void
} {
  const soundEnabled = ref<boolean>(true)
  const notificationsEnabled = ref<boolean>(true)
  const theme = ref<'dark' | 'light'>('dark')

  function toggleSound(): void {
    soundEnabled.value = !soundEnabled.value
  }

  function toggleNotifications(): void {
    notificationsEnabled.value = !notificationsEnabled.value
  }

  function setTheme(newTheme: 'dark' | 'light'): void {
    theme.value = newTheme
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
