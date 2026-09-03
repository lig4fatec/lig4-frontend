# 0004. Padrão SFC multi-arquivo

- **Data:** 2026-09-03
- **Estado:** Aceita

## Contexto

Componentes Vue com todo o código em um único arquivo `.vue` ficam difíceis de manter quando crescem.

## Decisão

Adotar SFC multi-arquivo com separação em 3 camadas:

- `ComponentName.vue` — apenas template
- `ComponentName.script.ts` — lógica (Composition API)
- Estilos em `src/styles/components/` (RSCSS)

Exemplo:
```vue
<script setup lang="ts">
import { store, resetGame } from './App.script'
import './styles/index.scss'
</script>

<template>
  <div class="game-board">...</div>
</template>
```

## Consequências

- **Positivas:** separação clara de responsabilidades, melhor legibilidade.
- **Negativas:** mais arquivos para gerenciar.
