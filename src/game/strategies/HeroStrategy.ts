import { IGameStrategy } from './IGameStrategy'
import type { IGameContext } from '@/types'

export class HeroStrategy implements IGameStrategy {
  execute(context: IGameContext): void {
    console.log(`HeroStrategy executed for player ${context.playerId} at (${context.column}, ${context.row})`)
  }
}
