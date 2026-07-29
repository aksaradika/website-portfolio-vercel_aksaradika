'use client'

interface Achievement {
  title: string
  category: string
  icon: string
  description: string
  date?: string
}

interface CertificationItem {
  title: string
  issuer: string
  category: string
}

export function AchievementsExpanded() {
  const achievements: Achievement[] = [
    {
      title: '1st Place Winner',
      category: 'Entrepreneurship',
      icon: '🏆',
      description: 'Students Entrepreneur Festival – Recognized as top entrepreneur among student competitors nationally',
      date: '2025',
    },
    {
      title: '3rd Place – Capture The Flag',
      category: 'Cybersecurity Competition',
      icon: '🥉',
      description: 'TechTonic Expo 2024 – Advanced cybersecurity skills demonstrated in national competition',
      date: '2024',
    },
    {
      title: 'Finalist',
      category: 'CTF Competition',
      icon: '⭐',
      description: 'Slashroot CTF #8 2024 – Achieved finalist status in international CTF competition',
      date: '2024',
    },
    {
      title: '6th Rank Player',
      category: 'National CTF',
      icon: '🎖️',
      description: 'SNI CTF 2024 – Ranked among top performers in national CTF tournament',
      date: '2024',
    },
    {
      title: 'Finalist',
      category: 'Cybersecurity Competition',
      icon: '🔐',
      description: 'Cyber Security Competition (NETCOMP 3.0) – Selected as finalist in national cybersecurity competition',
      date: '2024',
    },
    {
      title: 'Full Scholarship Award',
      category: 'Educational Programme',
      icon: '📚',
      description: 'Cyber Defense Academy (DIAAS) – IDR 30 million scholarship for 6-week intensive IAM training programme',
      date: 'April–June 2025',
    },
    {
      title: 'Most Promising Startup Winner',
      category: 'Entrepreneurship',
      icon: '🚀',
      description:
        'Green Tech Innovation Showcase (GTIS) – Selected as Top 3 in startup incubation programme with green technology focus',
      date: 'June 2025',
    },
    {
      title: 'Incubation Programme Participant (Top 3)',
      category: 'Startup Excellence',
      icon: '💡',
      description: 'PEDE Innovation Lab, Surabaya – Accepted into selective incubation programme among top startups',
      date: 'May–June 2025',
    },
    {
      title: 'AFS Global STEM Innovators Awardee',
      category: 'International Recognition',
      icon: '🌍',
      description:
        'Selected as one of 100 Indonesian youths for fully-funded international hybrid exchange programme supported by AFS and bp',
      date: 'October–November 2025',
    },
    {
      title: 'Indonesia SERVE BRICS Delegate 2026',
      category: 'International Representation',
      icon: '🌐',
      description: 'Official delegate representing Indonesia in BRICS 2026 programme through Ministry of Youth & Sports',
      date: 'April 2026',
    },
    {
      title: 'HackerOne Researcher',
      category: 'Bug Bounty',
      icon: '🔍',
      description: 'Active researcher contributing to global cybersecurity through bug bounty programmes and vulnerability disclosure',
      date: 'Active',
    },
    {
      title: 'Apple Developer Academy Learner',
      category: 'Developer Programme',
      icon: '🍎',
      description:
        'Selected participant in Apple Foundation Program at UC Surabaya for iOS development and Apple ecosystem training',
      date: 'July 2026–Present',
    },
  ]

  const certifications: CertificationItem[] = [
    {
      title: 'Cybersecurity (Certiport IT Specialist)',
      issuer: 'Certiport',
      category: 'Cybersecurity',
    },
    {
      title: 'Global STEM Innovators | AFS Global Competence Certificate',
      issuer: 'AFS Intercultural Programs',
      category: 'International Programme',
    },
    {
      title: 'Mastercard - Cybersecurity Job Simulation',
      issuer: 'Mastercard',
      category: 'Cybersecurity',
    },
    {
      title: 'Siemens Mobility - Project Manager Job Simulation',
      issuer: 'Siemens Mobility',
      category: 'Project Management',
    },
    {
      title: 'English Proficiency Certificate',
      issuer: 'Certified English Proficiency',
      category: 'Language',
    },
  ]

  const achievementCategories = Array.from(new Set(achievements.map((a) => a.category)))
  const certificationCategories = Array.from(new Set(certifications.map((c) => c.category)))

  return (
    <section
      id="achievements-expanded"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-20">
        {/* Achievements Section */}
        <div className="space-y-12">
          {/* Section Header */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Competitive achievements, international recognition, and professional honours
            </p>
            <div className="h-1 w-16 bg-primary rounded-full mt-6"></div>
          </div>

          {/* Achievements by Category */}
          {achievementCategories.map((category) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements
                  .filter((a) => a.category === category)
                  .map((achievement, index) => (
                    <div
                      key={index}
                      className="p-6 bg-secondary border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 space-y-3"
                    >
                      {/* Icon and Title */}
                      <div className="flex items-start gap-4">
                        <span className="text-4xl flex-shrink-0">{achievement.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-lg leading-tight">
                            {achievement.title}
                          </h4>
                          {achievement.date && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {achievement.date}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="space-y-12 pt-12 border-t border-border">
          {/* Section Header */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Certifications & Credentials
            </h3>
            <div className="h-1 w-16 bg-primary rounded-full"></div>
          </div>

          {/* Certifications by Category */}
          {certificationCategories.map((category) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{category}</h4>
              <div className="space-y-3">
                {certifications
                  .filter((c) => c.category === category)
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 bg-secondary border border-border rounded-lg hover:border-primary transition-all duration-300 flex items-start gap-4"
                    >
                      <span className="text-primary font-bold text-xl flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-foreground">{cert.title}</h5>
                        <p className="text-sm text-muted-foreground mt-1">
                          Issued by {cert.issuer}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="pt-12 border-t border-border space-y-8">
          <h3 className="text-2xl font-semibold text-foreground">By The Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-sm text-muted-foreground">
                Major Awards & Recognitions
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-sm text-muted-foreground">
                International Programmes
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">18+</div>
              <div className="text-sm text-muted-foreground">
                Professional Roles Held
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">30M IDR</div>
              <div className="text-sm text-muted-foreground">
                Scholarship Awarded
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
