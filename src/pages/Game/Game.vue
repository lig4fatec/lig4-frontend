<script setup lang="ts">
import { useGamePage } from './Game.script'
import { BaseButton } from '@/lib/components'

const { store, gameId, resetGame } = useGamePage()
</script>

<template>
  <div class="game-page">
    <header class="game-page > header">
      <span v-if="gameId" class="game-page > game-id">Partida: {{ gameId }}</span>
    </header>

    <div class="game-page > board">
      <div id="game-canvas" class="game-page > canvas" />
    </div>

    <aside class="game-page > sidebar">
      <h2 class="game-page > title">LIG 4</h2>

      <p class="game-page > status">Vez do jogador {{ store.currentPlayer }}</p>

      <BaseButton
        v-if="store.gameOver"
        variant="primary"
        @click="resetGame"
      >
        Reiniciar
      </BaseButton>

      <p v-if="store.winner" class="game-page > winner">
        Jogador {{ store.winner }} venceu!
      </p>
    </aside>
  </div>
</template>
