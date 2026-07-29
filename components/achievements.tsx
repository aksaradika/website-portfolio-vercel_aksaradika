export function Achievements() {
  const achievements = [
    {
      title: '1st Place Winner',
      category: 'Students Entrepreneur Festival',
      icon: '🏆',
      description: 'Recognized as top entrepreneur among student competitors',
    },
    {
      title: '3rd Place – Capture The Flag',
      category: 'TechTonic Expo 2024',
      icon: '🥉',
      description: 'Advanced cybersecurity skills demonstrated in national competition',
    },
    {
      title: 'Finalist',
      category: 'Slashroot CTF #8 2024',
      icon: '⭐',
      description: 'Achieved finalist status in international CTF competition',
    },
    {
      title: '6th Rank Player',
      category: 'SNI CTF 2024',
      icon: '🎖️',
      description: 'Ranked among top performers in national CTF tournament',
    },
    {
      title: 'Finalist',
      category: 'Cyber Security Competition (NETCOMP 3.0)',
      icon: '🔐',
      description: 'Selected as finalist in national cybersecurity competition',
    },
    {
      title: 'Full Scholarship Award',
      category: 'Cyber Defense Academy',
      icon: '📚',
      description: 'IDR 30 million scholarship for 6-week intensive IAM training program',
    },
    {
      title: 'Most Promising Startup Winner',
      category: 'Instellar Impact & GTIS',
      icon: '🚀',
      description: 'Selected as Top 3 in startup incubation program with green tech focus',
    },
    {
      title: 'AFS Global STEM Innovators Awardee',
      category: 'International Exchange Program',
      icon: '🌍',
      description: 'Selected as one of 100 Indonesian youths for fully-funded global program',
    },
    {
      title: 'BRICS 2026 Indonesian Delegate',
      category: 'International Representation',
      icon: '🌐',
      description: 'Serving as official delegate representing Indonesia for BRICS 2026',
    },
    {
      title: 'HackerOne Researcher',
      category: 'Bug Bounty & Security Research',
      icon: '🔍',
      description: 'Active researcher contributing to global cybersecurity through bug bounties',
    },
  ]

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Honors & Achievements
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 bg-secondary border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 space-y-3"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4">
                <span className="text-4xl">{achievement.icon}</span>
                <div className="space-y-1 flex-1">
                  <h3 className="font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {achievement.category}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            By The Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">
                Major Awards & Recognitions
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                International Programs
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">
                Professional Roles Held
              </div>
            </div>
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">30M</div>
              <div className="text-sm text-muted-foreground">
                IDR Scholarship Awarded
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
