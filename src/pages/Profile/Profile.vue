<script setup lang="ts">
import { useProfile } from './Profile.script'
import { BaseCard, BaseAvatar, BaseInput } from '@/lib/components'

const { player, updateName } = useProfile()
</script>

<template>
  <div class="profile-page">
    <h1 class="profile-page > title">Perfil</h1>

    <BaseCard class="profile-page > card">
      <div class="profile-page > header">
        <BaseAvatar :name="player.name" size="lg" />
        <div class="profile-page > info">
          <h2 class="profile-page > name">{{ player.name }}</h2>
          <p class="profile-page > level">Nível {{ player.level }}</p>
        </div>
      </div>

      <div class="profile-page > form">
        <BaseInput
          :model-value="player.name"
          label="Nome"
          placeholder="Seu nome"
          @update:model-value="updateName"
        />
      </div>
    </BaseCard>
  </div>
</template>
