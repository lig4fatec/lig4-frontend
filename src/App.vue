<script setup lang="ts">
import './lib/styles/index.scss'
import ThemeProvider from './lib/providers/ThemeProvider.vue'
</script>

<template>
  <ThemeProvider>
    <div class="app-layout">
      <RouterView />
    </div>
  </ThemeProvider>
</template>
