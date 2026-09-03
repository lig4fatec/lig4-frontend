import type { IApiResponse, IGameStateResponse, IMoveResponse } from '@/types'

const BASE_URL = '/api'

async function request<T>(url: string, options?: RequestInit): Promise<IApiResponse<T>> {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options)
    if (!response.ok) {
      return { data: null as T, error: `HTTP ${response.status}: ${response.statusText}` }
    }
    const data: T = await response.json() as T
    return { data }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return { data: null as T, error: message }
  }
}

export const ApiService = {
  async getGameState(): Promise<IApiResponse<IGameStateResponse>> {
    return request<IGameStateResponse>('/game-state')
  },

  async postMove(x: number, y: number): Promise<IApiResponse<IMoveResponse>> {
    return request<IMoveResponse>('/move', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ x, y }),
    })
  },
}
