<template>
  <span
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-chip"
    :class="sizeClass"
  >
    <slot />
    <button
      v-if="removable"
      class="remove"
      type="button"
      :aria-label="$t('common.remove')"
      @click="handleRemove"
    >
      ×
    </button>
  </span>
</template>

<script lang="ts" src="./BaseChip.script.ts"></script>
