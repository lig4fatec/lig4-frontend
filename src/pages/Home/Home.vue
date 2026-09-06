<script setup lang="ts">
import { useHome } from './Home.script'
import { BaseCard } from '@/lib/components'

const { gameModes, selectMode } = useHome()
</script>

<template>
  <div class="home-page">
    <section class="home-page > hero">
      <h1 class="home-page > title">LIG 4</h1>
      <p class="home-page > subtitle">O clássico jogo da velha em uma nova dimensão</p>
    </section>

    <section class="home-page > modes">
      <BaseCard
        v-for="mode in gameModes"
        :key="mode.id"
        variant="highlighted"
        padding="lg"
        class="home-page > mode-card"
        @click="selectMode(mode)"
      >
        <h3 class="home-page > mode-title">{{ mode.label }}</h3>
        <p class="home-page > mode-description">{{ mode.description }}</p>
      </BaseCard>
    </section>
  </div>
</template>
