# Agent Guidelines for Frontend Project

## Commands

- **Build**: `npm run build` (TypeScript + Vite)
- **Lint**: `npm run lint` (ESLint with auto-fix)
- **Dev server**: `npm run dev` (Vite dev server)
- **Preview**: `npm run preview` (Vite preview)
- **No tests configured** - add Vitest if needed

## Code Style

- **TypeScript**: Strict mode enabled, no unused locals/parameters
- **Imports**: Grouped as type → builtin → object → external → internal → parent → sibling → index
- **JSX**: Props sorted alphabetically (callbacks last, shorthand first), self-closing preferred
- **React**: No prop-types (use TS), hooks exhaustive-deps disabled
- **Accessibility**: JSX-a11y warnings for click events and focus
- **Console**: Warn on console.log usage
- **Path aliases**: `@/*` maps to `./src/*`

## Conventions

- **Naming**: camelCase for variables/functions, PascalCase for components
- **Error handling**: Try-catch for async operations, proper TypeScript error types
- **Components**: Functional with hooks, typed props interfaces
- **Styling**: Tailwind CSS with clsx for conditional classes
