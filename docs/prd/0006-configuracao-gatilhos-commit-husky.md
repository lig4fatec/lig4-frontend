# PRD-0006. Configuração de gatilhos de commit com Husky

- **Data:** 2026-09-03
- **Estado:** Implementado

## Objetivo

Garantir que apenas commits válidos entrem no repositório, rodando verificações automaticamente antes de cada commit.

## Requisitos

- Husky instalado e configurado
- Hook `pre-commit` executa lint TS, lint SCSS e typecheck
- Hook `commit-msg` valida o padrão `PRD-XXXX: descrição`
- Script `prepare` no package.json para auto-inicialização

## Critérios de aceite

- Commit com mensagem fora do padrão é rejeitado
- Commit com erro de lint é rejeitado
- Commit com erro de typecheck é rejeitado
- `npm install` configura os hooks automaticamente
