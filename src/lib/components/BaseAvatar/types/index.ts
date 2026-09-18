export type AvatarSize = 'sm' | 'md' | 'lg'

export interface IBaseAvatarProps {
  id?: string
  dataTestid?: string
  src?: string
  name: string
  size?: AvatarSize
}
