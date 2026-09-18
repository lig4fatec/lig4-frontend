import { type ComputedRef, computed, defineComponent } from 'vue'
import './BaseAvatar.scss'
import type { IBaseAvatarProps } from './types'

export type { AvatarSize, IBaseAvatarProps } from './types'

export const baseAvatarProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  src: { type: String, default: '' },
  name: { type: String, required: true as const },
  size: { type: String as () => IBaseAvatarProps['size'], default: 'md' },
}

export function useBaseAvatar(props: IBaseAvatarProps): { initials: ComputedRef<string> } {
  const initials = computed(() => {
    return props.name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  })

  return {
    initials,
  }
}

export default defineComponent({
  name: 'BaseAvatar',
  inheritAttrs: false,
  props: baseAvatarProps,
  setup(props) {
    const { initials } = useBaseAvatar(props as IBaseAvatarProps)

    return {
      initials,
    }
  },
})
