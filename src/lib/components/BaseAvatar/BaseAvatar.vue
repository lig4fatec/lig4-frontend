<script setup lang="ts">
import { computed } from 'vue'
import type { IBaseAvatarProps } from './BaseAvatar.script'

const props = withDefaults(defineProps<IBaseAvatarProps>(), {
  src: '',
  size: 'md',
})

const initials = computed(() => {
  return props.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>

<template>
  <div class="base-avatar" :class="[`-${size}`]">
    <img v-if="src" class="base-avatar > image" :src="src" :alt="name" />
    <span v-else class="base-avatar > initials">{{ initials }}</span>
  </div>
</template>
