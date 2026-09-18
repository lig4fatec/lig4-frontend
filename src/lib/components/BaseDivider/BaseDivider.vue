<script lang="ts" src="./BaseDivider.script.ts"></script>

<template>
  <hr
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-divider"
    :class="orientationClass"
  />
</template>
