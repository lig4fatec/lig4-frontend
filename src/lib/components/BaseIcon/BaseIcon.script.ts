import { defineComponent, type Component } from 'vue'
import './BaseIcon.scss'

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IBaseIconProps {
  id?: string
  dataTestid?: string
  icon: Component
  size?: IconSize
  color?: string
}

export const baseIconProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  icon: { type: Object as () => Component, required: true as const },
  size: { type: String as () => IconSize, default: 'md' },
  color: { type: String, default: 'currentColor' },
}

export function useBaseIcon(props: IBaseIconProps): { sizeClass: string; style: { color: string | undefined } } {
  const sizeClass = `-${props.size}`

  const style = {
    color: props.color,
  }

  return {
    sizeClass,
    style,
  }
}

export default defineComponent({
  name: 'BaseIcon',
  inheritAttrs: false,
  props: baseIconProps,
  setup(props) {
    const { sizeClass, style } = useBaseIcon(props as IBaseIconProps)

    return {
      sizeClass,
      style,
    }
  },
})
