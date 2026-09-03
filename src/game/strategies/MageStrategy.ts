import { IGameStrategy } from './IGameStrategy'
import type { IGameContext } from '@/types'

export class MageStrategy implements IGameStrategy {
  execute(context: IGameContext): void {
    console.log(`MageStrategy executed for player ${context.playerId} at (${context.column}, ${context.row})`)
  }
}
