import { describe, it, expect } from 'vitest'
import { createCharacter } from './character'

describe('createCharacter', () => {
  it('creates a character with default values', () => {
    const character = createCharacter({})

    expect(character.id).toBeDefined()
    expect(typeof character.id).toBe('string')
    expect(character.name).toBe('Hero')
    expect(character.level).toBe(1)
    expect(character.hp).toBe(100)
    expect(character.mp).toBe(50)
    expect(character.attack).toBe(10)
    expect(character.defense).toBe(5)
    expect(character.skills).toEqual([])
  })

  it('creates a character with overrides', () => {
    const character = createCharacter({
      name: 'Mage',
      level: 5,
      hp: 80,
      mp: 100,
      attack: 15,
      defense: 3,
      skills: ['fireball', 'shield'],
    })

    expect(character.name).toBe('Mage')
    expect(character.level).toBe(5)
    expect(character.hp).toBe(80)
    expect(character.mp).toBe(100)
    expect(character.attack).toBe(15)
    expect(character.defense).toBe(3)
    expect(character.skills).toEqual(['fireball', 'shield'])
  })

  it('generates unique ids', () => {
    const char1 = createCharacter({})
    const char2 = createCharacter({})

    expect(char1.id).not.toBe(char2.id)
  })
})
