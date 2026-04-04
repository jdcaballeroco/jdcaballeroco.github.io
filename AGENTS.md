# AGENTS.md

## 1. Purpose

This document defines how any coding agent working in this repository must: 

- understand the project goals
- inspect the current structure before changing code
- preserve simplicity, clarity, and maintainability
- avoid unnecessary technical complexity

The goal is to enforce **clean, frontend-first, maintainable development behavior**.

---

## 2. Project Context

This repository contains a **personal portfolio website** intended to:

- present a strong professional profile
- showcase selected public work safely
- remain easy to deploy on **GitHub Pages**
- stay lightweight, modern, and easy to expand

This project is intentionally:

- static-first
- frontend-only by default
- simple in architecture
- focused on strong UX, strong writing, and professional presentation

---

## 3. Core Principles

### 3.1 Simplicity over Frameworks

Prefer the simplest valid solution.

Default stack:

- HTML
- CSS
- JavaScript

Do not introduce frameworks, build tools, or dependencies unless explicitly requested or clearly justified.

---

### 3.2 Clarity over Cleverness

Code must be easy to read, edit, and extend.

Prefer:

- explicit structure
- readable naming
- small files
- minimal abstraction

Avoid:

- unnecessary indirection
- premature componentization
- “smart” patterns that reduce maintainability

---

### 3.3 Frontend-Only by Default

This site is designed for **GitHub Pages**, so it must work as a static website.

Agents MUST assume:

- no backend
- no database
- no server-side rendering
- no API dependency for core functionality

If a backend-like feature is proposed, it must be treated as optional future work, not as a default requirement.

---

### 3.4 Professional UI over Decorative UI

The website should feel:

- modern
- technical
- premium
- professional
- restrained

Not:

- flashy
- playful
- trendy for its own sake
- overloaded with animation

---

## 4. Mandatory Behavior Rule (CRITICAL)

Before making any meaningful change, an agent MUST:

1. identify the task type
2. inspect the relevant files
3. verify project constraints
4. implement the smallest correct change
5. avoid unnecessary refactors

Skipping repository inspection is incorrect behavior.

---

## 5. Source of Truth

Primary source of truth for implementation:

- current repository structure
- existing HTML, CSS, and JS files
- explicit user instructions in prompts
- any attached CV/profile documents if content decisions are involved

If style, content, and code conflict, prioritize:

1. explicit user instruction
2. current repository intent
3. consistency with the site’s professional positioning

Agents MUST NOT invent content blindly.

---

## 6. Expected Repository Structure

Typical preferred structure:

- `index.html`
- `styles.css`
- `script.js`
- `assets/`

Possible optional folders:

- `assets/icons/`
- `assets/docs/`
- `assets/images/`

Agents SHOULD preserve this lightweight structure unless there is a strong reason to extend it.

---

## 7. Decision Flow (MANDATORY)

Before coding:

1. determine whether the task affects:
   - content
   - layout
   - styling
   - behavior
   - deployment
2. open the relevant files
3. validate impact on:
   - responsiveness
   - accessibility
   - maintainability
   - GitHub Pages compatibility
4. implement minimal robust change

---

## 8. HTML Rules

Agents MUST:

- use semantic HTML
- preserve clean heading hierarchy
- keep sections logically organized
- maintain accessible navigation

Agents SHOULD prefer:

- clear sectioning
- meaningful landmarks
- minimal DOM complexity

Agents MUST NOT:

- add div-heavy clutter without reason
- break semantic structure
- create unnecessarily nested layouts

---

## 9. CSS Rules

Agents MUST preserve a design language that is:

- modern
- clean
- dark-mode friendly
- consistent
- readable

Preferred design qualities:

- strong spacing
- restrained accent colors
- solid contrast
- elegant typography
- subtle transitions
- polished cards and layout blocks

Agents MUST NOT:

- introduce inconsistent visual patterns
- overuse gradients, shadows, or effects
- create visual clutter
- use animation as decoration only

If adding new styles:

- reuse existing tokens/patterns when possible
- keep naming consistent
- avoid duplicate rules

---

## 10. JavaScript Rules

JavaScript should remain minimal and purposeful.

Use JS only for:

- small UI interactions
- navigation helpers
- theme or section behavior if needed
- progressive enhancement

Agents MUST NOT:

- move core content rendering into JS unnecessarily
- add large libraries
- introduce complex state management
- create fragile DOM logic

The page must remain useful even if JS is limited.

---

## 11. Content Rules

The site represents a real professional profile.

Agents MUST:

- write in a professional, technical, credible tone
- keep copy concise and high-signal
- avoid exaggerated claims
- avoid clichés and vague buzzwords
- keep text scannable

Agents MUST NOT:

- invent projects
- invent metrics
- invent repositories
- invent client names
- invent testimonials
- invent achievements not supported by source material

When public information is incomplete, use elegant placeholders such as:

- “Public documentation coming soon”
- “More public projects coming soon”

---

## 12. Confidentiality Rules

Agents MUST be conservative about what is published publicly.

Do NOT expose:

- confidential technical details
- internal architecture
- private endpoints
- sensitive deployment information
- client-sensitive data
- internal screenshots
- internal diagrams
- any non-public implementation detail

Experience may be described at a high level, but public content must remain safe and professional.

---

## 13. UX Rules

The UX must help a visitor quickly understand:

- who the person is
- what technical profile they have
- what domains they work in
- what makes them different
- what public project(s) are available
- how to contact them

Agents SHOULD optimize for:

- fast scanning
- strong hierarchy
- strong first impression
- premium simplicity
- responsive clarity

---

## 14. Accessibility Rules

Agents MUST preserve:

- readable font sizes
- sufficient contrast
- visible focus states
- semantic landmarks
- keyboard-friendly navigation
- mobile responsiveness

Do not sacrifice accessibility for aesthetics.

---

## 15. Performance Rules

Agents MUST:

- keep assets lightweight
- avoid heavy libraries
- avoid unnecessary scripts
- avoid large image dependencies
- prefer CSS over JS when practical

The site should load fast on a typical static host.

---

## 16. SEO Basics

Agents SHOULD maintain:

- clear page title
- useful meta description
- semantic headings
- clean text hierarchy
- reasonable recruiter-relevant keywords

Do not overstuff keywords.

---

## 17. Deployment Rules

Deployment target: **GitHub Pages**

Agents MUST preserve compatibility with static hosting.

That means:

- all core functionality must work without a backend
- paths should remain static-host friendly
- no assumptions about server logic
- no required runtime services

Optional future integrations may be noted, but not required for the base version.

---

## 18. Code Modification Rules

Agents MUST:

- make minimal, robust changes
- preserve consistency across files
- avoid unnecessary renaming
- avoid broad refactors unless requested
- keep the site easy for a human to maintain manually

Agents MUST NOT:

- casually restructure the repository
- introduce tooling without need
- add build complexity to a simple site
- replace simple solutions with abstract ones

---

## 19. Anti-Patterns (STRICT)

Agents MUST NOT:

- overengineer a static site
- add framework dependencies casually
- create fake professional content
- break responsiveness
- reduce accessibility
- turn the site into a JS-heavy app
- introduce backend assumptions into the base project
- optimize for novelty instead of clarity

---

## 20. How to Handle Uncertainty

If unsure:

1. inspect the current files first
2. prefer the simpler solution
3. preserve readability
4. preserve static-host compatibility
5. avoid inventing content or requirements

Do not guess aggressively.

---

## 21. Final Directive

This repository is:

- a professional portfolio website
- a static frontend project
- a long-term base for gradual expansion

It is NOT:

- a full-stack platform
- a dashboard product
- a backend-driven application
- an experimental framework playground

Keep it simple.  
Keep it modern.  
Keep it professional.
