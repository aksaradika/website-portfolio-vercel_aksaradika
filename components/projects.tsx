export function Projects() {
  const projects = [
    {
      title: 'Cyber Defense Academy (CDA) - IAM Training',
      description:
        'Participated in a 6-week intensive cybersecurity program focused on Identity & Access Management and OKTA implementation. Completed full scholarship program mentored by international professionals from DIAAS.IN.',
      skills: ['IAM', 'OKTA', 'Cybersecurity', 'Identity Management'],
      outcome: 'Full scholarship award (IDR 30 million) for comprehensive IAM training',
    },
    {
      title: 'AFS Global STEM Innovators - AI Object Detection System',
      description:
        'Developed an AI-powered automation model using n8n for workflow orchestration combined with YOLOv8 for advanced object detection in an intelligent sorting system. Selected as one of 100 Indonesian youths for the international hybrid exchange program.',
      skills: ['n8n', 'YOLOv8', 'AI/ML', 'Automation', 'Python'],
      outcome: 'Completed 5-week virtual + 1-week in-person international program',
    },
    {
      title: 'Bronyx AI Penetration Testing Platform - Video Production',
      description:
        'Created professional promotional video content for Bronyx, an AI-powered penetration testing platform. Handled multimedia design and video editing for product marketing.',
      skills: ['Video Production', 'Multimedia Design', 'Marketing', 'Editing'],
      outcome: 'Delivered high-quality promotional materials for enterprise platform',
    },
    {
      title: 'Metic Moklet - Integrated Media & Education Platform',
      description:
        'Served as General Manager overseeing multiple programs: MeTor (tech tutorials), MeticTalks (podcast series), SnapPhotobooth, and Review Website. Managed partnerships, produced content, and coordinated 7+ major events.',
      skills: ['Project Management', 'Content Creation', 'Video Editing', 'Copywriting', 'Branding'],
      outcome: '10+ professional videos produced, 20,000+ weekly social media views',
    },
    {
      title: 'Web Development - Educational Platforms',
      description:
        'Developed web solutions for educational institutions including Shape Your Life ID. Focused on creating responsive, user-friendly platforms for educational content delivery and student engagement.',
      skills: ['Web Development', 'Frontend', 'Full-stack', 'React', 'UI/UX'],
      outcome: 'Deployed platforms serving educational institutions',
    },
    {
      title: 'CTF & Bug Bounty Achievements',
      description:
        'Active participant and achiever in national and international Capture The Flag competitions and bug bounty programs. Recognized for security research contributions and vulnerability discoveries.',
      skills: ['CTF', 'Penetration Testing', 'Vulnerability Research', 'Security Analysis'],
      outcome: '3rd Place CTF 2024, 6th Rank SNI CTF 2024, Finalist in multiple competitions',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects & Initiatives
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-secondary border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg space-y-4"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Outcome */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-primary font-medium">
                  ✓ {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
