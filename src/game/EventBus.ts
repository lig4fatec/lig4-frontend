import type { IEventMap, IEventHandler } from '@/types'

class TypedEventBus {
  private handlers = new Map<keyof IEventMap, Array<IEventHandler<unknown[]>>>()

  on<K extends keyof IEventMap>(event: K, listener: IEventHandler<IEventMap[K]>): void {
    if (!this.handlers.has(event)) {
      this.handlers.set(event, [])
    }
    this.handlers.get(event)!.push(listener as IEventHandler<unknown[]>)
  }

  emit<K extends keyof IEventMap>(event: K, ...args: IEventMap[K]): void {
    const handlers = this.handlers.get(event)
    if (handlers) {
      handlers.forEach((handler) => handler(...args))
    }
  }

  off<K extends keyof IEventMap>(event: K, listener: IEventHandler<IEventMap[K]>): void {
    const handlers = this.handlers.get(event)
    if (handlers) {
      const idx = handlers.indexOf(listener as IEventHandler<unknown[]>)
      if (idx !== -1) handlers.splice(idx, 1)
    }
  }
}

export const typedEventBus = new TypedEventBus()
