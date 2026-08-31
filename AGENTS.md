# AGENTS.md

Next.js 16 (turbopack) + React 19, single-page marketing site ("botcamp").

## Commands

`bun` is the package manager (`packageManager` in package.json, `bun.lock` present) — use `bun`, not `npm`/`pnpm`:

- `bun dev` — dev server, http://localhost:3000
- `bun build` — production build
- `bun lint` — runs `eslint` (whole project, no default ignores for lint config; adds `--fix` manually)
- `bun start` — prod server

No `test`/`typecheck` scripts exist. Types are `noEmit` + incremental (`tsconfig.tsbuildinfo` is tracked — don't delete it).

## Conventions

- Path alias `@/*` → `./app/*`. Classnames via `cn(...)` from `@sglara/cn`, not `clsx`.
- Buttons: use the shared `@/components/ui/button/Button`, prop `as="button" | "a" | "Link"`. Sizes `normal | compact | iconNormal | iconCompact`. `as="Link"` takes `href` (client-side NavLink).
- Client components: start file with `"use client";`.
- SVGs in `app/` import as components via `next.config` svgr rule (`@svgr/webpack`).
- `Metadata` (title/description) is exported from `app/layout.tsx`, not per-route.
- Fonts are `next/font/local` .woff2 files under `app/fonts/` (localFont).
