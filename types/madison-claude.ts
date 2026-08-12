export interface MadisonEntry {
  /** "gomarble-ai__marketing-agent" — ledger slug */
  slug: string
  /** "gomarble-ai--marketing-agent" — URL-safe slug */
  urlSlug: string
  /** Raw type from audit: "skill" | "plugin" | "mcp-server" | "command" | "agent" */
  type: string
  /** Pluralised URL segment: "skills" | "plugins" | "mcp-servers" | "commands" | "agents" */
  typeSlug: string
  /** Marketing relevance category */
  category: 'content' | 'research' | 'productivity' | 'platform' | 'design' | 'data'
  /** Short human-readable reason from marketing-relevance.json */
  marketingReason: string
  name: string
  description: string
  owner: string
  repo: string
  /** https://github.com/{owner}/{repo} */
  repoUrl: string
  version: string
  keywords: string[]
  /** YYYY-MM-DD from receipts.audited_date */
  auditedDate: string
  /** Short commit SHA or null */
  commitSha: string | null
  portability: string
  /** coverage.label — e.g. "CLEARED_STATIC" */
  coverageLabel: string
  /** Checks that ran */
  coverageAssessed: string[]
  /** Checks that did NOT run */
  coverageNotAssessed: string[]
  /** Always false in current pipeline records */
  behaviorAssessed: boolean
  tests: {
    name: string
    by: string
    /** "ran" | "na" | "deferred" */
    state: string
    result_or_reason: string
  }[]
  forks: number | null
  lastCommit: string | null
}
