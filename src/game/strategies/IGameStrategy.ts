import type { IGameContext } from '@/types'

export interface IGameStrategy {
  execute(context: IGameContext): void
}
