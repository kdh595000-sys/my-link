# GEMINI Project Context: my-profile

This project is a modern web application built with Next.js, leveraging the latest features of React and Tailwind CSS.

## Project Overview

- **Name:** my-profile
- **Type:** Next.js Web Application (App Router)
- **Main Technologies:**
    - **Framework:** [Next.js](https://nextjs.org/) (v15+)
    - **Library:** [React](https://react.dev/) (v19)
    - **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
    - **Language:** [TypeScript](https://www.typescriptlang.org/)
    - **Font:** Geist & Geist Mono (via `next/font`)

## Architecture & Structure

The project follows the standard Next.js App Router structure:

- `my-profile/app/`: Contains the application routes, layouts, and components.
    - `layout.tsx`: Root layout defining the HTML structure and global styles.
    - `page.tsx`: The main entry point/home page.
    - `globals.css`: Global CSS and Tailwind directives.
- `my-profile/public/`: Static assets like images and icons.
- `my-profile/next.config.ts`: Next.js configuration.
- `my-profile/tsconfig.json`: TypeScript configuration with path aliases (e.g., `@/*` for root).
- `my-profile/eslint.config.mjs`: Linting rules.

## Building and Running

Commands are executed from within the `my-profile/` directory:

| Task | Command | Description |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Starts the development server at `http://localhost:3000`. |
| **Build** | `npm run build` | Compiles the application for production. |
| **Start** | `npm run start` | Starts the production server after building. |
| **Lint** | `npm run lint` | Runs ESLint to check for code quality issues. |

## Development Conventions

- **App Router:** Use the `app/` directory for all routing logic.
- **Component Styling:** Prefer Tailwind CSS utility classes.
- **Strict Typing:** TypeScript is configured with `strict: true`. Ensure all new code is properly typed.
- **Path Aliases:** Use the `@/` prefix to import modules from the project root (e.g., `import { ... } from "@/app/components/..."`).
- **Icons/Images:** Use `next/image` for optimized image rendering.
