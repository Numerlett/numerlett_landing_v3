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
- **Install shadcn components exclusively via the CLI**: `npx shadcn@latest add <component>`.
  Never copy-paste component source or hand-write a component that exists in the shadcn
  registry. If unsure whether a component exists, check the registry before building from
  scratch.
- The shadcn style preset is `radix-nova`. Consult `components.json` for alias paths.

---

## UI Design Philosophy

The NumerLett site targets a modern, premium SaaS/startup aesthetic — think Linear, Vercel,
Stripe, Craft, Loom. Every section should feel intentional and polished.

- **Visual language**: generous whitespace, sharp typography, subtle depth (shadows, borders,
  glass), and purposeful motion. Avoid the generic "agency template" look.
- **Typography hierarchy**: strong contrast between headings and body. Headings carry weight
  and presence; body text is readable and calm.
- **Spacing discipline**: use layout tokens and consistent vertical rhythm. Do not eyeball
  spacing — use Tailwind's spacing scale or the layout CSS variables.
- **Dark-first thinking**: design works equally well in light and dark mode. Test both.
- **Micro-interactions everywhere**: every interactive element should respond to hover/focus
  with a purposeful, subtle motion. Nothing should feel static.
- **Inspiration references**: Linear (motion, density), Vercel (typography, whitespace),
  Stripe (trust, layout), Craft (warmth, polish). Study these before designing a new section.

---

## Animations & Motion

**Framer Motion is the single animation library for this project.** All entrance/exit
animations, layout transitions, scroll-driven effects, and page transitions use Framer Motion.

- **Do not use**: CSS `@keyframes`, Tailwind `animate-*` utilities, or any other JS animation
  library for anything beyond pure CSS micro-interactions.
- **Tailwind transition utilities are allowed only** for micro-interactions that involve no
  layout change and no entrance/exit — e.g. `transition-colors`, `hover:text-primary`,
  `hover:-translate-y-0.5` on a button. If it involves mounting/unmounting, use Framer Motion.
- **Define animation variants** as typed `const` objects at module scope, above the component
  function. Never inline variant objects inside JSX props.
  ```ts
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
  };
  ```
- **Page transitions**: every `<Link>` that navigates to a new page must be wrapped in a
  layout/page transition. Use Framer Motion's `AnimatePresence` in the root layout and
  animate `opacity` + `y` on the page wrapper. Do not ship a new page without a transition.
- **Scroll animations**: use Framer Motion's `useInView` or `whileInView` for elements that
  animate as they enter the viewport. Never trigger entrance animations on page load for
  below-the-fold content.
- **Spring physics** for interactive/gesture-driven motion (`type: "spring", stiffness: 300,
  damping: 30`). Cubic-bezier easing for layout transitions.
- **`AnimatePresence`** wraps any conditional render that should animate out. Always provide
  a stable `key` prop on the child so Framer Motion tracks enter/exit correctly.
- **Reduced motion**: respect `prefers-reduced-motion`. Use Framer Motion's
  `useReducedMotion()` hook to scale down or disable animations when the user has requested
  it.

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

---

## Decision Gate

**Any non-trivial decision must be surfaced to the user for approval before implementation.**
Do not silently choose an approach and build it. Present the options, state a recommendation,
and wait for a go-ahead.

Non-trivial decisions include (but are not limited to):

- Choosing between two valid architectural approaches (e.g. client-side vs server-side data
  fetching, local state vs context, CSS vs JS animation).
- Adding a new `npm` / `pnpm` dependency (other than a `npx shadcn@latest add` command).
- Creating a new top-level folder or introducing a new module pattern not already present in
  the codebase.
- Changing an existing component's public API (props, exports) in a way that affects other
  files.
- Any design direction decision where two approaches look meaningfully different to the user.
- Refactors that touch more than two files.

**Format for surfacing a decision**: one sentence of context, two or three named options each
with a brief tradeoff, and a clear recommendation. Keep it short — the user should be able to
read and decide in under 30 seconds.
