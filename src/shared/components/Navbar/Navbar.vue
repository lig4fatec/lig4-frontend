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
  <nav class="navbar">
    <div class="navbar > brand">
      <span class="navbar > logo">LIG 4</span>
    </div>
    <ul class="navbar > list">
      <li
        v-for="item in navItems"
        :key="item.route"
        class="navbar > item"
      >
        <RouterLink
          :to="item.route"
          class="navbar > link"
          :class="{ '-active': currentPath === item.route }"
        >
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
    <div class="navbar > profile">
      <BaseAvatar name="Jogador" size="sm" />
    </div>
  </nav>
</template>
