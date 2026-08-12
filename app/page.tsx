import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  TrendingUp,
  FileText,
  Search,
  MessageSquare,
  BarChart2,
  GitBranch,
  Globe,
  Activity,
  Layers,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Madison — Agentic Marketing & Branding Framework | Humanitarians AI',
  description:
    'An open-source, agent-based AI marketing intelligence framework for branding, marketing, and advertising. Five specialized agent layers coordinated by an orchestration layer.',
}

const agentLayers = [
  {
    icon: BarChart2,
    name: 'Intelligence Agents',
    body: 'Gather and analyze data to provide actionable insights into market dynamics and consumer sentiment through reputation monitoring and trend analysis.',
  },
  {
    icon: FileText,
    name: 'Content Agents',
    body: 'Create, optimize, and distribute marketing materials across channels with consistent brand voice and multi-platform adaptation.',
  },
  {
    icon: Search,
    name: 'Research Agents',
    body: 'Process data to uncover customer insights through automated survey analysis and synthetic persona development.',
  },
  {
    icon: MessageSquare,
    name: 'Experience Agents',
    body: 'Enhance customer interactions through AI concierge systems and customer journey transformation.',
  },
  {
    icon: TrendingUp,
    name: 'Performance Agents',
    body: 'Measure and optimize marketing outcomes through multi-armed bandit optimization and predictive analytics.',
  },
]

const coreTechnologies = [
  {
    name: 'Language Models & NLP',
    body: 'For brand voice personalization, content generation, and conversational AI applications.',
  },
  {
    name: 'Data Analysis Tools',
    body: 'For survey analysis, segmentation, and preference modeling across research applications.',
  },
  {
    name: 'Multi-Armed Bandit Systems',
    body: 'For continuous optimization and dynamic resource allocation in marketing campaigns.',
  },
  {
    name: 'Knowledge Graph Systems',
    body: 'For brand perception tracking and integrated market analysis.',
  },
]

const keyProjects = [
  {
    name: 'Brand Voice Personalization',
    body: 'Ensures consistent brand communication across all touchpoints through AI-powered voice analysis and parameter-efficient fine-tuning.',
  },
  {
    name: 'Multi-Armed Bandit Optimization',
    body: 'Optimizes content and campaigns through continuous experimentation using Thompson sampling and contextual bandits.',
  },
  {
    name: 'AI Concierge Systems',
    body: 'Deploys digital assistants for personalized customer experiences with conversational AI and journey mapping.',
  },
  {
    name: 'MarketMind Research',
    body: 'Conducts comprehensive secondary research on markets, competitors, and trends through systematic intelligence gathering.',
  },
]

const implementationFeatures = [
  {
    icon: GitBranch,
    name: 'Agent Orchestration',
    body: 'Coordinates all agents through cross-project validation, dynamic resource allocation, and pattern recognition across the marketing ecosystem.',
  },
  {
    icon: Globe,
    name: 'Open Source Framework',
    body: 'Transparent, collaborative development model that enables customization and integration with existing marketing technology stacks.',
  },
  {
    icon: Activity,
    name: 'Real-Time Intelligence',
    body: 'Continuous monitoring of market dynamics, social sentiment, and competitive landscapes with automated report generation.',
  },
  {
    icon: Layers,
    name: 'Scalable Architecture',
    body: 'Supports cloud, on-premises, or hybrid deployment with API-based integration and human-in-the-loop validation.',
  },
]

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-background text-foreground">

      {/* Hero */}
      <section className="w-full py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[860px] space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              A Humanitarians AI project
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl/none">
              Madison: Agentic Marketing &amp; Branding Framework
            </h1>
            <p className="max-w-[760px] text-lg text-muted-foreground md:text-xl">
              An open-source, agent-based AI marketing intelligence framework designed to transform branding, marketing, and advertising. Madison organizes specialized AI agents that collaborate under an orchestration layer to deliver cohesive, data-driven marketing solutions.
            </p>
            <div className="flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="https://github.com/Humanitariansai/Madison"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View on GitHub <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/brand-audit"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-semibold transition-colors hover:bg-muted"
              >
                See the brand audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the Framework */}
      <section className="w-full bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">About the framework</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Collaborative AI agents for data-driven marketing.</h2>
            <p className="text-lg text-muted-foreground">
              Madison (informally known as &ldquo;Mads and Madison&rdquo;) is an open-source, agent-based AI marketing intelligence framework that integrates specialized AI agents to deliver comprehensive marketing solutions. The framework maps projects to agent layers, details core technologies, and outlines implementation strategies for data-driven marketing.
            </p>
            <p className="text-muted-foreground">
              This experimental project emphasizes collaborative learning and innovation, allowing marketers to build tailored solutions for branding, customer experience, content creation, and market research through an integrated agent ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* The Five Agent Layers */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Architecture</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">The five agent layers.</h2>
            <p className="text-lg text-muted-foreground">
              Madison organizes specialized AI agents into five collaborative layers, each addressing distinct marketing challenges.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agentLayers.map(({ icon: Icon, name, body }) => (
              <article key={name} className="rounded-lg border bg-background p-6">
                <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold">{name}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </article>
            ))}
            <article className="rounded-lg border border-primary/30 bg-primary/5 p-6 sm:col-span-2 lg:col-span-1">
              <GitBranch className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold">Orchestration Layer</h3>
              <p className="mt-2 text-muted-foreground">
                Coordinates all agents through cross-project validation, dynamic resource allocation, and continuous learning.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="w-full bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Under the hood</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Core technologies.</h2>
            <p className="text-lg text-muted-foreground">
              The Madison framework leverages several technology categories coordinated by the orchestration layer.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {coreTechnologies.map(({ name, body }) => (
              <div key={name} className="rounded-lg border bg-background p-6">
                <h3 className="font-bold">{name}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Key projects</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Madison builds.</h2>
            <p className="text-lg text-muted-foreground">
              Active development tracks across branding, optimization, and market research.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {keyProjects.map(({ name, body }) => (
              <article key={name} className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Features */}
      <section className="w-full bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Implementation</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Built to integrate.</h2>
            <p className="text-lg text-muted-foreground">
              Madison is designed for real-world deployment alongside existing marketing technology stacks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {implementationFeatures.map(({ icon: Icon, name, body }) => (
              <div key={name} className="rounded-lg border bg-background p-6">
                <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 font-bold">{name}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Integration: Bellman & Popper */}
      <section className="w-full py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Framework integration</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Bellman &amp; Popper.</h2>
            <p className="text-lg text-muted-foreground">
              Madison integrates with two complementary frameworks to create a powerful ecosystem for intelligent, validated marketing.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border bg-background p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Bellman Framework</p>
              <h3 className="mt-2 text-xl font-bold">Reinforcement learning for marketing optimization.</h3>
              <p className="mt-3 text-muted-foreground">
                Brings classical reinforcement learning techniques to marketing applications — multi-armed bandit algorithms, RL-powered customer journeys, value-guided decision making, and adaptive brand voice policies.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Bandit algorithms for continuous content optimization
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Customer journeys modeled as RL environments
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Value function learning for long-term marketing impact
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-background p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Popper Framework</p>
              <h3 className="mt-2 text-xl font-bold">Computational skepticism &amp; rigorous validation.</h3>
              <p className="mt-3 text-muted-foreground">
                Brings evidence-based validation to marketing intelligence — systematically evaluating claims, detecting biases, falsification testing, and causal validation of marketing effectiveness.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Evidence-based evaluation of marketing claims
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Bias detection in data, content, and strategies
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Causal inference for marketing effectiveness
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-primary bg-muted p-6">
            <p className="font-semibold">Madison–Bellman–Popper synergy</p>
            <p className="mt-2 text-muted-foreground">
              The tri-framework integration addresses the fundamental challenges in modern marketing: moving beyond static A/B testing to continuous intelligent optimization, ensuring decisions are based on validated causal relationships, balancing exploration with exploitation, and quantifying uncertainty to enable better risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="w-full bg-muted py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-[760px] space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Get started</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore, build, and contribute.</h2>
            <p className="text-lg text-muted-foreground">
              Madison provides a comprehensive framework for AI-driven marketing intelligence, enhanced with Bellman&apos;s reinforcement learning capabilities and Popper&apos;s validation methodologies.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href="https://github.com/Humanitariansai/Madison"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border bg-background p-5 transition-colors hover:bg-background/80"
            >
              <div>
                <p className="font-semibold">GitHub Repository</p>
                <p className="mt-1 text-sm text-muted-foreground">Explore the codebase</p>
              </div>
              <ExternalLink className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            </a>
            <a
              href="https://www.humanitarians.ai/madison"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border bg-background p-5 transition-colors hover:bg-background/80"
            >
              <div>
                <p className="font-semibold">Project Website</p>
                <p className="mt-1 text-sm text-muted-foreground">humanitarians.ai/madison</p>
              </div>
              <ExternalLink className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            </a>
            <a
              href="mailto:info@humanitarians.ai"
              className="flex items-center justify-between rounded-lg border bg-background p-5 transition-colors hover:bg-background/80"
            >
              <div>
                <p className="font-semibold">Contact</p>
                <p className="mt-1 text-sm text-muted-foreground">info@humanitarians.ai</p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
