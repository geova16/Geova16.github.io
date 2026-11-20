---
title: Como este site foi feito
description: As ferramentas e as decisões por trás deste portfólio, do zero até o ar.
date: 2026-11-12
draft: true
---

Este é um rascunho: ele aparece no seu computador (`npm run dev`), mas não no site publicado. Para publicar, troque `draft: true` por `draft: false` no topo deste arquivo.

## A ideia

Um site só para o portfólio, o blog e o CV, em três línguas, sem servidor e sem custo.

## As ferramentas

- **Astro** transforma os arquivos Markdown em páginas HTML
- **GitHub Pages** hospeda o site de graça
- **GitHub Actions** publica uma versão nova a cada `git push`

## Um bloco de código

Artigos podem ter código com as cores certas para cada linguagem:

```c
#include <stdio.h>

int main(void) {
    printf("Olá, mundo!\n");
    return 0;
}
```
