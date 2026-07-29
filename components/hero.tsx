'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'

export function Hero() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center space-y-8 animate-fade-in">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
            Muhammad Radika Afwa Bimalaksa
          </h1>
          <p className="text-2xl sm:text-3xl text-primary font-medium">
            Researcher & Bug Hunter at HackerOne
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          Cybersecurity specialist with expertise in Capture The Flag competitions, Bug Bounty Programs, and penetration testing. AFS GSTEM Mentor and Indonesian Delegate for BRICS 2026.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => handleScroll('projects')}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 active:scale-95"
          >
            View My Work
          </button>
          <button
            onClick={() => handleScroll('contact')}
            className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-secondary transition-all active:scale-95"
          >
            Get in Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-8">
          <Link
            href="https://www.linkedin.com/in/aksaradika"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-secondary border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-colors font-medium text-sm"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:aksaradika.32@moklet.org"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium text-sm"
          >
            Email
          </Link>
        </div>
      </div>
    </section>
  )
}
