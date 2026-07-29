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
        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
          <p className="text-xl">
            I am a cybersecurity researcher and innovator with expertise spanning competitive hacking, vulnerability research, artificial intelligence, and creative technology. Just graduated from SMK Telkom Malang, I&apos;ve earned multiple national recognitions in Capture The Flag competitions and hold a full scholarship (IDR 30 million) from the Cyber Defense Academy for advanced IAM training.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Core Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary border border-border rounded-lg">
                <p className="font-semibold text-foreground mb-2">Cybersecurity & Research</p>
                <p className="text-sm">
                  Active HackerOne researcher, CTF competitor, penetration testing, identity & access management, vulnerability discovery
                </p>
              </div>
              <div className="p-4 bg-secondary border border-border rounded-lg">
                <p className="font-semibold text-foreground mb-2">AI & Innovation</p>
                <p className="text-sm">
                  AI automation (n8n), object detection (YOLOv8), startup development, green technology innovation
                </p>
              </div>
              <div className="p-4 bg-secondary border border-border rounded-lg">
                <p className="font-semibold text-foreground mb-2">Technology Development</p>
                <p className="text-sm">
                  Web development, iOS app development, multimedia design, video production, platform development
                </p>
              </div>
              <div className="p-4 bg-secondary border border-border rounded-lg">
                <p className="font-semibold text-foreground mb-2">Leadership & Education</p>
                <p className="text-sm">
                  Media management, educational programming, youth mentorship, international representation, brand building
                </p>
              </div>
            </div>
          </div>

          <p>
            I received selection as one of 100 Indonesian youths for the AFS Global STEM Innovators Programme, where I developed AI automation systems. Currently serving as an AFS Global You Changemaker Mentor and official delegate representing Indonesia for BRICS 2026. I&apos;m also an Apple Developer Academy learner focused on iOS development.
          </p>

          <p>
            Beyond individual technical excellence, I&apos;m actively building educational platforms and community engagement as General Manager of Metic Moklet, an integrated media and education initiative that achieved 20,000+ weekly social media views and produced 10+ professional videos while supporting 7+ events annually.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">18+</div>
            <div className="text-sm text-muted-foreground">Professional Roles</div>
          </div>
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-sm text-muted-foreground">Awards & Recognitions</div>
          </div>
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">International Programmes</div>
          </div>
          <div className="p-6 bg-secondary rounded-lg border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-2">30M IDR</div>
            <div className="text-sm text-muted-foreground">Scholarship Awarded</div>
          </div>
        </div>
      </div>
    </section>
  )
}
