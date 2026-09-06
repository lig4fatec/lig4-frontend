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
    <h1 class="settings-page > title">Configurações</h1>

    <BaseCard class="settings-page > section">
      <h3 class="settings-page > section-title">Áudio</h3>
      <div class="settings-page > row">
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

    <BaseCard class="settings-page > section">
      <h3 class="settings-page > section-title">Notificações</h3>
      <div class="settings-page > row">
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

    <BaseCard class="settings-page > section">
      <h3 class="settings-page > section-title">Aparência</h3>
      <div class="settings-page > row">
        <span>Tema</span>
        <div class="settings-page > theme-options">
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
