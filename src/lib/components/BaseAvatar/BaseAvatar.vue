<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-avatar"
    :class="[`-${size}`]"
  >
    <img v-if="src" class="image" :src="src" :alt="name" />
    <span v-else class="initials">{{ initials }}</span>
  </div>
</template>

<script lang="ts" src="./BaseAvatar.ts"></script>
