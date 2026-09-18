<script lang="ts" src="./BaseIcon.script.ts"></script>

<template>
  <span
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-icon"
    :class="sizeClass"
    :style="style"
  >
    <component :is="icon" />
  </span>
</template>
