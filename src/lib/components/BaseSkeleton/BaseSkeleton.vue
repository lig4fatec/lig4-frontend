<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-skeleton"
    :class="[variantClass, animatedClass]"
    :style="style"
    aria-hidden="true"
  />
</template>

<script lang="ts" src="./BaseSkeleton.script.ts"></script>
