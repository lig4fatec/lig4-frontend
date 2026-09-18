<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { BaseAvatar } from '@/lib/components'
import { useNavigation } from '@/shared/composables/useNavigation'

const route = useRoute()
const { navItems } = useNavigation()

const currentPath = computed(() => route.path)
</script>

<template>
  <nav class="nav-bar">
    <div class="brand">
      <span class="logo">LIG 4</span>
    </div>
    <ul class="list">
      <li
        v-for="item in navItems"
        :key="item.route"
        class="item"
      >
        <RouterLink
          :to="item.route"
          class="link"
          :class="{ '-active': currentPath === item.route }"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
    <div class="profile">
      <BaseAvatar :name="$t('nav.player')" size="sm" />
    </div>
  </nav>
</template>
