# Zenovra Website — Claude Instructions

## Documentation-Driven Workflow (MANDATORY)

Every coding task MUST follow the Documentation Loop before writing any code.

### Before Any Code Change:
1. Read `SYSTEM_DOCS.md` — understand architecture, routes, components
2. Read `ROUTE_REFERENCE.md` (if exists) — understand route map
3. Identify the exact files involved
4. Check Known Issues section to avoid regressions
5. If unclear — read actual source code. Do NOT guess.

### During Implementation:
- Follow existing patterns (React 18, Vite, Tailwind, Framer Motion, Radix UI)
- Do not introduce new frameworks or patterns not already in the codebase
- Keep changes scoped to relevant files only
- Never regress on previously fixed issues

### After Implementation:
1. Update `SYSTEM_DOCS.md`: what changed, new known issues, update Last Audited date
2. Only update `ROUTE_REFERENCE.md` if routes were added/changed
3. Verify changes work — check for errors

## Project Context
- **Frontend**: React 18 + Vite + Tailwind + Framer Motion + Radix UI (static SPA, no backend)
- **8 routes**, 17 source files, dark-only theme
- **Git**: Push to `origin` remote, `main` branch
- **Deployed on**: Vercel
- **Domain**: Corporate website for Zenovra Life Sciences
