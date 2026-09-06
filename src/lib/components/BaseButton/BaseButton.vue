<script setup lang="ts">
import type { IBaseButtonProps } from './BaseButton.script'

const props = withDefaults(defineProps<IBaseButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent): void {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    class="base-button"
    :class="[`-${props.variant}`, `-${props.size}`]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="base-button > spinner" />
    <span class="base-button > label">
      <slot />
    </span>
  </button>
</template>
