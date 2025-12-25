Coffee Coach

Coffee recipe app built with SvelteKit - a modern, clean, and structured coffee brewing guide.

Features

Interactive coffee calculators for multiple brewing methods
Persistent storage of preferences (coffee/water amounts, grind sizes)
Clean, modern UI with smooth transitions
Responsive design
PWA-ready (Progressive Web App)
Getting Started

Prerequisites

Node.js 18+ and npm
Installation

npm install
Development

Run the development server:

npm run dev
The app will be available at http://localhost:5173

Building for Production

npm run build
Preview the production build:

npm run preview
Project Structure

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
Adding a New Recipe

Create a new route folder in src/routes/ (e.g., my-recipe)
Create a +page.svelte file in that folder with your recipe content
Add recipe data to src/components/store.js following the existing pattern
Add the recipe title and slug to src/routes/_allRecipes.js to include it on the homepage
Technologies

SvelteKit - The framework (upgraded from Sapper)
Svelte 4 - The UI framework
Vite - Build tool
svelte-persistent-store - LocalStorage-backed state management
Deployment

This project is configured for Netlify deployment. The build command and publish directory are set in netlify.toml.

License

MIT
