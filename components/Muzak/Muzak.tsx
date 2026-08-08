"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Muzak() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
    
    // Set a timeout to mark component as loaded even if other operations fail
    const timeout = setTimeout(() => {
      setIsLoaded(true)
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [])

  // Don't render anything server-side or until mounted
  if (!mounted) return null;

  return (
    <section className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Music Info Section */}
          <div className="md:col-span-3">
            <div className="max-w-sm">
              <h2 className="text-xl font-semibold">Nik Bear Brown</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Songwriter, Poet, Digital Artist
              </p>
              <div className="mt-6 flex space-x-4 items-center">
                <Link href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14.5c1.5 1 4 1 5.5 0"/>
                    <path d="M8 11c2 1 5 1 7 0"/>
                    <path d="M8.5 7.5c2.5 1 6.5 1 9 0"/>
                  </svg>
                </Link>
                <Link href="https://music.apple.com/us/artist/1779725275" className="text-sm hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M14.5 4.5c-1.732.646-3 2.255-3 4.171v7.662c0 1.96-1.925 3.338-3.667 2.667A2.72 2.72 0 0 1 6 16.433v-1.39c0-1.583 1.212-2.897 2.757-2.98"></path>
                    <path d="M14.5 4.5c1.732.646 3 2.255 3 4.171v7.662c0 1.96 1.925 3.338 3.667 2.667A2.72 2.72 0 0 0 23 16.433v-1.39c0-1.583-1.212-2.897-2.757-2.98"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Music Description */}
          <div className="md:col-span-9">
            <h3 className="text-lg font-semibold mb-4">Nik Bear Brown Music</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Nik Bear Brown is a songwriter seamlessly blending the roles of poet, lyricist, and digital artist to craft immersive sonic experiences. With a unique storytelling style, he fuses traditional folk themes with modern insights, especially in ballads and narrative songs.
                </p>
                <p className="text-sm text-muted-foreground">
                  Nik Bear writes new songs and novel arrangements of public domain classics. With a deep appreciation for the power of words, he weaves intricate narratives and evocative imagery into his lyrics, capturing the essence of human emotions and experiences.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">Featured Projects</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://open.spotify.com/artist/0hSpFCJodAYMP2cWK72zI6" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Solo Discography</Link>
                  </li>
                  <li>
                    <Link href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Humanitarians AI Collaborations</Link>
                  </li>
                  <li>
                    <Link href="https://music.apple.com/us/artist/1779725275" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Apple Music Profile</Link>
                  </li>
                  <li>
                    <Link href="https://music.apple.com/us/artist/humanitarians-ai/1781414009" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Humanitarians AI on Apple Music</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 pt-6 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              Search for "Nik Bear Brown" on Spotify and Apple Music to discover his complete discography. Explore the intersection of traditional songwriting and modern storytelling through his unique musical perspective.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
