<script setup lang="ts">
import type { IBaseCardProps } from './BaseCard.script'

withDefaults(defineProps<IBaseCardProps>(), {
  variant: 'default',
  padding: 'md',
})
</script>

<template>
  <div class="base-card" :class="[`-${variant}`, `-${padding}`]">
    <header v-if="$slots.header" class="base-card > header">
      <slot name="header" />
    </header>
    <div class="base-card > body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="base-card > footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
