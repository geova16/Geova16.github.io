---
title: Comment ce site est fait
description: Les outils et les choix derrière ce portfolio, de zéro à la mise en ligne.
date: 2026-11-12
draft: true
---

Ceci est un brouillon : il apparaît sur votre ordinateur (`npm run dev`), mais pas sur le site publié.

## L’idée

Un seul site pour le portfolio, le blog et le CV, en trois langues, sans serveur et sans frais.

## Les outils

- **Astro** transforme les fichiers Markdown en pages HTML
- **GitHub Pages** héberge le site gratuitement
- **GitHub Actions** publie une nouvelle version à chaque `git push`

## Un bloc de code

```c
#include <stdio.h>

int main(void) {
    printf("Bonjour, le monde !\n");
    return 0;
}
```
