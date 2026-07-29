export function Experience() {
  const experiences = [
    {
      title: 'Apple Developer Academy @ UC Surabaya',
      role: 'Apple Foundation Program: Learner',
      period: 'July 2026 - Present',
      location: 'Surabaya, Indonesia',
      highlights: ['App development', 'Swift programming', 'iOS ecosystem'],
    },
    {
      title: 'Apple Developer Academy @ UC Surabaya',
      role: 'Researcher & Bug Hunter',
      period: 'Current',
      highlights: ['HackerOne researcher', 'Security vulnerability research', 'Bug bounty programs'],
    },
    {
      title: 'Cyber Defense Academy (CDA)',
      role: 'Full Scholarship Awardee',
      period: 'April 2025 - June 2025',
      location: 'Singhasari SEZ, Malang',
      highlights: [
        'Identity & Access Management (IAM)',
        'OKTA skills training',
        '6-week intensive program',
        'Mentored by international professionals',
      ],
    },
    {
      title: 'PT ITSEC Asia Tbk',
      role: 'Multimedia Designer',
      period: 'June 2026 - July 2026',
      highlights: ['Promotional video content', 'Bronyx AI pentesting platform', 'Video production'],
    },
    {
      title: 'Shape Your Life ID',
      role: 'Web Developer',
      period: 'November 2025 - May 2026',
      highlights: ['Web development', 'Full-stack development', 'Educational content'],
    },
    {
      title: 'Metic Moklet',
      role: 'General Manager',
      period: 'August 2024 - August 2025',
      location: 'Malang, East Java',
      highlights: [
        'Led MeTor tech tutorials program',
        'Managed MeticTalks podcast series',
        'Supported 7+ events',
        'Produced 10+ professional videos',
      ],
    },
    {
      title: 'AFS Global STEM Innovators',
      role: 'Awardee & Program Participant',
      period: 'October 2025 - November 2025',
      highlights: [
        'Selected as one of 100 Indonesian youths',
        'AI model development with n8n',
        'YOLOv8 object detection implementation',
        'International hybrid exchange program',
      ],
    },
    {
      title: 'Instellar Impact',
      role: 'Most Promising Startup Winner',
      period: 'June 2025 - July 2025',
      location: 'South Jakarta',
      highlights: ['Top 3 startup incubation program', 'Green Tech Innovation Showcase'],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-0 md:pl-8 pb-8 border-b border-border last:border-b-0"
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1.5 translate-y-2"></div>

              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-lg text-primary font-medium">
                    {exp.title}
                  </p>
                  {exp.location && (
                    <p className="text-sm text-muted-foreground">
                      📍 {exp.location}
                    </p>
                  )}
                </div>

                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="text-primary mr-3 font-bold">
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
