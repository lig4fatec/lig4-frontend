<script lang="ts" src="./BaseSpinner.script.ts"></script>

<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-spinner"
    :class="sizeClass"
    role="status"
    :aria-label="label"
  >
    <div class="circle" />
    <span v-if="label" class="label">{{ label }}</span>
  </div>
</template>
