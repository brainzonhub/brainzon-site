import { Metadata } from "next";
import { companyConfig } from "@/config/company";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Briefcase, MapPin, Clock, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at Brainzon - Build Next-Gen Enterprise Platforms",
  description: "Join Brainzon's high-performing engineering teams. Explore open roles in full-stack, DevOps, cloud architectures, and ERP solutions consulting.",
  openGraph: {
    title: "Careers at Brainzon - Build Next-Gen Enterprise Platforms",
    description: "Join Brainzon's high-performing engineering teams. Explore open roles in full-stack, DevOps, cloud architectures, and ERP solutions consulting.",
    type: "website"
  }
};

export default function CareersPage() {
  const { careers } = companyConfig;

  // Compile job schemas
  const schemaData = careers.roles.map((role) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": role.title,
    "description": role.description,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Brainzon",
      "sameAs": "https://www.brainzon.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      }
    },
    "employmentType": "FULL_TIME"
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Inject job posting schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <Container>
          <div className="max-w-4xl flex flex-col items-start text-left">
            <span className="badge-accent">
              Join Our Team
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Careers at Brainzon
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              <span className="bg-brand-gradient bg-clip-text text-transparent">{careers.headline}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              {careers.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="relative py-20 bg-surface/30">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Current Openings
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Work with the latest toolsets and frameworks to architect, deploy, and optimize systems worldwide.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            {careers.roles.map((role) => (
              <div
                key={role.title}
                className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {role.title}
                  </h3>
                  
                  {/* Meta items */}
                  <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={12} className="text-primary" />
                      <span>{role.department}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-secondary" />
                      <span>{role.location}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-accent" />
                      <span>{role.type}</span>
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground/80 leading-relaxed mt-4">
                    {role.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center">
                  <Link
                    href="/talk-to-expert"
                    className="inline-flex items-center justify-center gap-1.5 w-full md:w-auto px-5 py-2.5 text-xs font-semibold rounded-lg border border-border bg-muted/40 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* General Submission */}
      <section className="relative py-20 border-t border-border/40 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
              <FileText size={24} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Don&apos;t see a matching position?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
              We are always searching for exceptional talent. Submit a general application containing your resume and GitHub profile.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200"
              >
                <span>Send General Application</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
