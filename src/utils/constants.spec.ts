import { describe, it, expect } from 'vitest'
import {
  ROUTE_HOME,
  ROUTE_GAME,
  ROUTE_SETTINGS,
  ROUTE_PROFILE,
  ROUTE_LEADERBOARD,
  GAME_CANVAS_PARENT,
  PLAYER_ONE,
  PLAYER_TWO,
  WS_EVENT_CONNECT,
  WS_EVENT_DISCONNECT,
  WS_EVENT_MESSAGE,
  WS_EVENT_ERROR,
  GAME_EVENT_START,
  GAME_EVENT_STOP,
  GAME_EVENT_RESET,
  GAME_EVENT_MOUNTED,
  GAME_EVENT_UNMOUNTED,
  GAME_EVENT_PIECE_PLACED,
} from './constants'

describe('constants', () => {
  describe('routes', () => {
    it('defines correct route paths', () => {
      expect(ROUTE_HOME).toBe('/')
      expect(ROUTE_GAME).toBe('/game')
      expect(ROUTE_SETTINGS).toBe('/settings')
      expect(ROUTE_PROFILE).toBe('/profile')
      expect(ROUTE_LEADERBOARD).toBe('/leaderboard')
    })
  })

  describe('game constants', () => {
    it('defines canvas parent id', () => {
      expect(GAME_CANVAS_PARENT).toBe('game-canvas')
    })

    it('defines player identifiers', () => {
      expect(PLAYER_ONE).toBe(1)
      expect(PLAYER_TWO).toBe(2)
    })
  })

  describe('websocket events', () => {
    it('defines ws event names', () => {
      expect(WS_EVENT_CONNECT).toBe('connect')
      expect(WS_EVENT_DISCONNECT).toBe('disconnect')
      expect(WS_EVENT_MESSAGE).toBe('message')
      expect(WS_EVENT_ERROR).toBe('error')
    })
  })

  describe('game events', () => {
    it('defines game event names', () => {
      expect(GAME_EVENT_START).toBe('game:start')
      expect(GAME_EVENT_STOP).toBe('game:stop')
      expect(GAME_EVENT_RESET).toBe('game:reset')
      expect(GAME_EVENT_MOUNTED).toBe('game:mounted')
      expect(GAME_EVENT_UNMOUNTED).toBe('game:unmounted')
      expect(GAME_EVENT_PIECE_PLACED).toBe('game:piece-placed')
    })
  })
})
