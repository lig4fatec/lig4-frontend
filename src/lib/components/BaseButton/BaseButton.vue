<script lang="ts" src="./BaseButton.ts"></script>

<template>
  <button
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-button"
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner" />
    <span class="label">
      <slot />
    </span>
  </button>
</template>
