'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScroll = (link: string) => {
    const sectionId = link.toLowerCase()
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border mt-20">
      <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Radika</h3>
            <p className="text-sm text-muted-foreground">
              Cybersecurity researcher, bug hunter, and creative technologist.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => handleScroll(link)}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Malang, East Java, Indonesia</p>
              <p>
                <a
                  href="mailto:aksaradika.32@moklet.org"
                  className="hover:text-foreground transition-colors"
                >
                  aksaradika.32@moklet.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Muhammad Radika Afwa Bimalaksa. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
