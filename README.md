# Choices Choices: tech stack

"Bij FDND vinden we het belangrijk dat studenten framework agnostisch worden opgeleid. Het doel van deze opdracht is om te leren wat de verschillen en overeenkomsten zijn tussen tech-stacks."
Tijdens de vorige sprint hebben wij gewerkt met Sveltekit en Directus om de nieuwe website van de DDA te maken. Deze sprint ga ik hetzelfde doen, maar dan met Nuxt.

# Nuxt

## Differences

### Pro's

- `<NuxtLink>`: anchor component met ingebouwde active class.
- `<NuxtLink>`: in Nuxt kan je een ingebouwde link component gebruiken, 
Een normale anchor tag maakt een nieuwe request naar de server als er op geklikt wordt, de server accepteert die en pre-rendert de gevraagde pagina, en stuurt die nar de browser.
Door de NuxtLink te gebruiken, werkt het als een soort SPA. Een supercharged `<a>`. 
NuxtLink intercepts de request naar de server, beoordeelt de request, en swapt de gevraagde componenten in en uit de pages. Dit is sneller. Ook gebruikt Nuxt ingebouwde active classes wanneer je op die page bent.
- Nuxt is vrij snel met goede performance door de buildin SSR.
- Grotere community: meer hulp mogelijk, meer oplossingen te vinden.

### Cons

- Documentatie is onduidelijk, en lastig te begrijpen voor framework beginners zoals ik.
- `<template>` om de html in de componenten vind ik in het begin en beetje verwarrend
- `<NuxtLink>`: ingebouwde active classes werken ook automatisch op images, wat vaak niet de bedoeling is, en is lastig te omzeilen.
- Lange laad tijd bij opstarten van Localhost.
- Styling: CSS in een component is automatisch unscoped, tenzij je specificeert dat het scoped is. Duurde even voor ik dit door had.
- Nuxt is gebaseerd op Vue.js, waardoor het meer afhankelijk is daarvan en die code, wat kan zorgen voor grotere files en dus langzamere websites.


# Sveltekit

## Pros
- Developer experience is beter: de docs zijn duidelijk en toegankelijker, en sveltekit heeft een tutorial op hun site die kan helpen.
- Reactivity: de reactivity in Svelte vind ik simpeler en duidelijker.
- Compiler: compiled code is vaak sneller dan interpreted code, omdat het meteen uitgevoerd kan worden door de computer.

## Cons
- Nieuwer
- Kleinere community: minder kant en klare oplossingen en libraries
- Minder SEO tools vergeleken met Nuxt
 
## Setup
Make sure to install the dependencies:
```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```


### Bronnen

[Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction)
# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
