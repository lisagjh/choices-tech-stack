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

### Cons

- `<NuxtLink>`: ingebouwde active classes werken ook automatisch op images, wat vaak niet de bedoeling is.
- Styling: ik heb het idee dat de styling, ook de styling in de componenten, global is. Oplossing hiervoor is om met classes te werken. Toch vind ik hoe Sveltekit dit doet veel fijner.

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
