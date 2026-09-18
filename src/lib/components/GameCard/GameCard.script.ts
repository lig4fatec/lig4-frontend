import { defineComponent } from 'vue'
import './GameCard.scss'
import BaseCard from '../BaseCard/BaseCard.vue'

export interface IGameCardProps {
  id?: string
  dataTestid?: string
  title: string
  description?: string
  variant?: 'default' | 'highlighted'
}

export interface IGameCardEmits {
  click: [event: MouseEvent]
}

export const gameCardProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  title: { type: String, required: true as const },
  description: { type: String, default: '' },
  variant: { type: String as () => IGameCardProps['variant'], default: 'highlighted' },
}

export function useGameCard(
  emit: (e: 'click', event: MouseEvent) => void,
): { handleClick: (event: MouseEvent) => void } {
  function handleClick(event: MouseEvent): void {
    emit('click', event)
  }

  return {
    handleClick,
  }
}

export default defineComponent({
  name: 'GameCard',
  inheritAttrs: false,
  components: {
    BaseCard,
  },
  props: gameCardProps,
  emits: ['click'],
  setup(_props, { emit }) {
    const { handleClick } = useGameCard(emit as (e: 'click', event: MouseEvent) => void)

    return {
      handleClick,
    }
  },
})
