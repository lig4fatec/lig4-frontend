# PRD-0004. Padrão SFC multi-arquivo

- **Data:** 2026-09-03
- **Estado:** Implementado

## Objetivo

Separar componentes Vue em template, lógica e estilos.

## Requisitos

- `.vue` contém apenas o template
- `.script.ts` contém a lógica (Composition API)
- Estilos em arquivos SCSS separados

## Critérios de aceite

- Componentes seguem o padrão
- Typecheck passa
