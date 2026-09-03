# 0002. Padronização de commits com rastreio por PRD

- **Data:** 2026-08-25
- **Estado:** Aceita

## Contexto

O projeto LIG 4 precisa de rastreabilidade entre requisitos e commits para controle e revisão de PRs.

## Decisão

Adotar PRDs versionados como fonte dos identificadores de rastreio:

- PRDs ficam em `docs/prd/`, numeração sequencial `PRD-XXXX`.
- Formato do commit: `PRD-XXXX: descrição curta`.
- Validação por hook nativo do Git (`githooks/commit-msg`).

## Consequências

- **Positivas:** rastreio direto requisito → commit.
- **Negativas:** ativação manual do hook após clone.
