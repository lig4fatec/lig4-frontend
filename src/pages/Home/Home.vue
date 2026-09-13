<script setup lang="ts">
import { useHome } from './Home.script'
import { BaseCard } from '@/lib/components'

const { gameModes, selectMode } = useHome()
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <h1 class="title">LIG 4</h1>
      <p class="subtitle">O clássico jogo da velha em uma nova dimensão</p>
    </section>

    <section class="modes">
      <BaseCard
        v-for="mode in gameModes"
        :key="mode.id"
        variant="highlighted"
        padding="lg"
        class="card"
        @click="selectMode(mode)"
      >
        <h3 class="title">{{ mode.label }}</h3>
        <p class="description">{{ mode.description }}</p>
      </BaseCard>
    </section>
  </div>
</template>
