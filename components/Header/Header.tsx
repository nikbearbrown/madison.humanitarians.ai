'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

// Claude sub-navigation — static list matching what getActiveTypes() produces.
// Counts are on the index page; the header just lists type names.
const CLAUDE_TYPES = [
  { name: 'Skills', href: '/claude/skills' },
  { name: 'Plugins', href: '/claude/plugins' },
  { name: 'MCP Servers', href: '/claude/mcp-servers' },
]

const navigation = [
  { name: 'Brand Audit', href: '/brand-audit' },
  { name: 'Branding & AI', href: '/branding-ai' },
  { name: 'Brand Guidebook', href: '/brand-guidebook' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClaudeOpen, setIsClaudeOpen] = useState(false)
  const [isMobileClaudeOpen, setIsMobileClaudeOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)
  const claudeRef = useRef<HTMLDivElement>(null)

  // Close mobile menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setIsMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Close desktop Claude dropdown on outside click
  useEffect(() => {
    if (!isClaudeOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (
        claudeRef.current &&
        !claudeRef.current.contains(event.target as Node)
      )
        setIsClaudeOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isClaudeOpen])

  const isClaudeActive = pathname.startsWith('/claude')

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center" aria-label="Madison homepage">
            <span className="text-xl font-bold tracking-tighter">Madison</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-foreground',
                    active ? 'text-foreground' : 'text-foreground/60',
                  )}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Claude dropdown */}
            <div className="relative" ref={claudeRef}>
              <button
                type="button"
                onClick={() => setIsClaudeOpen((o) => !o)}
                className={cn(
                  'flex items-center gap-1 text-sm font-medium transition-colors hover:text-foreground',
                  isClaudeActive ? 'text-foreground' : 'text-foreground/60',
                )}
                aria-expanded={isClaudeOpen}
                aria-haspopup="menu"
              >
                Claude
                <ChevronDown
                  className={cn(
                    'h-3.5 w-3.5 transition-transform duration-150',
                    isClaudeOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>

              {isClaudeOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full mt-2 w-44 rounded-md border bg-background shadow-lg py-1"
                >
                  <Link
                    href="/claude"
                    role="menuitem"
                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    onClick={() => setIsClaudeOpen(false)}
                  >
                    All Tools
                  </Link>
                  <div className="my-1 border-t" />
                  {CLAUDE_TYPES.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      role="menuitem"
                      className={cn(
                        'block px-4 py-2 text-sm transition-colors hover:bg-muted',
                        pathname.startsWith(item.href)
                          ? 'text-foreground font-medium'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                      onClick={() => setIsClaudeOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://www.youtube.com/@HumanitariansAI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              YouTube
            </a>
            <a
              href="https://www.humanitarians.ai/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Donate
            </a>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="border-t bg-background p-6 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Claude expandable */}
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between text-base font-medium"
                onClick={() => setIsMobileClaudeOpen((o) => !o)}
                aria-expanded={isMobileClaudeOpen}
              >
                Claude
                <ChevronDown
                  className={cn(
                    'h-4 w-4 transition-transform duration-150',
                    isMobileClaudeOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
              {isMobileClaudeOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-3">
                  <Link
                    href="/claude"
                    className="text-sm text-muted-foreground hover:text-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Tools
                  </Link>
                  {CLAUDE_TYPES.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://www.youtube.com/@HumanitariansAI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium"
            >
              YouTube
            </a>
            <a
              href="https://www.humanitarians.ai/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground"
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
