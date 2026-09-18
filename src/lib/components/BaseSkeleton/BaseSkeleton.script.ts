import { defineComponent } from 'vue'
import './BaseSkeleton.scss'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular'

export interface IBaseSkeletonProps {
  id?: string
  dataTestid?: string
  variant?: SkeletonVariant
  width?: string
  height?: string
  animated?: boolean
}

export const baseSkeletonProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  variant: { type: String as () => SkeletonVariant, default: 'text' },
  width: { type: String, default: '100%' },
  height: { type: String, default: '1rem' },
  animated: { type: Boolean, default: true },
}

export function useBaseSkeleton(props: IBaseSkeletonProps): { variantClass: string; animatedClass: string; style: { width: string | undefined; height: string | undefined } } {
  const variantClass = `-${props.variant}`
  const animatedClass = props.animated ? '-animated' : ''

  const style = {
    width: props.width,
    height: props.height,
  }

  return {
    variantClass,
    animatedClass,
    style,
  }
}

export default defineComponent({
  name: 'BaseSkeleton',
  inheritAttrs: false,
  props: baseSkeletonProps,
  setup(props) {
    const { variantClass, animatedClass, style } = useBaseSkeleton(props as IBaseSkeletonProps)

    return {
      variantClass,
      animatedClass,
      style,
    }
  },
})
