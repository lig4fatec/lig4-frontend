import { defineComponent } from 'vue'
import './PlayerInfo.scss'
import BaseAvatar from '../BaseAvatar/BaseAvatar.vue'

export interface IPlayerInfoProps {
  id?: string
  dataTestid?: string
  name: string
  avatar?: string
  level?: number
}

export const playerInfoProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  name: { type: String, required: true as const },
  avatar: { type: String, default: '' },
  level: { type: Number, default: undefined },
}

export function usePlayerInfo(): Record<string, never> {
  return {}
}

export default defineComponent({
  name: 'PlayerInfo',
  inheritAttrs: false,
  components: {
    BaseAvatar,
  },
  props: playerInfoProps,
  setup() {
    usePlayerInfo()

    return {}
  },
})
