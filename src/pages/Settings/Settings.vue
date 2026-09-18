<script setup lang="ts">
import { useSettings } from './Settings.script'
import { BaseCard, BaseButton } from '@/lib/components'
import { useLocale } from '@/lib/composables/useLocale'

const {
  soundEnabled,
  notificationsEnabled,
  theme,
  toggleSound,
  toggleNotifications,
  setTheme,
} = useSettings()

const { locale, setLocale } = useLocale()
</script>

<template>
  <div class="settings-page">
    <h1 class="title">{{ $t('settings.title') }}</h1>

    <BaseCard class="section">
      <h3 class="title">{{ $t('settings.audio') }}</h3>
      <div class="row">
        <span>{{ $t('settings.sounds') }}</span>
        <BaseButton
          :variant="soundEnabled ? 'primary' : 'secondary'"
          size="sm"
          @click="toggleSound"
        >
          {{ soundEnabled ? $t('common.enabled') : $t('common.disabled') }}
        </BaseButton>
      </div>
    </BaseCard>

    <BaseCard class="section">
      <h3 class="title">{{ $t('settings.notifications') }}</h3>
      <div class="row">
        <span>{{ $t('settings.notifications') }}</span>
        <BaseButton
          :variant="notificationsEnabled ? 'primary' : 'secondary'"
          size="sm"
          @click="toggleNotifications"
        >
          {{ notificationsEnabled ? $t('common.enabled') : $t('common.disabled') }}
        </BaseButton>
      </div>
    </BaseCard>

    <BaseCard class="section">
      <h3 class="title">{{ $t('settings.appearance') }}</h3>
      <div class="row">
        <span>{{ $t('settings.theme') }}</span>
        <div class="options">
          <BaseButton
            :variant="theme === 'dark' ? 'primary' : 'secondary'"
            size="sm"
            @click="setTheme('dark')"
          >
            {{ $t('settings.dark') }}
          </BaseButton>
          <BaseButton
            :variant="theme === 'light' ? 'primary' : 'secondary'"
            size="sm"
            @click="setTheme('light')"
          >
            {{ $t('settings.light') }}
          </BaseButton>
        </div>
      </div>
    </BaseCard>

    <BaseCard class="section">
      <h3 class="title">{{ $t('settings.language') }}</h3>
      <div class="row">
        <span>{{ $t('settings.language') }}</span>
        <div class="options">
          <BaseButton
            :variant="locale === 'pt-BR' ? 'primary' : 'secondary'"
            size="sm"
            @click="setLocale('pt-BR')"
          >
            {{ $t('settings.languagePortuguese') }}
          </BaseButton>
          <BaseButton
            :variant="locale === 'en-US' ? 'primary' : 'secondary'"
            size="sm"
            @click="setLocale('en-US')"
          >
            {{ $t('settings.languageEnglish') }}
          </BaseButton>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
