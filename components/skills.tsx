export function Skills() {
  const skillCategories = [
    {
      category: 'Cybersecurity & Security',
      skills: [
        'Cybersecurity',
        'Penetration Testing',
        'Capture The Flag (CTF)',
        'Bug Bounty Programs',
        'Identity & Access Management (IAM)',
        'OKTA',
        'Vulnerability Research',
        'Security Analysis',
      ],
    },
    {
      category: 'Programming & Development',
      skills: [
        'Swift',
        'Python',
        'Web Development',
        'Full-stack Development',
        'React',
        'Frontend Development',
        'UI/UX Design',
        'API Development',
      ],
    },
    {
      category: 'AI & Automation',
      skills: [
        'Artificial Intelligence',
        'Machine Learning',
        'YOLOv8 Object Detection',
        'n8n Automation',
        'Data Analysis',
        'Model Development',
      ],
    },
    {
      category: 'Creative & Multimedia',
      skills: [
        'Graphic Design',
        'Video Production',
        'Video Editing',
        'Content Creation',
        'Multimedia Design',
        'Copywriting',
        'Personal Branding',
      ],
    },
    {
      category: 'Leadership & Professional',
      skills: [
        'Project Management',
        'Entrepreneurship',
        'Brand Ambassador',
        'Mentorship',
        'Team Leadership',
        'Strategic Planning',
        'Program Coordination',
      ],
    },
    {
      category: 'Languages',
      skills: [
        'English (Full Professional)',
        'Indonesian',
        'Javanese',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-foreground border-b-2 border-primary pb-3">
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-secondary border border-border text-foreground rounded-full text-sm font-medium hover:border-primary hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Inline */}
        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Mastercard Cybersecurity Job Simulation',
              'English Proficiency Certificate',
              'Global STEM Innovators | AFS',
              'Global Competence Certificate',
              'Cybersecurity (Certiport IT Specialist)',
              'Siemens Mobility - Project Manager Job Simulation',
            ].map((cert, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border"
              >
                <span className="text-primary font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
