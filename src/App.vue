<script setup lang="ts">
import { store, resetGame } from './App.script'
import './styles/index.scss'
</script>

<template>
  <div class="game-board">
    <div id="game-canvas" class="canvas"></div>
    <div class="ui-overlay">
      <h1 class="title">LIG 4</h1>
      <p class="info">Vez do jogador {{ store.currentPlayer }}</p>
      <button
        v-if="store.gameOver"
        class="button"
        @click="resetGame"
      >
        Reiniciar
      </button>
      <p v-if="store.winner" class="info">
        Jogador {{ store.winner }} venceu!
      </p>
    </div>
  </div>
</template>
