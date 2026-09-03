import type { ICharacter } from '@/types'

export function createCharacter(overrides: Partial<ICharacter>): ICharacter {
  return {
    id: crypto.randomUUID(),
    name: 'Hero',
    level: 1,
    hp: 100,
    mp: 50,
    attack: 10,
    defense: 5,
    skills: [],
    ...overrides,
  }
}
