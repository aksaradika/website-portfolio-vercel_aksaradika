'use client'

interface ExperienceItem {
  title: string
  organization: string
  period: string
  location?: string
  highlights: string[]
  icon?: string
}

interface ThemeSection {
  title: string
  description: string
  experiences: ExperienceItem[]
}

export function ExperienceThemes() {
  const themes: ThemeSection[] = [
    {
      title: 'Cybersecurity & Research',
      description:
        'Intensive training, competition achievements, and active bug bounty contribution',
      experiences: [
        {
          title: 'Full Scholarship Awardee',
          organization: 'Cyber Defense Academy (DIAAS)',
          period: 'April–June 2025',
          location: 'Singhasari SEZ, Malang',
          highlights: [
            'Completed 6-week intensive cybersecurity training programme',
            'Specialization: Identity & Access Management (IAM) and OKTA',
            'Mentored by international professionals from DIAAS.IN (India)',
            'Full scholarship: IDR 30 million',
            'SEAL Programme participation',
          ],
          icon: '🔐',
        },
        {
          title: 'Researcher & Bug Hunter',
          organization: 'HackerOne',
          period: 'Active',
          highlights: [
            'Active participant in global bug bounty programmes',
            'Security vulnerability research and reporting',
            'Continuous contribution to cybersecurity community',
          ],
          icon: '🔍',
        },
        {
          title: 'CTF Competitor',
          organization: 'National & International CTF',
          period: '2024–Present',
          highlights: [
            '3rd Place – Capture The Flag, TechTonic Expo 2024',
            '6th Rank Player – SNI CTF 2024',
            'Finalist – Slashroot CTF #8 2024',
            'Finalist – Cyber Security Competition (NETCOMP 3.0)',
          ],
          icon: '🏆',
        },
      ],
    },
    {
      title: 'Technology & Innovation',
      description: 'AI development, web solutions, and multimedia design across platforms',
      experiences: [
        {
          title: 'Apple Foundation Program Learner',
          organization: 'Apple Developer Academy @ UC Surabaya',
          period: 'July 2026 – Present',
          location: 'Surabaya, Indonesia',
          highlights: [
            'App development and Swift programming',
            'iOS ecosystem and design principles',
            'Collaborative project-based learning',
          ],
          icon: '🍎',
        },
        {
          title: 'Multimedia Designer',
          organization: 'PT ITSEC Asia Tbk',
          period: 'June–July 2026',
          highlights: [
            'Professional promotional video content for Bronyx AI penetration testing platform',
            'Multimedia design and video editing',
            'Enterprise platform marketing collateral',
          ],
          icon: '🎬',
        },
        {
          title: 'Graphic Designer',
          organization: 'Meta4sec',
          period: 'October 2025 – Present',
          highlights: [
            'Visual design and branding materials',
            'Cybersecurity platform presentation',
          ],
          icon: '🎨',
        },
        {
          title: 'Graphic Designer',
          organization: 'StudiLanjut.id',
          period: 'January–June 2026',
          highlights: ['Educational platform branding', 'Content design'],
          icon: '🎨',
        },
        {
          title: 'Web Developer',
          organization: 'Shape Your Life ID',
          period: 'November 2025 – May 2026',
          highlights: [
            'Full-stack web development',
            'Educational platform creation',
            'Responsive design and deployment',
          ],
          icon: '💻',
        },
      ],
    },
    {
      title: 'Leadership & Media',
      description:
        'Editorial direction, content creation, event coordination, and educational programming',
      experiences: [
        {
          title: 'General Manager',
          organization: 'Metic Moklet',
          period: 'August 2024 – August 2025',
          location: 'Malang, East Java',
          highlights: [
            'Led educational media and branding initiatives',
            'Managed multiple programmes: MeTor (tech tutorials), MeticTalks (podcast), SnapPhotobooth, Review Website',
            'Produced 10+ professional videos',
            'Coordinated 7+ major events',
            'Interviewed prominent figures including Onno W. Purbo and Bayu Skak',
            'Achieved 20,000+ weekly social media views on Instagram (@meticmoklet)',
            'Expertise: Editing, copywriting, personal branding, partnership management',
          ],
          icon: '📺',
        },
        {
          title: 'Video Editor & Host',
          organization: 'Metic Moklet',
          period: 'August 2024 – August 2025',
          location: 'Malang, East Java',
          highlights: [
            'Professional video editing and production',
            'Content hosting and presentation',
            'Interview coordination and execution',
          ],
          icon: '🎥',
        },
        {
          title: 'Video Editor & Project Manager',
          organization: 'SMK Telkom Malang',
          period: 'August–September 2025',
          location: 'Malang, East Java',
          highlights: [
            'School media and promotional content production',
            'Event video documentation and editing',
            'Project coordination and timeline management',
          ],
          icon: '🎬',
        },
        {
          title: 'Social Media Intern',
          organization: 'Jadi Hacker',
          period: 'October–December 2025',
          highlights: [
            'Social media strategy and content creation',
            'Community engagement and audience growth',
          ],
          icon: '📱',
        },
      ],
    },
    {
      title: 'International & Educational Programmes',
      description:
        'Global recognition, youth leadership, mentorship, and international exchange programmes',
      experiences: [
        {
          title: 'Indonesia SERVE BRICS Delegate 2026',
          organization: 'Kementerian Pemuda dan Olahraga RI (Ministry of Youth & Sports)',
          period: 'April 2026',
          highlights: [
            'Official delegate representing Indonesia',
            'BRICS 2026 Programme participation',
            'National youth leadership role',
          ],
          icon: '🌐',
        },
        {
          title: 'Mentor – AFS Global You Changemaker 2026',
          organization: 'AFS Intercultural Programs',
          period: 'June 2026 – Present',
          highlights: [
            'Mentoring next generation of global youth leaders',
            'Leadership and intercultural competence development',
          ],
          icon: '🌍',
        },
        {
          title: 'AFS Global STEM Innovators Awardee',
          organization: 'AFS Intercultural Programs',
          period: 'October–November 2025',
          highlights: [
            'Selected as one of 100 Indonesian youths',
            'Fully-funded hybrid exchange programme',
            'Developed AI automation model using n8n and YOLOv8 for object detection in sorting system',
            '5-week virtual + 1-week in-person workshop in Jakarta',
            'International programme supported by AFS and bp',
          ],
          icon: '🚀',
        },
        {
          title: 'Brand Ambassador',
          organization: 'Multiple Organisations (Indonesian Youth Action, Securinets, Schoters, Ganesha Business Management Festival)',
          period: 'January–May 2025',
          highlights: [
            'Indonesian Youth Action: 20,000+ weekly social media views',
            'Securinets: Promoted cybersecurity mission to student communities',
            'Schoters: Engaged students through STYLE (Young Leader Exchange) programme',
            'Ganesha Business Management Festival: Festival representation at high school level',
          ],
          icon: '🎯',
        },
      ],
    },
  ]

  return (
    <section
      id="experience-themes"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-16">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Organized by thematic focus areas showcasing diverse expertise across
            cybersecurity, technology, leadership, and international programmes
          </p>
          <div className="h-1 w-16 bg-primary rounded-full mt-6"></div>
        </div>

        {/* Themed Sections */}
        {themes.map((theme, themeIndex) => (
          <div key={themeIndex} className="space-y-8">
            {/* Theme Header */}
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-foreground">
                {theme.title}
              </h3>
              <p className="text-muted-foreground text-lg">{theme.description}</p>
            </div>

            {/* Experiences in Theme */}
            <div className="space-y-6">
              {theme.experiences.map((exp, expIndex) => (
                <div
                  key={expIndex}
                  className="group relative pl-0 md:pl-12 pb-6 border-b border-border last:border-b-0 transition-all"
                >
                  {/* Timeline Dot - Desktop */}
                  <div className="hidden md:block absolute left-0 top-1 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform"></div>

                  <div className="space-y-2">
                    {/* Title and Icon */}
                    <div className="flex items-start gap-3">
                      {exp.icon && (
                        <span className="text-2xl pt-1 flex-shrink-0">{exp.icon}</span>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mt-1 flex-wrap">
                          <p className="text-lg text-primary font-medium">
                            {exp.organization}
                          </p>
                          <span className="text-sm text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                        {exp.location && (
                          <p className="text-sm text-muted-foreground mt-1">
                            📍 {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    {exp.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2 ml-0 md:ml-11">
                        {exp.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start gap-3"
                          >
                            <span className="text-primary font-bold flex-shrink-0 mt-1">
                              ·
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
        ))}
      </div>
    </section>
  )
}
