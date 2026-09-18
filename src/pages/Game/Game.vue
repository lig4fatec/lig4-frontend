<script setup lang="ts">
import { useGamePage } from './Game.script'
import { BaseButton } from '@/lib/components'

const { store, gameId, resetGame } = useGamePage()
</script>

<template>
  <div class="game-page">
    <header class="header">
      <span v-if="gameId" class="id">{{ $t('game.match', { id: gameId }) }}</span>
    </header>

    <div class="board">
      <div id="game-canvas" class="canvas" />
    </div>

    <aside class="sidebar">
      <h2 class="title">{{ $t('game.sidebarTitle') }}</h2>

      <p class="status">{{ $t('game.turn', { player: store.currentPlayer }) }}</p>

      <BaseButton
        v-if="store.gameOver"
        variant="primary"
        @click="resetGame"
      >
        {{ $t('game.restart') }}
      </BaseButton>

      <p v-if="store.winner" class="winner">
        {{ $t('game.winner', { winner: store.winner }) }}
      </p>
    </aside>
  </div>
</template>
