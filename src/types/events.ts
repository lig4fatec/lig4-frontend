export interface IEventMap {
  'game:start': []
  'game:stop': []
  'game:reset': []
  'game:mounted': []
  'game:unmounted': []
  'game:piece-placed': [{ column: number; row: number }]
}

export type IEventHandler<T extends unknown[]> = (...args: T) => void
