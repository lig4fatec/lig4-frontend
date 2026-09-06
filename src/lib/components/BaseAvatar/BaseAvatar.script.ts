export type AvatarSize = 'sm' | 'md' | 'lg'

export interface IBaseAvatarProps {
  src?: string
  name: string
  size?: AvatarSize
}
