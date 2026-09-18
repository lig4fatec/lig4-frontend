<script lang="ts" src="./BaseCard.ts"></script>

<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-card"
    :class="classes"
  >
    <header v-if="$slots.header" class="header">
      <div class="title">
        <slot name="header" />
      </div>
      <div v-if="$slots.actions" class="actions">
        <slot name="actions" />
      </div>
    </header>
    <div class="body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
