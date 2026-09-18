<script lang="ts" src="./ScoreDisplay.script.ts"></script>

<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="score-display"
  >
    <div class="player">
      <span class="label">{{ player1Label }}</span>
      <span class="score">{{ score.player1 }}</span>
    </div>
    <div class="divider">×</div>
    <div class="player">
      <span class="label">{{ player2Label }}</span>
      <span class="score">{{ score.player2 }}</span>
    </div>
  </div>
</template>
