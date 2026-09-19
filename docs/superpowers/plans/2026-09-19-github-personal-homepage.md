# GitHub Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a minimal, responsive personal homepage for `scy2004` at `https://scy2004.github.io/`.

**Architecture:** A dependency-free static site will be served directly from the root of the `scy2004/scy2004.github.io` repository. The page is split into semantic HTML, one focused stylesheet, and one small SVG favicon; a Node built-in test validates the required content and responsive safeguards before publication.

**Tech Stack:** HTML5, CSS3, SVG, Node.js built-in test runner, GitHub Pages, GitHub CLI.

## Global Constraints

- Publish the user site at exactly `https://scy2004.github.io/`.
- Use a public repository named exactly `scy2004/scy2004.github.io`.
- Use dependency-free static HTML and CSS; do not add a package manager or build framework.
- Display `scy2004`, `Personal website coming soon.`, and a working GitHub profile link.
- Include a page title, description, viewport metadata, and favicon.
- Do not add unconfirmed personal names, photos, schools, employers, research claims, social accounts, or contact details.
- Support common mobile and desktop widths without horizontal overflow.
- Do not add a custom domain, analytics, forms, a backend, a database, or a blog system.

---

### Task 1: Build and validate the static homepage

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `favicon.svg`
- Create: `.nojekyll`
- Create: `tests/site.test.mjs`

**Interfaces:**
- Consumes: the approved copy and repository identity from the global constraints.
- Produces: a static root document at `/index.html`, stylesheet at `/styles.css`, favicon at `/favicon.svg`, and a zero-dependency validation command `node --test tests/site.test.mjs`.

- [ ] **Step 1: Configure the portable website execution profile**

Run:

```powershell
node 'C:\Users\18841\.codex\plugins\cache\openai-curated-remote\sites\0.1.65\scripts\configure-execution-profile.mjs'
```

Expected: the script identifies the portable profile or reports that this plain static project needs no starter changes.

- [ ] **Step 2: Write the failing site contract test**

Create `tests/site.test.mjs`:

```javascript
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, projectRoot), "utf8");

test("homepage exposes the approved identity, copy, metadata, and link", async () => {
  const html = await read("index.html");

  assert.match(html, /<html lang="en">/);
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1">/);
  assert.match(html, /<meta name="description" content="Personal website of scy2004\. Coming soon\.">/);
  assert.match(html, /<title>scy2004<\/title>/);
  assert.match(html, /href="favicon\.svg"/);
  assert.match(html, /<main class="home">/);
  assert.match(html, /<h1>scy2004<\/h1>/);
  assert.match(html, /Personal website coming soon\./);
  assert.match(html, /href="https:\/\/github\.com\/scy2004"/);
  assert.match(html, /aria-label="View scy2004 on GitHub"/);
});

test("stylesheet provides readable responsive layout safeguards", async () => {
  const css = await read("styles.css");

  assert.match(css, /min-height:\s*100svh/);
  assert.match(css, /font-size:\s*clamp\(/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /@media\s*\(max-width:\s*40rem\)/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
});

test("favicon and Jekyll bypass files exist", async () => {
  const favicon = await read("favicon.svg");

  assert.match(favicon, /<svg[^>]+viewBox="0 0 64 64"/);
  assert.match(favicon, /aria-hidden="true"/);
  await access(new URL(".nojekyll", projectRoot));
});
```

- [ ] **Step 3: Run the contract test and verify it fails**

Run:

```powershell
node --test tests/site.test.mjs
```

Expected: FAIL with `ENOENT` for `index.html`, `styles.css`, or `favicon.svg` because the site has not been created yet.

- [ ] **Step 4: Create the semantic homepage document**

Create `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Personal website of scy2004. Coming soon.">
    <meta name="color-scheme" content="light dark">
    <meta name="theme-color" content="#0b1020">
    <title>scy2004</title>
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main class="home">
      <section class="intro" aria-labelledby="page-title">
        <p class="eyebrow">Personal website</p>
        <h1 id="page-title">scy2004</h1>
        <p class="status">Personal website coming soon.</p>
        <a class="profile-link" href="https://github.com/scy2004" aria-label="View scy2004 on GitHub">
          View GitHub profile
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  </body>
</html>
```

- [ ] **Step 5: Create the responsive visual system**

Create `styles.css`:

```css
:root {
  color-scheme: dark;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #0b1020;
  color: #f5f7ff;
}

* {
  box-sizing: border-box;
}

html {
  background: #0b1020;
}

body {
  margin: 0;
  min-width: 0;
  background:
    radial-gradient(circle at 85% 15%, rgb(94 116 255 / 18%), transparent 32rem),
    #0b1020;
}

.home {
  display: grid;
  min-height: 100svh;
  place-items: center;
  padding: clamp(1.5rem, 5vw, 5rem);
}

.intro {
  width: min(100%, 54rem);
  border-left: 0.25rem solid #7890ff;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  background: rgb(17 25 49 / 78%);
  box-shadow: 0 2rem 6rem rgb(0 0 0 / 25%);
  backdrop-filter: blur(1rem);
}

.eyebrow {
  margin: 0 0 1.25rem;
  color: #aebcff;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 12vw, 7.5rem);
  font-weight: 720;
  letter-spacing: -0.065em;
  line-height: 0.92;
  overflow-wrap: anywhere;
}

.status {
  margin: 2rem 0 2.5rem;
  color: #c8cee0;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: 1.7;
}

.profile-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  min-height: 2.75rem;
  color: #f5f7ff;
  font-size: 1rem;
  font-weight: 650;
  text-decoration-color: #7890ff;
  text-decoration-thickness: 0.12rem;
  text-underline-offset: 0.35rem;
  transition: color 160ms ease, text-decoration-color 160ms ease;
}

.profile-link:hover,
.profile-link:focus-visible {
  color: #bcc7ff;
  text-decoration-color: #bcc7ff;
}

.profile-link:focus-visible {
  border-radius: 0.2rem;
  outline: 0.2rem solid #aebcff;
  outline-offset: 0.35rem;
}

@media (max-width: 40rem) {
  .home {
    place-items: end stretch;
  }

  .intro {
    border-left-width: 0.2rem;
    padding-inline: 1.25rem 0.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .profile-link {
    transition: none;
  }
}
```

- [ ] **Step 6: Add the favicon and bypass Jekyll processing**

Create `favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-hidden="true">
  <rect width="64" height="64" rx="14" fill="#0b1020"/>
  <path d="M18 22c0-6 5-10 14-10 6 0 11 2 15 5l-6 8c-3-2-6-3-9-3-3 0-5 1-5 3 0 2 2 3 8 4 10 2 14 6 14 13 0 7-6 11-15 11-8 0-14-2-19-7l7-8c4 3 8 5 12 5 4 0 6-1 6-3 0-2-2-3-8-4-9-2-14-6-14-14Z" fill="#7890ff"/>
</svg>
```

Create an empty `.nojekyll` file.

- [ ] **Step 7: Run local verification**

Run:

```powershell
node --test tests/site.test.mjs
git diff --check
```

Expected: all 3 Node tests PASS and `git diff --check` prints no errors.

- [ ] **Step 8: Preview the page at desktop and mobile widths**

Run a local static server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/`, inspect at approximately 1440×900 and 390×844, and verify readable text, no unintended horizontal scrolling, a visible focus state, and a working GitHub link. Stop the server after inspection.

- [ ] **Step 9: Commit the verified homepage**

Run:

```powershell
git add -- index.html styles.css favicon.svg .nojekyll tests/site.test.mjs
git commit -m "feat: add personal homepage placeholder"
```

Expected: a new commit containing only the site and its contract test.

### Task 2: Publish and verify GitHub Pages

**Files:**
- Modify: local Git branch name from `master` to `main`.
- External: create `https://github.com/scy2004/scy2004.github.io` and configure its Pages source.

**Interfaces:**
- Consumes: the verified root-level static files and authenticated GitHub CLI session for `scy2004`.
- Produces: public repository `scy2004/scy2004.github.io` and live site `https://scy2004.github.io/`.

- [ ] **Step 1: Reconfirm repository availability and authentication**

Run:

```powershell
gh auth status
gh api repos/scy2004/scy2004.github.io
```

Expected: authentication succeeds and the repository lookup returns HTTP 404. If the repository now exists, inspect it and stop before overwriting or attaching this checkout.

- [ ] **Step 2: Rename the local default branch and create the public repository**

Run:

```powershell
git branch -M main
gh repo create scy2004/scy2004.github.io --public --source=. --remote=origin --push --description "Personal website for scy2004" --homepage "https://scy2004.github.io/"
```

Expected: GitHub creates the repository, adds `origin`, and pushes `main` without rewriting local history.

- [ ] **Step 3: Enable branch-based GitHub Pages**

Run:

```powershell
gh api --method POST repos/scy2004/scy2004.github.io/pages -H 'Accept: application/vnd.github+json' -H 'X-GitHub-Api-Version: 2026-03-10' -F 'source[branch]=main' -F 'source[path]=/'
```

Expected: HTTP 201 with `html_url` equal to `https://scy2004.github.io/`. If GitHub already enabled Pages automatically and returns HTTP 409, verify the existing configuration with the next step instead of creating a second site.

- [ ] **Step 4: Verify the Pages configuration and deployment state**

Run:

```powershell
1..6 | ForEach-Object {
  $pagesState = gh api repos/scy2004/scy2004.github.io/pages | ConvertFrom-Json
  $pagesState | Select-Object status, html_url, https_enforced, @{Name='branch'; Expression={$_.source.branch}}, @{Name='path'; Expression={$_.source.path}}
  if ($pagesState.status -eq 'built') { break }
  Start-Sleep -Seconds 8
}
```

Expected: `html_url` is `https://scy2004.github.io/`, branch is `main`, path is `/`, and status eventually becomes `built`.

- [ ] **Step 5: Verify the public page content**

Run:

```powershell
$response = Invoke-WebRequest -Uri 'https://scy2004.github.io/' -UseBasicParsing
$response.StatusCode
$response.Content | Select-String -SimpleMatch 'Personal website coming soon.'
```

Expected: status code `200` and the published HTML contains `Personal website coming soon.`. If GitHub is still building after the bounded status checks, repeat Step 4 once before retrying this request; do not change the site source.

### Task 3: Record the live handoff

**Files:**
- Modify: `PROJECT_CONTEXT.md`

**Interfaces:**
- Consumes: the verified repository URL, Pages source, and live HTTP result from Task 2.
- Produces: durable project status identifying the live site and the next content phase.

- [ ] **Step 1: Update the project context with verified publication state**

Replace the current-state section in `PROJECT_CONTEXT.md` with factual results from Task 2, including:

```markdown
## Current state

- GitHub account: `scy2004`.
- Repository: `https://github.com/scy2004/scy2004.github.io`.
- Live site: `https://scy2004.github.io/`.
- GitHub Pages publishes the repository root from the `main` branch.
- The first version is a verified dependency-free static placeholder.
- Personal biography, research, publication, project, and contact content remains intentionally unfilled.
```

Set the next steps to collecting confirmed personal content and optionally selecting a custom domain.

- [ ] **Step 2: Commit and push the handoff record**

Run:

```powershell
git add -- PROJECT_CONTEXT.md
git commit -m "docs: record homepage publication"
git push origin main
```

Expected: the context commit is present locally and on `origin/main`.

- [ ] **Step 3: Run final verification**

Run:

```powershell
node --test tests/site.test.mjs
git status --short --branch
gh repo view scy2004/scy2004.github.io --json url,visibility,defaultBranchRef,homepageUrl
```

Expected: all tests PASS; the worktree is clean and tracks `origin/main`; the repository is public, its default branch is `main`, and its homepage URL is `https://scy2004.github.io/`.
