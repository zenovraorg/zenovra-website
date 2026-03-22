# Zenovra Website — Claude Instructions

## Documentation-Driven Workflow (MANDATORY)

Every coding task MUST follow the Documentation Loop (`/documentation-loop`).

### Mode Detection:
- Default: **NORMAL MODE**
- "fix", "cleanup", "stabilize", "fix issues", "fix APIs" → **FIX MODE**
- "rehaul", "redesign", "refactor entire", "rebuild", "rewrite", "breaking changes allowed" → **REHAUL MODE**

### Pre-Implementation (MANDATORY):
1. Read `SYSTEM_DOCS.md` — architecture, routes, components
2. Read `ROUTE_REFERENCE.md` (if exists)
3. Identify exact files involved
4. Check Known Issues
5. If unclear — read actual code. Do NOT guess.

### Normal Mode:
- Follow existing architecture and patterns
- Reuse existing APIs and components
- Do NOT invent routes, APIs, database tables, or schema
- Do NOT modify existing endpoints or contracts
- Keep changes minimal and scoped

### Fix Mode:
- Fix in small batches (one area at a time)
- Prefer bug fixes, consistency fixes, corrections
- Do NOT redesign architecture or rename APIs/routes/schema
- If a fix requires breaking changes → STOP and explain first

### Rehaul Mode:
- Large-scale redesign allowed (UI, APIs, structure)
- Before implementation: list all impacted APIs, routes, components, DB areas, and risks
- Breaking changes are allowed — maintain internal consistency
- Avoid partial or inconsistent updates
- After: update SYSTEM_DOCS.md with full change list, new architecture notes, Known Issues

### Post-Implementation (MANDATORY):
1. Verify no unintended breakage, system remains consistent
2. Update `SYSTEM_DOCS.md`: what changed, new known issues, Last Audited, Recent Changes
3. Update `ROUTE_REFERENCE.md` ONLY if routes changed

## Project Context
- **Frontend**: React 18 + Vite + Tailwind + Framer Motion + Radix UI (static SPA, no backend)
- **8 routes**, 17 source files, dark-only theme
- **Git**: Push to `origin` remote, `main` branch
- **Deployed on**: Vercel
- **Domain**: Corporate website for Zenovra Life Sciences
