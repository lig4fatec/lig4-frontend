<script setup lang="ts">
import { useLeaderboard } from './Leaderboard.script'
import { BaseCard } from '@/lib/components'

const { sortedScores } = useLeaderboard()
</script>

<template>
  <div class="leaderboard-page">
    <h1 class="leaderboard-page > title">Placar</h1>

    <div class="leaderboard-page > list">
      <BaseCard
        v-for="(entry, index) in sortedScores"
        :key="entry.playerId"
        class="leaderboard-page > entry"
      >
        <div class="leaderboard-page > rank">#{{ index + 1 }}</div>
        <div class="leaderboard-page > player">
          <span class="leaderboard-page > name">{{ entry.playerName }}</span>
          <div class="leaderboard-page > stats">
            <span class="leaderboard-page > wins">{{ entry.wins }}V</span>
            <span class="leaderboard-page > losses">{{ entry.losses }}D</span>
            <span class="leaderboard-page > draws">{{ entry.draws }}E</span>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
