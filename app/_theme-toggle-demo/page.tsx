"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor } from "lucide-react"

export default function ThemeToggleDemo() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Theme Toggle Demo</h1>

        <div className="p-8 border rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Current Theme: {theme}</h2>
          <p className="mb-6">
            The theme is stored in localStorage and persists across page refreshes and navigation. Try switching themes
            and then navigating to other pages - your preference will be remembered.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              onClick={() => setTheme("light")}
              className="flex items-center gap-2"
            >
              <Sun className="h-4 w-4" />
              Light
            </Button>

            <Button
              variant={theme === "dark" ? "default" : "outline"}
              onClick={() => setTheme("dark")}
              className="flex items-center gap-2"
            >
              <Moon className="h-4 w-4" />
              Dark
            </Button>

            <Button
              variant={theme === "system" ? "default" : "outline"}
              onClick={() => setTheme("system")}
              className="flex items-center gap-2"
            >
              <Monitor className="h-4 w-4" />
              System
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
            <h3 className="text-xl font-bold mb-2">Light and Dark Mode Example</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This box changes appearance based on the current theme. In light mode, it has a white background. In dark
              mode, it has a dark background.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg border dark:border-gray-700">
            <h3 className="text-xl font-bold mb-2">Another Example</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Different components can have different styling based on the theme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-black text-white dark:bg-white dark:text-black rounded-lg">
              <h3 className="text-xl font-bold mb-2">Inverted Colors</h3>
              <p>This box inverts its colors completely between themes.</p>
            </div>

            <div className="p-6 bg-primary text-primary-foreground rounded-lg">
              <h3 className="text-xl font-bold mb-2">Using Theme Variables</h3>
              <p>This box uses Tailwind CSS theme variables that automatically adapt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
