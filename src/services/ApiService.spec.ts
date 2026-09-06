import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiService } from './ApiService'

const mockFetch = vi.fn()

vi.stubGlobal('fetch', mockFetch)

describe('ApiService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('getGameState', () => {
    it('returns game state on success', async () => {
      const mockData = { pieces: [], currentPlayer: 1 }
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockData),
      })

      const result = await ApiService.getGameState()

      expect(result.data).toEqual(mockData)
      expect(result.error).toBeUndefined()
      expect(mockFetch).toHaveBeenCalledWith('/api/game-state', undefined)
    })

    it('returns error on HTTP failure', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })

      const result = await ApiService.getGameState()

      expect(result.data).toBeNull()
      expect(result.error).toBe('HTTP 404: Not Found')
    })

    it('returns error on network failure', async () => {
      mockFetch.mockRejectedValue(new Error('Network error'))

      const result = await ApiService.getGameState()

      expect(result.data).toBeNull()
      expect(result.error).toBe('Network error')
    })
  })

  describe('postMove', () => {
    it('sends move and returns response', async () => {
      const mockData = { success: true, winner: 1 }
      mockFetch.mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(mockData),
      })

      const result = await ApiService.postMove(0, 5)

      expect(result.data).toEqual(mockData)
      expect(mockFetch).toHaveBeenCalledWith('/api/move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ x: 0, y: 5 }),
      })
    })

    it('returns error on failure', async () => {
      mockFetch.mockResolvedValue({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
      })

      const result = await ApiService.postMove(0, 5)

      expect(result.data).toBeNull()
      expect(result.error).toBe('HTTP 500: Internal Server Error')
    })
  })
})
