import { useTheme } from '../composables/useTheme'

export function useThemeProvider(): Record<string, never> {
  useTheme()

  return {}
}
