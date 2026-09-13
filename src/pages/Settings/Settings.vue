<script setup lang="ts">
import { useSettings } from './Settings.script'
import { BaseCard, BaseButton } from '@/lib/components'

const {
  soundEnabled,
  notificationsEnabled,
  theme,
  toggleSound,
  toggleNotifications,
  setTheme,
} = useSettings()
</script>

<template>
  <div class="settings-page">
    <h1 class="title">Configurações</h1>

    <BaseCard class="section">
      <h3 class="title">Áudio</h3>
      <div class="row">
        <span>Sons</span>
        <BaseButton
          :variant="soundEnabled ? 'primary' : 'secondary'"
          size="sm"
          @click="toggleSound"
        >
          {{ soundEnabled ? 'Ativado' : 'Desativado' }}
        </BaseButton>
      </div>
    </BaseCard>

    <BaseCard class="section">
      <h3 class="title">Notificações</h3>
      <div class="row">
        <span>Notificações</span>
        <BaseButton
          :variant="notificationsEnabled ? 'primary' : 'secondary'"
          size="sm"
          @click="toggleNotifications"
        >
          {{ notificationsEnabled ? 'Ativado' : 'Desativado' }}
        </BaseButton>
      </div>
    </BaseCard>

    <BaseCard class="section">
      <h3 class="title">Aparência</h3>
      <div class="row">
        <span>Tema</span>
        <div class="options">
          <BaseButton
            :variant="theme === 'dark' ? 'primary' : 'secondary'"
            size="sm"
            @click="setTheme('dark')"
          >
            Escuro
          </BaseButton>
          <BaseButton
            :variant="theme === 'light' ? 'primary' : 'secondary'"
            size="sm"
            @click="setTheme('light')"
          >
            Claro
          </BaseButton>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
