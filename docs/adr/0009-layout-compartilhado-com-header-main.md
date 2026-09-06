# 0009. Layout compartilhado com header + main

- **Data:** 2026-09-06
- **Estado:** Aceita

## Contexto

A aplicação precisa de um layout consistente entre páginas com navegação.

## Decisão

Adotar layout simples com:
- `App.vue` como root com `<RouterView />`
- Navbar component em `shared/components/Navbar/`
- Estrutura CSS: `.app-layout` (flex column, 100% height) + `.app-main` (flex: 1, overflow-y: auto)

## Consequências

- **Positivas:** consistência visual, navegação acessível em todas as páginas.
- **Negativas:** todas as páginas herdam o mesmo layout (pode ser desejável ter layouts diferentes no futuro).
