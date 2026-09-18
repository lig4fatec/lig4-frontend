<script lang="ts" src="./GameCard.script.ts"></script>

<template>
  <BaseCard
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    :variant="variant"
    padding="lg"
    class="game-card"
    @click="handleClick"
  >
    <h3 class="title">{{ title }}</h3>
    <p v-if="description" class="description">{{ description }}</p>
    <slot />
  </BaseCard>
</template>
