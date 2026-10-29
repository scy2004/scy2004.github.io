# Chengyi Sun AI Research Homepage V1 Design

> Updated 2026-10-29: omit the CASIA mentor name, lead with AI research rather than undergraduate status, and keep education as one compact bottom row.

## 1. Goal

Create the first public version of Chengyi Sun's AI research homepage at `https://scy2004.github.io/`.

The page should establish a credible research identity even though the publication record is still developing. It will lead with research questions and selected work, then use verified research experience and one completed earlier project to add depth. It must not invent affiliations, results, publication venues, links, or achievements.

## 2. Audience and primary message

The primary audience is AI researchers, potential supervisors, research collaborators, and research internship reviewers.

The page should communicate:

> Chengyi Sun is an AI researcher studying recursive self-improvement and long-horizon agents, with broader interests in agentic multimodal interaction and vision-language model post-training.

The main positioning sentence will be:

> I study recursive self-improvement and long-horizon agents, with a focus on how AI systems can train, evaluate, and improve other AI systems, and how foundation models and simulators can co-evolve on shared infrastructure.

## 3. Public information boundary

The following information is approved for the first public version:

- Name: `Chengyi Sun` and `孙成一`.
- Public-facing identity: AI researcher; degree information is confined to the compact education row.
- Location: Beijing, China.
- University and research affiliations:
  - University of Science and Technology Beijing (USTB).
  - Institute of Automation, Chinese Academy of Sciences (CASIA).
  - Learning and INference Systems Laboratory (LINs Lab), Westlake University.
- Mentor: Prof. Tao Lin, associated specifically with LINs Lab. Omit the CASIA mentor name.
- Email: `shengminmail@163.com`.
- GitHub: `https://github.com/scy2004`.
- The user-supplied portrait photo.
- The three supplied research-work titles and their `Under Review` status. The user confirmed that they are not subject to double-blind anonymity.
- Education and research-internship facts verified from the supplied resume.

The following information must not appear in V1:

- Phone number, age, gender, political status, or hometown.
- A resume download or embedded resume.
- Google Scholar or LinkedIn placeholders.
- Unconfirmed publication venues, author lists, metrics, paper links, code links, or project URLs.
- News, awards, academic service, and research-note sections without supplied content.
- Visible blank fields or other unfinished-page labels.

Missing sections are omitted from navigation and rendering. The source structure should make them easy to add later.

## 4. Page structure

The first version is a single long-scroll English page. The Chinese name appears beside the English name, but V1 does not include a language switch.

The navigation is:

`About · Research · Selected Work · Experience`

### 4.1 Header and navigation

- Left: compact `Chengyi Sun` wordmark.
- Right: anchor navigation plus an emphasized email link.
- Sticky on desktop and horizontally scrollable or compact on mobile.
- No hamburger menu or JavaScript-only navigation is required.

### 4.2 Hero

The hero uses a two-column layout: research identity on the left and the user-supplied portrait on the right.

Content:

- Eyebrow: `AI Researcher · Beijing, China`
- Heading: `Chengyi Sun`
- Secondary name: `孙成一`
- Role: `AI researcher working on recursive self-improvement and long-horizon agents.`
- Positioning sentence from Section 2.
- Affiliation line: `CASIA · LINs Lab, Westlake University`
- Links: `Email` and `GitHub` only.

The portrait is displayed without generative alteration. CSS crops it to a restrained editorial frame with `object-fit: cover`; the original image remains the source asset.

### 4.3 About

Use the following English copy:

> My research spans recursive self-improvement, long-horizon agents, real-time multimodal interaction, and vision-language model post-training. I am especially interested in systems that improve not only what an agent can do, but also how it decides when to continue, verify, revise direction, or stop.

> I conduct research with LINs Lab at Westlake University under the guidance of Prof. Tao Lin, and with the Institute of Automation, Chinese Academy of Sciences. My broader goal is to study how foundation models, simulators, and research infrastructure can support the continual improvement of AI systems.

No unsupported publication count, citation count, or broad capability claim is shown.

### 4.4 Research agenda

This is the core section. It contains exactly three numbered research directions.

#### 01. Judgment for Recursive Self-Improvement

Question:

> How can long-horizon agents judge whether to continue, verify, revise direction, ask for help, or stop before taking further action?

Description:

> I study reusable judgment procedures and host-integrated intervention loops that make intermediate decisions explicit and measurable. The goal is to improve an agent's direction and control before simply giving it more execution capacity.

Related work: `DIVE` and the Bravehub systems (`bravejev-harness`, `jevbrave-research`).

#### 02. Agentic Multimodal Interaction

Question:

> How can generative models become adaptive agents that integrate video, audio, and evolving human context in real time?

Description:

> I am interested in agentic generation, self-improving generative models, and interactive world models that can adapt their behavior across environments and tasks while reasoning about the next relevant human state or intent.

Related work: `Attachment-Inspired Inherent Formation of Social Tendencies for LLM Agents`.

#### 03. Vision-Language Model Post-Training

Question:

> How can post-training improve generation without weakening visual understanding, retrieval, and grounded reasoning?

Description:

> I study the balance between understanding and generation in vision-language models, including training paths that connect seeing, search, and speaking in a unified system.

Related work: `CALLOSUM: One Path between Seeing, Search, and Speaking`.

### 4.5 Selected work

Use a vertical editorial list rather than publication cards. Each item includes an index, status, title, and short description. No venue, author list, paper link, code link, or quantitative result is shown until supplied and verified.

#### DIVE: Making Judgment a First-Class Capability in Long-Horizon Agents

- Status: `Under Review`.
- Description: `A framework that represents reusable agent judgment as Cognitive Judgment Skills and connects them to execution through a Detect-Invoke-Verify loop, making intermediate decisions, implementation costs, and action consequences separately measurable.`
- Related systems: `Bravehub · bravejev-harness · jevbrave-research`.

#### Attachment-Inspired Inherent Formation of Social Tendencies for LLM Agents

- Status: `Under Review`.
- Description: `An exploration of how attachment-inspired mechanisms can support the formation and adaptation of social tendencies in LLM agents.`

#### CALLOSUM: One Path between Seeing, Search, and Speaking

- Status: `Under Review`.
- Description: `A vision-language post-training study connecting visual understanding, search, and language generation while examining the balance between retrieval and generation.`

Under-review work is labeled only as `Under Review`; no unconfirmed venue is named.

### 4.6 Research experience

Use a compact timeline with only verified roles.

#### Institute of Automation, Chinese Academy of Sciences

- Role: `Research Intern`.
- Time: `Nov 2025 - Present`.
- Advisor: omitted from the public page.
- Focus: `Long-horizon agents, multimodal agents, and agent evaluation.`

#### Shanghai AI Laboratory

- Role: `Research Intern`.
- Time: `Jan 2026 - May 2026`.
- Focus: `Vision-language model adaptation and post-training.`

The LINs Lab relationship appears in the hero and About section. A separate timeline entry is deferred until the user supplies an exact role and date range.

### 4.7 Earlier project

Include one restrained project card to add verified depth without diluting the current research agenda.

#### Electronic Medical Record Risk Assessment with Multi-Agent Graph RAG

- Time: `Jan 2024 - Aug 2025`.
- Description: `Built a medical risk-assessment prototype combining a domain knowledge graph, Graph RAG, chain-of-thought reasoning, and a multi-agent verification pipeline for electronic medical records.`
- Do not show competition awards or quantitative dataset claims in V1 because the user asked to leave the awards section empty and has not provided public project links.

### 4.8 Education

Display one compact bottom row, without a navigation link, large heading, or school emblem:

- `USTB · B.Eng. in Intelligent Construction`
- `2023 — 2027 (expected)`

GPA, rank, thesis, and coursework are omitted because no values were supplied.

### 4.9 Footer

- `Chengyi Sun · Beijing, China`
- Email and GitHub links.
- `Last updated October 2026`.
- No phone number, CV link, Scholar link, analytics, or visitor counter.

## 5. Visual direction

The design follows an academic editorial direction inspired primarily by Yi-Fan Zhang's research-first homepage, with a small amount of Renwei Meng's structured project presentation.

- Warm paper-like background: approximately `#f8f1e7`.
- Main text: charcoal, approximately `#2f3335`.
- Accent: restrained indigo or academic blue, approximately `#2d50cc`.
- Serif headings using a system-safe Georgia stack.
- Sans-serif body using a system UI stack.
- Content width: approximately `1080px`.
- Generous vertical spacing and thin rules instead of heavy card borders.
- Hero uses an asymmetric text/photo split.
- Research directions use three numbered cards on desktop and one column on mobile.
- Selected work is a vertical list with status labels, not a dense publication grid.
- Experience is a timeline with dates aligned separately on desktop.
- No particle effects, 3D background, autoplay media, carousel, large animated gradients, skill percentages, or decorative stock imagery.

## 6. Responsive and accessibility behavior

- Support mobile widths from `320px` and desktop widths through large displays.
- Collapse the hero and research cards to one column on narrow screens.
- Keep body text at `16px` or larger and maintain readable line length.
- Provide visible keyboard focus states and semantic section headings.
- Use meaningful image alternative text: `Portrait of Chengyi Sun`.
- Respect `prefers-reduced-motion`.
- External links open normally without forcing a new tab.
- The site remains readable if the portrait fails to load.

## 7. Technical architecture

Use a dependency-free static GitHub Pages site:

- `index.html`: semantic page structure and all V1 content.
- `styles.css`: visual system and responsive behavior.
- `assets/profile.jpg`: a copy of the user-supplied portrait.
- `favicon.svg`: a simple `CS` monogram favicon.
- `.nojekyll`: bypass Jekyll processing.
- `tests/site.test.mjs`: Node built-in tests for required content, links, status labels, metadata, image references, and privacy exclusions.

No framework, package manager, database, backend, form, analytics service, or client-side state is required.

## 8. Verification and publication

Before publication:

- Verify required text, metadata, email, GitHub URL, image path, and all section anchors.
- Verify excluded private fields and unavailable links do not appear.
- Verify all three works are labeled `Under Review` with no venue claim.
- Inspect the page at mobile and desktop widths for clipping, overflow, contrast, and portrait crop.
- Confirm the local site serves without missing assets.

Publication target:

- Public repository: `scy2004/scy2004.github.io`.
- Default branch: `main`.
- GitHub Pages source: repository root.
- Public URL: `https://scy2004.github.io/`.
- After deployment, require HTTP 200 and confirm that the live HTML contains `Chengyi Sun` and the three research directions.

## 9. Explicitly deferred additions

The following are deferred until the user supplies verified content:

- Complete publication metadata and paper/code/project links.
- Google Scholar.
- A detailed LINs Lab role and date range.
- Additional projects, news, awards, academic service, talks, and research notes.
- Chinese-language version.
- Custom domain.

These additions must extend the existing structure rather than creating visible empty sections in V1.
