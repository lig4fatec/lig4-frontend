# PRD-0007. Configuração do Vue Router

- **Data:** 2026-09-06
- **Estado:** Implementado

## Objetivo

Configurar navegação SPA com Vue Router 4 para o aplicativo.

## Requisitos

- Vue Router 4 instalado
- Rotas lazy-loaded para cada página
- Constantes de rota em `utils/constants.ts`
- Integração com Pinia

## Critérios de aceite

- `npm run build` passa sem erros
- Navegação entre páginas funciona via links
- URLs atualizam corretamente
