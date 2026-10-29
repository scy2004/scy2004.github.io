# Project Context

## Current state

- GitHub account: `scy2004`.
- Target public URL: `https://scy2004.github.io/`.
- The public repository `https://github.com/scy2004/scy2004.github.io` was created and the site was published from the `main` branch on 2026-10-13.
- GitHub Pages reports `built`; the public URL returns HTTP 200 and contains the verified name and primary research direction.
- The original placeholder design and plan are superseded by the research-homepage V1 design.
- The research-homepage V1 design is recorded in `docs/superpowers/specs/2026-10-02-ai-researcher-homepage-v1-design.md` and has been implemented.
- A complete Chinese review copy is recorded in `docs/superpowers/specs/2026-10-02-ai-researcher-homepage-v1-design.zh-CN.md`; user edits to this review copy should be synchronized back to the English specification before implementation.
- The user supplied public identity, affiliation, research, email, GitHub, portrait, and resume facts.
- The user confirmed the three named works are not under double-blind anonymity and may be shown publicly as `Under Review`.
- The outdoor portrait's temporary attachment path expired before implementation. V1 uses the unaltered 480x560 formal portrait embedded in the supplied resume; it can be replaced later without layout changes.
- Six Node contract tests pass. Browser QA passed at 1440px, 390px, and 320px with no horizontal page overflow, broken images, or console errors.

## Key decisions

- Publish as the GitHub Pages user site rather than a project subpath.
- Use a dependency-free static English research homepage with a warm academic editorial style.
- Lead with three research directions: judgment and recursive self-improvement, agentic multimodal interaction, and VLM post-training.
- Use selected under-review work and verified experience to add depth without inventing publication metadata or achievements.
- Omit visible empty sections and private resume information.
- Do not include a resume download, phone number, Scholar placeholder, LinkedIn, news, awards, or research notes in V1.
- Keep custom-domain binding for a later phase.
- On 2026-10-29, the user requested that CASIA internship supervision be omitted. All current homepage mentions of Ran He have been removed; Feifei Zhao is the user-supplied fallback only if naming a CASIA mentor becomes necessary, and is not currently displayed.
- Keep the introduction research-first: use `AI Researcher`, omit undergraduate status and USTB from the hero, portrait caption, About lead, and search description. Retain education as one compact bottom row (`USTB · B.Eng. in Intelligent Construction`, 2023–2027 expected), without a navigation item, large headline, or school emblem.
- Prof. Tao Lin remains identified only with LINs Lab, Westlake University.

## Next steps

1. Collect complete publication metadata and public paper, code, or project links when available.
2. Replace `assets/profile.jpg` if the user prefers the original outdoor portrait.
3. Add a detailed LINs Lab role and date range when supplied.
4. Consider a bilingual version and custom domain in a later phase.
