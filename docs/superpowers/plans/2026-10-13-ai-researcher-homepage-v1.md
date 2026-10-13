# AI Researcher Homepage V1 Implementation Plan

> **For Codex:** Execute this plan in the current repository. The user explicitly approved building and publishing the first version on 2026-10-13.

**Goal:** Build, verify, and publish Chengyi Sun's English AI researcher homepage at `https://scy2004.github.io/`.

**Architecture:** A dependency-free static site served from the root of the GitHub Pages user repository. Semantic HTML contains the supplied and resume-verified public content; one CSS file provides the warm academic editorial design and responsive behavior; Node's built-in test runner enforces the content, link, accessibility, and privacy contract.

**Tech Stack:** HTML5, CSS3, SVG, Node.js built-in test runner, GitHub Pages.

---

### Task 1: Freeze the public content and privacy contract

**Files:**
- Create: `.gitignore`
- Create: `tests/site.test.mjs`
- Modify: `PROJECT_CONTEXT.md`

1. Add repository hygiene rules for local scratch files.
2. Write tests that require the approved identity, contact links, research sections, three under-review works, experience, education, semantic anchors, responsive stylesheet, and portrait/fallback treatment.
3. Add negative assertions for phone numbers, CV links, LinkedIn, Google Scholar, unsupported venues, and visible placeholder copy.
4. Run `node --test tests/site.test.mjs` and confirm it fails because the site files do not exist yet.

### Task 2: Build the static research homepage

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `favicon.svg`
- Create: `.nojekyll`
- Create when recoverable: `assets/profile.jpg`

1. Implement the semantic one-page structure from the approved V1 design.
2. Apply the warm paper, charcoal, and indigo visual system with an asymmetric hero, numbered research cards, editorial selected-work list, timeline, and compact education section.
3. Use the supplied portrait without generative alteration if it can be recovered; otherwise use a polished typographic portrait fallback and keep the markup ready for a direct image replacement.
4. Implement accessible focus states, readable typography, 320px mobile support, robust overflow handling, and reduced-motion behavior.
5. Run the contract tests and iterate until they pass.

### Task 3: Preview and visual quality assurance

**Files:**
- Modify as needed: `index.html`, `styles.css`

1. Start a local static HTTP server and verify the document and all assets return successful responses.
2. Inspect the page at representative desktop and mobile widths.
3. Fix clipping, awkward line breaks, inaccessible contrast/focus, and any weak or repeated visual hierarchy.
4. Re-run all tests and inspect the final Git diff for accidental private data.

### Task 4: Publish the GitHub Pages user site

**Files:**
- Modify: `PROJECT_CONTEXT.md`

1. Commit the verified implementation on the `main` branch.
2. Create the public repository `scy2004/scy2004.github.io`, add it as `origin`, and push `main`.
3. Enable or verify GitHub Pages from the repository root.
4. Wait for deployment, require HTTP 200, and confirm the live HTML contains the name and core research content.
5. Update `PROJECT_CONTEXT.md` with the published state, verification evidence, and deferred content.

### Task 5: Final handoff

1. Report the live site and repository URLs.
2. Summarize the visible sections and the portrait fallback, if used.
3. List only the most useful next content additions for a later revision.
