'use client'

interface Project {
  title: string
  category: string
  description: string
  skills: string[]
  outcome: string
  organization?: string
  period?: string
}

export function ProjectsExpanded() {
  const projects: Project[] = [
    {
      title: 'AI-Powered Automation & Object Detection System',
      category: 'AI & Automation',
      description:
        'Developed an intelligent automation model combining n8n workflow orchestration with YOLOv8 object detection for an advanced sorting system. Part of AFS Global STEM Innovators international programme with 5-week virtual + 1-week in-person training.',
      skills: ['n8n', 'YOLOv8', 'AI/ML', 'Python', 'Automation', 'Object Detection'],
      outcome:
        'Completed international hybrid programme; model successfully deployed for sorting automation',
      organization: 'AFS Global STEM Innovators',
      period: 'October–November 2025',
    },
    {
      title: 'Identity & Access Management (IAM) Specialization',
      category: 'Cybersecurity',
      description:
        'Intensive 6-week programme focused on IAM principles and OKTA platform implementation. Comprehensive training in identity management systems, access control, and enterprise security architecture mentored by international professionals from DIAAS.IN.',
      skills: ['IAM', 'OKTA', 'Identity Management', 'Access Control', 'Security Architecture'],
      outcome: 'Full scholarship recipient (IDR 30 million); completed advanced cybersecurity certification',
      organization: 'Cyber Defense Academy (DIAAS)',
      period: 'April–June 2025',
    },
    {
      title: 'Bronyx AI Penetration Testing Platform – Video Marketing',
      category: 'Multimedia & Marketing',
      description:
        'Produced professional promotional video content and multimedia design materials for Bronyx, an AI-powered penetration testing platform. Created compelling marketing collateral showcasing platform capabilities for enterprise clients.',
      skills: [
        'Video Production',
        'Multimedia Design',
        'Editing',
        'Marketing Collateral',
        'Product Positioning',
      ],
      outcome: 'Delivered high-quality promotional materials supporting enterprise platform launch',
      organization: 'PT ITSEC Asia Tbk',
      period: 'June–July 2026',
    },
    {
      title: 'Metic Moklet – Educational Media & Branding Platform',
      category: 'Leadership & Content',
      description:
        'Comprehensive management of an educational media brand including four integrated programmes: MeTor (tech tutorials), MeticTalks (podcast series), SnapPhotobooth (events), and Review Website (product reviews). Coordinated partnerships, produced content, managed events, and built community engagement.',
      skills: [
        'Project Management',
        'Content Creation',
        'Video Production',
        'Copywriting',
        'Branding',
        'Event Coordination',
        'Social Media Strategy',
      ],
      outcome:
        'Produced 10+ professional videos, achieved 20,000+ weekly Instagram views, supported 7+ major events',
      organization: 'Metic Moklet (General Manager)',
      period: 'August 2024–August 2025',
    },
    {
      title: 'Shape Your Life ID – Educational Web Platform',
      category: 'Web Development',
      description:
        'Full-stack web development for an educational institution platform. Created responsive, user-friendly solutions focused on educational content delivery, student engagement, and institutional branding.',
      skills: ['Web Development', 'Full-Stack', 'React', 'Frontend', 'UI/UX', 'Responsive Design'],
      outcome: 'Deployed educational platform serving institutional clients',
      organization: 'Shape Your Life ID',
      period: 'November 2025–May 2026',
    },
    {
      title: 'SMK Telkom Malang – School Media Production',
      category: 'Video & Content',
      description:
        'Managed video production and project coordination for school promotional and event content. Created polished media assets for institutional branding and event documentation.',
      skills: ['Video Editing', 'Project Management', 'Content Production', 'Event Documentation'],
      outcome: 'Produced comprehensive school media library and event coverage',
      organization: 'SMK Telkom Malang',
      period: 'August–September 2025',
    },
    {
      title: 'Instellar Impact – Green Tech Startup Incubation',
      category: 'Entrepreneurship',
      description:
        'Participated in selective startup incubation programme focused on green technology innovation. Developed business strategies and pitched solutions in competitive environment, achieving Top 3 incubation status and Most Promising Startup recognition.',
      skills: [
        'Entrepreneurship',
        'Business Strategy',
        'Pitch Development',
        'Green Technology',
        'Innovation',
      ],
      outcome: 'Top 3 incubation programme selection; Most Promising Startup Winner at GTIS',
      organization: 'Instellar Impact (PEDE Innovation Lab & GTIS)',
      period: 'May–July 2025',
    },
    {
      title: 'CTF & Bug Bounty Security Research',
      category: 'Cybersecurity',
      description:
        'Active participation in national and international Capture The Flag competitions and bug bounty platforms. Demonstrated advanced security analysis, vulnerability research, and exploitation techniques.',
      skills: [
        'CTF',
        'Penetration Testing',
        'Vulnerability Research',
        'Security Analysis',
        'Bug Bounties',
        'Exploit Development',
      ],
      outcome:
        '3rd Place CTF 2024, 6th Rank SNI CTF 2024, Multiple finalist positions, Active HackerOne researcher',
      organization: 'Various CTF Platforms & HackerOne',
      period: 'Ongoing',
    },
    {
      title: 'Apple Developer Academy – iOS Development Foundation',
      category: 'App Development',
      description:
        'Structured learning programme focused on iOS app development, Swift programming, and Apple ecosystem principles. Project-based collaborative learning aligned with Apple development best practices.',
      skills: ['Swift', 'iOS Development', 'App Design', 'Apple Ecosystem', 'Xcode'],
      outcome: 'Active participant in foundational Apple development curriculum',
      organization: 'Apple Developer Academy @ UC Surabaya',
      period: 'July 2026–Present',
    },
    {
      title: 'Graphic Design & Branding – Multiple Platforms',
      category: 'Design',
      description:
        'Professional graphic design and visual branding work across multiple platforms and organizations. Created cohesive visual identities, marketing materials, and platform designs.',
      skills: ['Graphic Design', 'Visual Branding', 'UI Design', 'Marketing Design'],
      outcome: 'Delivered comprehensive design solutions for tech and education platforms',
      organization: 'Meta4sec & StudiLanjut.id',
      period: 'January 2026–Present',
    },
  ]

  const categories = Array.from(new Set(projects.map((p) => p.category)))

  return (
    <section
      id="projects-detailed"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technical Projects & Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Comprehensive collection of technical work, creative initiatives, and professional
            accomplishments across AI, cybersecurity, web development, and media production
          </p>
          <div className="h-1 w-16 bg-primary rounded-full mt-6"></div>
        </div>

        {/* Categorized Projects */}
        {categories.map((category) => (
          <div key={category} className="space-y-6">
            {/* Category Header */}
            <div className="pt-8 pb-4 border-b border-border">
              <h3 className="text-2xl font-bold text-foreground">{category}</h3>
            </div>

            {/* Projects in Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.category === category)
                .map((project, index) => (
                  <div
                    key={index}
                    className="group p-6 md:p-8 bg-secondary border border-border rounded-lg hover:border-primary transition-all duration-300 hover:shadow-lg space-y-4 flex flex-col h-full"
                  >
                    {/* Meta Information */}
                    <div className="flex flex-col gap-1">
                      {project.organization && (
                        <p className="text-sm text-primary font-semibold uppercase tracking-wide">
                          {project.organization}
                        </p>
                      )}
                      {project.period && (
                        <p className="text-xs text-muted-foreground">{project.period}</p>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
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
                    <div className="pt-4 border-t border-border mt-auto">
                      <p className="text-sm text-primary font-medium">
                        ✓ {project.outcome}
                      </p>
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
