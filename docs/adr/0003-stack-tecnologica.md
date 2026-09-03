# 0003. Stack tecnológica

- **Data:** 2026-09-03
- **Estado:** Aceita

## Contexto

O projeto precisa de uma stack moderna, performática e com boa integração entre UI e engine de jogo.

## Decisão

| Tecnologia | Versão | Uso |
|---|---|---|
| Vue 3 | 3.5.x | UI framework |
| Vite | 8.x | Build tool |
| Phaser 4 | 4.2.x | Engine de jogo |
| Pinia | 2.x | Estado global |
| TypeScript | 5.9 | Tipagem estática |
| SCSS | - | Estilização (RSCSS) |

Phaser 4 escolhido por: renderer WebGL reconstruído, sistema unificado de filtros, melhor suporte a AI coding agents, API mais limpa.

## Consequências

- **Positivas:** stack moderna, boa performance, tipagem forte.
- **Negativas:** Phaser 4 é recente, menos tutoriais disponíveis.
