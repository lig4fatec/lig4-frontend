<script setup lang="ts">
import { useGamePage } from './Game.script'
import { BaseButton } from '@/lib/components'

const { store, gameId, resetGame } = useGamePage()
</script>

<template>
  <div class="game-page">
    <header class="header">
      <span v-if="gameId" class="id">Partida: {{ gameId }}</span>
    </header>

    <div class="board">
      <div id="game-canvas" class="canvas" />
    </div>

    <aside class="sidebar">
      <h2 class="title">LIG 4</h2>

      <p class="status">Vez do jogador {{ store.currentPlayer }}</p>

      <BaseButton
        v-if="store.gameOver"
        variant="primary"
        @click="resetGame"
      >
        Reiniciar
      </BaseButton>

      <p v-if="store.winner" class="winner">
        Jogador {{ store.winner }} venceu!
      </p>
    </aside>
  </div>
</template>
