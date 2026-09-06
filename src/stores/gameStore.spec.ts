import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from './gameStore'

describe('gameStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with correct default state', () => {
    const store = useGameStore()

    expect(store.pieces).toEqual([])
    expect(store.currentPlayer).toBe(1)
    expect(store.gameOver).toBe(false)
    expect(store.winner).toBeNull()
  })

  describe('placePiece', () => {
    it('places a piece and switches player', () => {
      const store = useGameStore()

      const result = store.placePiece(0, 0)

      expect(result).toBe(true)
      expect(store.pieces).toHaveLength(1)
      expect(store.pieces[0]).toEqual({ x: 0, y: 0, player: 1 })
      expect(store.currentPlayer).toBe(2)
    })

    it('returns false when game is over', () => {
      const store = useGameStore()
      store.gameOver = true

      const result = store.placePiece(0, 0)

      expect(result).toBe(false)
      expect(store.pieces).toHaveLength(0)
    })

    it('detects horizontal win', () => {
      const store = useGameStore()

      store.placePiece(0, 0)
      store.placePiece(0, 1)
      store.placePiece(1, 0)
      store.placePiece(1, 1)
      store.placePiece(2, 0)
      store.placePiece(2, 1)
      store.placePiece(3, 0)

      expect(store.gameOver).toBe(true)
      expect(store.winner).toBe(1)
    })

    it('detects vertical win', () => {
      const store = useGameStore()

      store.placePiece(0, 0)
      store.placePiece(1, 0)
      store.placePiece(0, 1)
      store.placePiece(1, 1)
      store.placePiece(0, 2)
      store.placePiece(1, 2)
      store.placePiece(0, 3)

      expect(store.gameOver).toBe(true)
      expect(store.winner).toBe(1)
    })

    it('detects diagonal win', () => {
      const store = useGameStore()

      // P1: (0,0), P2: (0,1)
      // P1: (1,1), P2: (1,0)
      // P1: (2,2), P2: (2,0)
      // P1: (3,3) -> diagonal win for P1
      store.placePiece(0, 0) // P1
      store.placePiece(0, 1) // P2
      store.placePiece(1, 1) // P1
      store.placePiece(1, 0) // P2
      store.placePiece(2, 2) // P1
      store.placePiece(2, 0) // P2
      store.placePiece(3, 3) // P1 - diagonal (0,0)-(1,1)-(2,2)-(3,3)

      expect(store.gameOver).toBe(true)
      expect(store.winner).toBe(1)
    })
  })

  describe('clear', () => {
    it('resets the store to initial state', () => {
      const store = useGameStore()

      store.placePiece(0, 0)
      store.placePiece(1, 0)
      store.clear()

      expect(store.pieces).toEqual([])
      expect(store.currentPlayer).toBe(1)
      expect(store.gameOver).toBe(false)
      expect(store.winner).toBeNull()
    })
  })
})
