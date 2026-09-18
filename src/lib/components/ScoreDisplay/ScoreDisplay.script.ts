import { defineComponent } from 'vue'
import './ScoreDisplay.scss'

export interface IScore {
  player1: number
  player2: number
}

export interface IScoreDisplayProps {
  id?: string
  dataTestid?: string
  score: IScore
  player1Label?: string
  player2Label?: string
}

export const scoreDisplayProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  score: { type: Object as () => IScore, required: true as const },
  player1Label: { type: String, default: 'Jogador 1' },
  player2Label: { type: String, default: 'Jogador 2' },
}

export function useScoreDisplay(): Record<string, never> {
  return {}
}

export default defineComponent({
  name: 'ScoreDisplay',
  inheritAttrs: false,
  props: scoreDisplayProps,
  setup() {
    useScoreDisplay()

    return {}
  },
})
