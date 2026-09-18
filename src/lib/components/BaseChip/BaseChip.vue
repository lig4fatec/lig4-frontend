<script lang="ts" src="./BaseChip.script.ts"></script>

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
      aria-label="Remover"
      @click="handleRemove"
    >
      ×
    </button>
  </span>
</template>
