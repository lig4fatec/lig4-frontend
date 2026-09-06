import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import { typedEventBus } from '@/game/EventBus'
import { useGame } from './useGame'

vi.mock('@/game/EventBus', () => ({
  typedEventBus: {
    emit: vi.fn(),
    on: vi.fn(),
    off: vi.fn(),
  },
}))

function mountComposable(): { result: ReturnType<typeof useGame>; wrapper: ReturnType<typeof mount> } {
  let result: ReturnType<typeof useGame> | null = null

  const wrapper = mount({
    setup() {
      result = useGame()
      return {}
    },
    template: '<div />',
  })

  return { result: result!, wrapper }
}

describe('useGame', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('initializes with isRunning false', () => {
    const { result } = mountComposable()

    expect(result.isRunning.value).toBe(false)
  })

  it('start sets isRunning to true and emits game:start', () => {
    const { result } = mountComposable()

    result.start()

    expect(result.isRunning.value).toBe(true)
    expect(typedEventBus.emit).toHaveBeenCalledWith('game:start')
  })

  it('stop sets isRunning to false and emits game:stop', () => {
    const { result } = mountComposable()

    result.start()
    result.stop()

    expect(result.isRunning.value).toBe(false)
    expect(typedEventBus.emit).toHaveBeenCalledWith('game:stop')
  })

  it('reset sets isRunning to false, emits game:reset, and clears store', () => {
    const { result } = mountComposable()

    result.start()
    result.reset()

    expect(result.isRunning.value).toBe(false)
    expect(typedEventBus.emit).toHaveBeenCalledWith('game:reset')
  })

  it('toggle starts when stopped', () => {
    const { result } = mountComposable()

    result.toggle()

    expect(result.isRunning.value).toBe(true)
  })

  it('toggle stops when running', () => {
    const { result } = mountComposable()

    result.start()
    result.toggle()

    expect(result.isRunning.value).toBe(false)
  })

  it('emits game:mounted on mount', () => {
    mountComposable()

    expect(typedEventBus.emit).toHaveBeenCalledWith('game:mounted')
  })

  it('emits game:unmounted on unmount', () => {
    const { wrapper } = mountComposable()

    wrapper.unmount()

    expect(typedEventBus.emit).toHaveBeenCalledWith('game:unmounted')
  })
})
