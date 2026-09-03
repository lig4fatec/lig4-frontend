import type { Ref } from 'vue'

export interface IUseGameReturn {
  isRunning: Ref<boolean>
  start: () => void
  stop: () => void
  reset: () => void
  toggle: () => void
}
