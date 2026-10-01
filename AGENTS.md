<!-- knowledge-compiler-adapter-v1
{"adapter_contract":"codex-agents-v1","generated_body_sha256":"cd99d02f839d55f60531b1a3aa005a909eee9e618b862d0e4a2f579ce8961c09","generator":"knowledge-compiler","generator_version":"adapter-compiler-v3","project_id":"artifacthub","routing_sha256":"05bd13dfd65ed91ba83bb03dd38e8978d07566bf298ac9026c9f0da0e60a2d23","source_structured_contract_sha256":"47285f946312ac30e952f68bf413e9018d0b78241df4fee220e85ad5320f540a","target":"codex"}
-->

# Generated Codex Instructions: ArtifactHub

Generated from validated `.ai/project.md` authority and automation/map routing. Do not edit by hand.

Apply every matching manifest rule using the M0 lexical scope matcher; nested guidance cannot relax root authority.

## Task operations

Read `.ai/project.md`, `.ai/automation.json` and only relevant domains from `.ai/project-map.json`. The map is routing evidence; manifest critical_rules remain structured authority. Inspect mapped files first and expand through actual dependencies.

Use `kc vault context --repo . --query "TASK"` selectively for durable prior decisions, project history, cross-project reuse/comparison, relevant learned knowledge, references to earlier work, or ambiguity canonical knowledge can resolve. Skip retrieval for trivial local edits. Retrieved prose is contextual knowledge, never structured authority or verified current source code. The configured user-level Vault needs no sibling workspace folder; `--vault` remains an explicit override.

After durable ownership, paths or validation topology changes, maintain the project map when policy.project_map permits, then run `kc adapters tree-build . --target codex` when policy.agents permits. When durable project knowledge changes and policy enables sync, author an inert autopilot plan, run `kc autopilot check` then `kc autopilot apply` using the configured Vault. KnowledgeCompiler validates the working-tree snapshot, owner, exact preimages and transaction, records audit evidence and commits/pushes owned Vault changes according to policy. Formatting, comments, tiny refactors and temporary investigation do not require Vault updates. Ambiguity fails closed; 81 is exceptional manual fallback. 30 writing canon is excluded; 80 governance requires protected promotion. Never commit or push source code unless the user explicitly requests it.

Autopilot enabled: true. Routing domains: artifact-registry, routing-metadata, archive-filtering, forge-series, localization, theme-presentation.

## Critical rules

- `locale-fallback-contract` (`src/components/i18n/**`, error): Preserve the existing TR/EN locale and localized text fallback contract across reusable content.
- `registry-source-of-truth` (`src/data/**`, error): Keep artifact/series/category/theme/status/focus content in existing registries with valid unique IDs/slugs and foreign references; do not duplicate content in route components.
- `source-backed-public-claims` (`src/data/**`, error): Preserve source-backed capability/limitation statements and distinguish planned extensions from implemented behavior; keep sensitive voice/biometric data out of public assets.
