<script lang="ts" src="./BaseBadge.script.ts"></script>

<template>
  <span
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-badge"
    :class="[variantClass, sizeClass]"
  >
    <slot />
  </span>
</template>
