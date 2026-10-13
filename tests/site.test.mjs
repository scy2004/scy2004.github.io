import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(root, path), "utf8");

test("publishes the approved identity and contact links", () => {
  const html = read("index.html");

  assert.match(html, /<html[^>]+lang="en"/i);
  assert.match(html, /<title>Chengyi Sun[^<]*<\/title>/i);
  assert.match(html, /Chengyi Sun/);
  assert.match(html, /孙成一/);
  assert.match(html, /AI Researcher · Beijing, China/);
  assert.match(html, /mailto:shengminmail@163\.com/);
  assert.match(html, /https:\/\/github\.com\/scy2004/);
  assert.match(html, /University of Science and Technology Beijing/);
  assert.match(html, /Institute of Automation, Chinese Academy of Sciences/);
  assert.match(html, /LINs Lab, Westlake University/);
});

test("contains every approved section and working in-page navigation target", () => {
  const html = read("index.html");
  const requiredIds = ["about", "research", "work", "experience", "education"];

  for (const id of requiredIds) {
    assert.match(html, new RegExp(`href="#${id}"`));
    assert.match(html, new RegExp(`id="${id}"`));
  }

  assert.match(html, /<main[^>]*id="main-content"/i);
  assert.match(html, /class="[^"]*skip-link[^"]*"[^>]*href="#main-content"/i);
});

test("presents the three research directions and three under-review works", () => {
  const html = read("index.html");

  for (const heading of [
    "Judgment for Recursive Self-Improvement",
    "Agentic Multimodal Interaction",
    "Vision-Language Model Post-Training",
    "DIVE: Making Judgment a First-Class Capability in Long-Horizon Agents",
    "Attachment-Inspired Inherent Formation of Social Tendencies for LLM Agents",
    "CALLOSUM: One Path between Seeing, Search, and Speaking",
  ]) {
    assert.ok(html.includes(heading), `Missing approved heading: ${heading}`);
  }

  assert.equal((html.match(/data-status="under-review"/g) ?? []).length, 3);
  assert.match(html, /Shanghai AI Laboratory/);
  assert.match(html, /Electronic Medical Record Risk Assessment with Multi-Agent Graph RAG/);
  assert.match(html, /B\.Eng\. in Intelligent Construction/);
});

test("does not expose private or unsupported resume fields", () => {
  const html = read("index.html");

  assert.doesNotMatch(html, /\b1[3-9]\d{9}\b/);
  assert.doesNotMatch(html, /\b(?:CV|Résumé|Resume)\b/i);
  assert.doesNotMatch(html, /LinkedIn|Google Scholar/i);
  assert.doesNotMatch(html, /\b(?:GPA|class rank)\b/i);
  assert.doesNotMatch(html, /coming soon|to be added|TBD|placeholder/i);
  assert.doesNotMatch(html, /NeurIPS|AAAI|EMNLP/i);
});

test("ships complete local assets and accessible responsive styling", () => {
  const html = read("index.html");
  const css = read("styles.css");

  assert.match(html, /<meta[^>]+name="viewport"/i);
  assert.match(html, /href="favicon\.svg"/i);
  assert.match(html, /src="assets\/profile\.jpg"[^>]+alt="Portrait of Chengyi Sun"/i);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\s*\([^)]*max-width:\s*760px/i);
  assert.match(css, /prefers-reduced-motion:\s*reduce/i);
  assert.ok(existsSync(join(root, ".nojekyll")), ".nojekyll is missing");
  assert.ok(existsSync(join(root, "favicon.svg")), "favicon.svg is missing");
  assert.ok(existsSync(join(root, "assets", "profile.jpg")), "profile.jpg is missing");
  assert.ok(statSync(join(root, "assets", "profile.jpg")).size > 10_000, "profile.jpg is unexpectedly small");
});

test("all local href and src targets exist", () => {
  const html = read("index.html");
  const targets = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
  const localTargets = targets.filter((target) => !/^(?:#|https?:|mailto:)/.test(target));

  for (const target of localTargets) {
    assert.ok(existsSync(join(root, target)), `Broken local asset reference: ${target}`);
  }
});
