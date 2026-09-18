<script lang="ts" src="./PlayerInfo.script.ts"></script>

<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="player-info"
  >
    <BaseAvatar :src="avatar" :name="name" size="md" />
    <div class="details">
      <span class="name">{{ name }}</span>
      <span v-if="level !== undefined" class="level">{{ $t('common.level', { level }) }}</span>
    </div>
  </div>
</template>
