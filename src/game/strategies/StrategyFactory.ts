import { IGameStrategy } from './IGameStrategy'
import { HeroStrategy } from './HeroStrategy'
import { MageStrategy } from './MageStrategy'

export class StrategyFactory {
  static createStrategy(type: string): IGameStrategy {
    switch (type) {
      case 'hero':
        return new HeroStrategy()
      case 'mage':
        return new MageStrategy()
      default:
        throw new Error(`Unknown strategy type: ${type}`)
    }
  }
}