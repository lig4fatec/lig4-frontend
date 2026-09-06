<script setup lang="ts">
import type { IBaseModalProps } from './BaseModal.script'

withDefaults(defineProps<IBaseModalProps>(), {
  title: '',
  size: 'md',
})

const emit = defineEmits<{
  close: []
}>()

function handleBackdropClick(): void {
  emit('close')
}

function handleContentClick(event: MouseEvent): void {
  event.stopPropagation()
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="base-modal" @click="handleBackdropClick">
      <div
        class="base-modal > content"
        :class="[`-${size}`]"
        @click="handleContentClick"
      >
        <header v-if="title || $slots.header" class="base-modal > header">
          <slot name="header">
            <h2 class="base-modal > title">{{ title }}</h2>
          </slot>
          <button class="base-modal > close" @click="emit('close')">×</button>
        </header>
        <div class="base-modal > body">
          <slot />
        </div>
        <footer v-if="$slots.footer" class="base-modal > footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>
