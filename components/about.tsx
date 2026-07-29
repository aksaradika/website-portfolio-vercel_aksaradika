export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a cybersecurity specialist currently serving as a Researcher & Bug Hunter at HackerOne, with a strong focus on Capture The Flag (CTF) challenges and Bug Bounty Programs (BBP). Recently graduated from SMK Telkom Malang, I have earned multiple recognitions in national-level CTF competitions.
            </p>

            <p>
              I received a full scholarship (worth IDR 30 million) to join the Cyber Defense Academy (CDA), mentored by international professionals from DIAAS.IN (India) through the SEAL program. My current focus is building hands-on skills in penetration testing and identity & access management.
            </p>

            <p>
              Beyond technical security work, I&apos;m active as a Brand Ambassador for various educational institutions and organizations, both national and international, including Ruangguru, Indonesia Youth Action, Nexus3 Foundation, and Institut Teknologi Bandung (ITB). I serve as an AFS GSTEM Mentor and represent Indonesia as a delegate for BRICS 2026.
            </p>

            <p>
              I&apos;m also skilled in graphic design, video production, and web development, bringing a creative dimension to my technical expertise.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Hours of CTF Training</div>
          </div>
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm text-muted-foreground">CTF Placements</div>
          </div>
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Years in Cybersecurity</div>
          </div>
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Professional Roles</div>
          </div>
        </div>
      </div>
    </section>
  )
}
