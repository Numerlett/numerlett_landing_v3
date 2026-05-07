# NumerLett Landing Page — Agent & AI Coding Standards

## Framework Notice

<!-- BEGIN:nextjs-agent-rules -->
This is NOT the Next.js you know. This version has breaking changes — APIs, conventions,
and file structure may all differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Architecture Principles (SOLID)

- **Single Responsibility**: Every component renders one logical UI unit. Data arrays, icon
  mappings, and sub-renderers belong in their own files or named constants, not inlined
  inside JSX. A section component renders structure; it does not define business data.
- **Open/Closed**: New variants are added by extending props or data arrays, not by
  modifying component internals. If you need a new card style, add a `variant` prop —
  do not fork the component.
- **Reuse over duplication**: Before creating a new component, search `components/` for an
  existing one that can be parameterised. Three near-identical JSX blocks always warrant a
  shared component. Section headers, label lines, and card layouts are prime candidates.
- **Interface Segregation**: Keep component props minimal and focused. Do not pass a giant
  config object when two focused props suffice.
- **Dependency Inversion**: Depend on the shadcn component abstractions in `components/ui/`
  rather than hand-rolling interactive elements.

---

## Theming & UI Consistency

- **All colors, radii, and shadows must use shadcn CSS tokens** via Tailwind utilities:
  - Colors: `text-primary`, `bg-primary`, `border-primary`, `text-muted-foreground`,
    `bg-muted`, `bg-accent`, `border-border`, `text-foreground`, `bg-background`, etc.
  - Radii: `rounded-brand-sm`, `rounded-brand-md`, `rounded-brand-lg`, `rounded-brand-xl`
  - Shadows: `shadow-brand-sm`, `shadow-brand-md`, `shadow-brand-lg`, `shadow-brand-green`
  - Layout vars still use CSS custom properties directly: `var(--nl-nav-h)`, `var(--nl-max-w)`
- **Never use raw hex, rgb, or hsl color values inline** in JSX className strings or inline
  styles. All colour values live in `app/globals.css` under `:root`.
- **Never add a new CSS class with hardcoded colour values.** New brand tokens go in `:root`
  in `app/globals.css` and must be exposed via `@theme inline` before use.
- **Use shadcn/ui components** from `components/ui/` for all interactive elements — Button,
  Input, Textarea, Select, Accordion, Tabs, Dialog, etc. Do not rebuild what already exists.
- The shadcn style preset is `radix-nova`. Consult `components.json` for alias paths.

---

## Icons

- **No emoji characters anywhere in JSX, component data arrays, or string literals.**
  Emojis render inconsistently across platforms and operating systems.
- Use **Lucide React** (`lucide-react`, already installed) for all iconography.
- Icon usage rules:
  - Decorative icons: `aria-hidden="true"`
  - Interactive icon-only elements: add `aria-label` or `<span className="sr-only">`
  - Size with Tailwind `size-*` utilities (`size-4`, `size-5`, `size-6`, `size-10`, etc.)
  - Color with semantic tokens (`text-primary`, `text-muted-foreground`, `text-foreground`)

---

## Component Structure

- Export exactly one component per file. Internal sub-components that are not reused
  elsewhere may be defined in the same file above the default export.
- Data arrays (cards, steps, FAQs, testimonials, etc.) must be defined as typed `const`
  arrays at module scope, above the component function — never inline in JSX.
- Define TypeScript types for all data shapes. No `any`. No implicit `any`.
- Server Components by default. Add `"use client"` only when the component needs browser
  APIs, event handlers, or React hooks.

---

## Code Quality

- No comments explaining *what* the code does — well-named identifiers do that.
- A comment is only justified when explaining a non-obvious *why*: a browser quirk,
  a business constraint, or a workaround for a known issue.
- No `// TODO`, `// FIXME`, or placeholder comments committed to the repo.
- No `console.log` statements in committed code.
- TypeScript strict mode is enabled. All props must be explicitly typed.
- Prefer named exports for utilities and types; use default exports only for page/layout
  components (Next.js convention).
