
# Coffee Coach

Coffee recipe app built with SvelteKit - a modern, clean, and structured coffee brewing guide.

## Features

- Interactive coffee calculators for multiple brewing methods
- Persistent storage of preferences (coffee/water amounts, grind sizes)
- Clean, modern UI with smooth transitions
- Responsive design
- PWA-ready (Progressive Web App)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable Svelte components
│   ├── Button.svelte
│   ├── GrindSize.svelte
│   ├── Ingredients.svelte
│   ├── Recipe.svelte
│   ├── Titles.svelte
│   └── store.js         # Persistent state management
├── routes/              # SvelteKit file-based routing
│   ├── +layout.svelte   # Root layout
│   ├── +page.svelte     # Homepage
│   ├── +error.svelte    # Error page
│   └── [recipe]/        # Individual recipe pages
│       └── +page.svelte
└── app.html             # HTML template
```

## Adding a New Recipe

1. Create a new route folder in `src/routes/` (e.g., `my-recipe`)
2. Create a `+page.svelte` file in that folder with your recipe content
3. Add recipe data to `src/components/store.js` following the existing pattern
4. Add the recipe title and slug to `src/routes/_allRecipes.js` to include it on the homepage

## Technologies

- **SvelteKit** - The framework
- **Svelte 4** - The UI framework
- **Vite** - Build tool
- **@sveltejs/adapter-vercel** - Vercel deployment adapter

## Deployment

This project is configured for Vercel deployment. The build command and settings are configured in `vercel.json` and `svelte.config.js`.

## License

MIT
