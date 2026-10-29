# Project Context

## Current state

- GitHub account: `scy2004`.
- Target public URL: `https://scy2004.github.io/`.
- The public repository `https://github.com/scy2004/scy2004.github.io` was created and the site was published from the `main` branch on 2026-10-13.
- GitHub Pages reports `built`; the public URL returns HTTP 200 and contains the verified name and primary research direction.
- The original placeholder design and plan are superseded by the research-homepage V1 design.
- The original V1 design is recorded in `docs/superpowers/specs/2026-10-02-ai-researcher-homepage-v1-design.md`. The 2026-10-29 user-edited content review and final instructions supersede its old copy, research order, paper order, and portrait.
- A complete Chinese review copy is recorded in `docs/superpowers/specs/2026-10-02-ai-researcher-homepage-v1-design.zh-CN.md`; user edits to this review copy should be synchronized back to the English specification before implementation.
- The user supplied public identity, affiliation, research, email, GitHub, portrait, and resume facts.
- The user confirmed the three named works are not under double-blind anonymity and may be shown publicly as `Under Review`.
- The 2026-10-29 revision uses the user's newly attached outdoor portrait, copied byte-for-byte to `assets/profile.jpg` (1279x1708; SHA-256 `54a949ecb5c4f880a471e55d63d1285e9e333de037afbe76e29d5795c0d75fce`). Display framing is CSS-only; the portrait and stylesheet use a version query for cache refresh.
- Eight Node contract tests pass. The latest page was visually checked at desktop, 390px and 320px widths; the narrow-screen document has no horizontal overflow and the new image loads correctly.
- Release verification (2026-10-29): public content commit `d1c60f2680b4a60fb9caaf12bb89406639bbcdc4` is Pages `built`. Live HTML confirms the four-paper order, three Under Review plus one In Revision status, author labels, PCCC-RL contribution copy, soul-agent wording, Vidu, title-only projects and compact education. Public portrait SHA-256 matches the attached original; stylesheet HTTP 200. This verification receipt is a local handoff update.

## Key decisions

- Publish as the GitHub Pages user site rather than a project subpath.
- Use a dependency-free static English research homepage with a warm academic editorial style.
- Lead with multimodal generation/interaction and Code World Models alongside long-horizon judgment/RSI. Use three compact keyword/related-work cards, with post-training/model collaboration as the third direction.
- Use selected under-review work and verified experience to add depth without inventing publication metadata or achievements.
- Omit visible empty sections and private resume information.
- Do not include a resume download, phone number, Scholar placeholder, LinkedIn, news, awards, or research notes in V1.
- Keep custom-domain binding for a later phase.
- On 2026-10-29, the user requested that CASIA internship supervision be omitted. All current homepage mentions of Ran He have been removed; Feifei Zhao is the user-supplied fallback only if naming a CASIA mentor becomes necessary, and is not currently displayed.
- Keep the introduction research-first: use `AI Researcher`, omit undergraduate status and USTB from the hero, portrait caption, About lead, and search description. Retain education as one compact bottom row (`USTB · B.Eng. in Intelligent Construction`, 2023–2027 expected), without a navigation item, large headline, or school emblem.
- The latest user-edited About introduces research roles/collaborations rather than named mentors. It includes CASIA long-term research, Westlake summer research in 2026, Shanghai AI Lab collaboration, and current Vidu collaboration.
- Latest affiliation correction (2026-10-29): CASIA research is `agent safety and long-horizon agents`; LINs Lab summer research is `long-horizon agents and recursive self-improvement`. Keep these topics attached to the correct institutions in both About and Experience.
- Vidu is a research collaboration, not an employment entry. Keep `CASIA · LINs Lab, Westlake University` as the main hero affiliation line, followed by a smaller muted `Research collaboration with Vidu`. Remove the large Vidu/ShengShu timeline heading and use a compact collaboration note after the institutional timeline. The company name ShengShu is no longer displayed on the page.

## Next steps

- The 2026-10-29 review is complete and the user explicitly authorized implementation/publication. Local review authority is `docs/个人主页内容更新_中文审核稿_v2_2026-10-29.md`, including user edits and the final PCCC-RL/social-agent/portrait instructions. Preserve the user-edited first review; local draft files and review image assets are not staged for publication.
- Research-interest related rows use `Building a benchmark`; `DIVE · PCCC-RL`; and `CALLOSUM · CacheBridge · Building an RSI system`.
- Final paper order: DIVE, CALLOSUM, Attachment-Inspired Inherent Formation of Social Tendencies for LLM Agents, PCCC-RL. DIVE is first author; the other three are co-first author, listed second. DIVE/CALLOSUM/PCCC-RL are Under Review. The user's latest draft changes the social-agent paper to `重构论文中`, rendered as `In Revision`.
- PCCC-RL copy covers paired replay from the same saved state, credit prediction for every action, inverse-probability residual correction on randomized replays, cost-aware budget allocation, and history-only alternatives. The social paper describes interaction and mechanisms for personalized soul agents without claiming a finished product.
- The two in-progress projects are titles only: `构建一个针对 code2generation 反馈闭环缺失的 benchmark` and `基座模型和模拟器协同进化 infra pipeline 的构建`; descriptions remain empty and no visible placeholder copy is planned.
- Supporting alley image copies remain local under `docs/review-assets/2026-10-29/`; no project illustrations appear on the homepage. Keep CASIA mentor omission and compact education intact.

1. Collect complete publication metadata and public paper, code, or project links when available.
2. Add substantive project descriptions when the user chooses to publish them.
3. Add exact collaboration dates or public paper links when supplied.
4. Consider a bilingual version and custom domain in a later phase.
