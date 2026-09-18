import { defineComponent } from 'vue'
import './BaseSpinner.scss'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export interface IBaseSpinnerProps {
  id?: string
  dataTestid?: string
  size?: SpinnerSize
  label?: string
}

export const baseSpinnerProps = {
  id: { type: String, default: undefined },
  dataTestid: { type: String, default: undefined },
  size: { type: String as () => SpinnerSize, default: 'md' },
  label: { type: String, default: '' },
}

export function useBaseSpinner(props: IBaseSpinnerProps): { sizeClass: string } {
  const sizeClass = `-${props.size}`

  return {
    sizeClass,
  }
}

export default defineComponent({
  name: 'BaseSpinner',
  inheritAttrs: false,
  props: baseSpinnerProps,
  setup(props) {
    const { sizeClass } = useBaseSpinner(props as IBaseSpinnerProps)

    return {
      sizeClass,
    }
  },
})
