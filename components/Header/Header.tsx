'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Madison', href: '/' },
  { name: 'Brand Audit', href: '/brand-audit' },
  { name: 'Branding & AI', href: '/branding-ai' },
  { name: 'Criteria', href: '/criteria' },
  { name: 'Tools', href: '/tools' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isMenuOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="https://www.humanitarians.ai/" className="flex items-center gap-2" aria-label="Humanitarians AI homepage">
            <span className="text-xl font-bold tracking-tighter">Humanitarians AI</span>
            <span className="hidden border-l pl-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:inline">Madison</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn('text-sm font-medium transition-colors hover:text-foreground', active ? 'text-foreground' : 'text-foreground/60')}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <a href="https://www.youtube.com/@HumanitariansAI" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              YouTube
            </a>
            <a href="https://www.humanitarians.ai/donate" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
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

      {isMenuOpen && (
        <div ref={menuRef} className="border-t bg-background p-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <a href="https://www.youtube.com/@HumanitariansAI" target="_blank" rel="noopener noreferrer" className="text-base font-medium">YouTube</a>
            <a href="https://www.humanitarians.ai/donate" target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground">Donate</a>
          </nav>
        </div>
      )}
    </header>
  )
}
