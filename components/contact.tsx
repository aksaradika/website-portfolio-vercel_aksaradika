import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="space-y-12">
        {/* Section Header */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              I&apos;m always interested in discussing cybersecurity research, bug bounty opportunities, CTF competitions, and collaborative projects. Whether you have a question or just want to say hello, feel free to reach out!
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Email */}
            <Link
              href="mailto:aksaradika.32@moklet.org"
              className="group p-6 bg-secondary border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
            >
              <div className="flex items-start gap-4">
                <Mail
                  size={24}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    aksaradika.32@moklet.org
                  </p>
                </div>
              </div>
            </Link>

            {/* Location */}
            <div className="p-6 bg-secondary border border-border rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin
                  size={24}
                  className="text-primary flex-shrink-0"
                />
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Malang, East Java, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="pt-8 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect on Social
            </h3>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="https://www.linkedin.com/in/aksaradika"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-secondary border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium text-sm"
              >
                LinkedIn
              </Link>

              <Link
                href="mailto:aksaradika.32@moklet.org"
                className="px-6 py-3 bg-secondary border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium text-sm"
              >
                Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
