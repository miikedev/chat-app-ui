# Agent Guidelines for Frontend Project

## Commands

- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Lint**: `npm run lint` (ESLint with auto-fix, includes unused imports, import ordering)
- **Dev server**: `npm run dev` (Vite dev server with HMR)
- **Preview**: `npm run preview` (Vite preview for production build)
- **Tests**: No test framework configured - add Vitest if needed (`npm install -D vitest @testing-library/react`)

## Code Style

- **TypeScript**: Strict mode enabled, no unused locals/parameters, no fallthrough in switch
- **Imports**: Grouped as type → builtin → object → external → internal → parent → sibling → index (with newlines)
- **JSX**: Props sorted alphabetically (callbacks last, shorthand first), self-closing components preferred
- **React**: No prop-types (use TS), hooks exhaustive-deps disabled, functional components with hooks
- **Accessibility**: JSX-a11y warnings for click events and focus management
- **Console**: Warn on console.log usage (use proper logging)
- **Path aliases**: `@/*` maps to `./src/*`
- **Formatting**: Prettier integration, padding between statements enforced

## Conventions

- **Naming**: camelCase for variables/functions, PascalCase for components/types
- **Error handling**: Try-catch for async operations, proper TypeScript error types
- **Components**: Functional with hooks, typed props interfaces, HeroUI components preferred
- **Styling**: Tailwind CSS with clsx for conditional classes, tailwind-variants for variants
- **State**: Zustand for global state management
