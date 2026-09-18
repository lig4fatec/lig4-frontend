<script lang="ts" src="./BaseTooltip.script.ts"></script>

<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-tooltip-wrapper"
  >
    <slot />
    <div
      class="base-tooltip"
      :class="positionClass"
      role="tooltip"
    >
      {{ text }}
    </div>
  </div>
</template>
