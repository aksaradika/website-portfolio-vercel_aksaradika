'use client'

export function Highlights() {
  const highlights = [
    {
      category: 'Cybersecurity',
      title: 'Cyber Defense Academy (CDA) Awardee',
      description: 'Full scholarship recipient (IDR 30 million) for 6-week intensive IAM training',
      meta: 'April–June 2025 | Singhasari SEZ, Malang',
    },
    {
      category: 'International Recognition',
      title: 'Indonesia SERVE BRICS Delegate 2026',
      description: 'Official delegate representing Indonesia in BRICS 2026 programme',
      meta: 'Kementerian Pemuda dan Olahraga RI',
    },
    {
      category: 'AI & Innovation',
      title: 'AFS Global STEM Innovators Awardee',
      description: 'Selected as one of 100 Indonesian youths for fully-funded hybrid program',
      meta: 'October–November 2025 | n8n & YOLOv8 AI Project',
    },
    {
      category: 'Entrepreneurship',
      title: '1st Place Winner – Students Entrepreneur Festival',
      description: 'Top startup recognized among student entrepreneurs nationally',
      meta: 'Instellar Impact Green Tech Incubation Program',
    },
    {
      category: 'Apple Developer',
      title: 'Apple Developer Academy @ UC Surabaya',
      description: 'Apple Foundation Program Learner in iOS and app development',
      meta: 'July 2026 – Present',
    },
    {
      category: 'Leadership & Media',
      title: 'General Manager – Metic Moklet',
      description: 'Led educational media programmes with 10+ videos and 7+ events annually',
      meta: 'August 2024–August 2025 | 20K+ weekly social media engagement',
    },
  ]

  return (
    <section
      id="highlights"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
            Selected Highlights
          </h2>
          <p className="text-lg text-muted-foreground">
            Key achievements and roles that define my professional journey
          </p>
          <div className="h-1 w-16 bg-primary rounded-full mt-6"></div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group p-6 bg-secondary border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 space-y-3 h-full flex flex-col"
            >
              {/* Category Tag */}
              <div className="inline-flex items-center justify-start">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 rounded-full">
                  {highlight.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground flex-grow">
                {highlight.description}
              </p>

              {/* Metadata */}
              <div className="pt-3 border-t border-border mt-auto">
                <p className="text-xs text-muted-foreground font-medium">
                  {highlight.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
