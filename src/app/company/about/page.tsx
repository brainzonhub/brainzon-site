import { Metadata } from "next";
import { companyConfig } from "@/config/company";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Eye, Milestone, Trophy, UserCheck, Lightbulb, Users, ShieldAlert, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Brainzon - Strategic Enterprise Digital Transformation Partner",
  description: "Learn about Brainzon's vision, mission, and core values. Founded in 2020, we empower modern businesses globally with ERP, CRM, and AI innovations.",
  openGraph: {
    title: "About Brainzon - Strategic Digital Transformation Partner",
    description: "Learn about Brainzon's vision, mission, and core values.",
    type: "website"
  }
};

export default function AboutPage() {
  const { about, values } = companyConfig;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Brainzon",
    "url": "https://www.brainzon.com",
    "logo": "https://www.brainzon.com/logo.png",
    "foundingDate": "2020",
    "description": about.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 mb-6">
              Our Identity
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              {about.title}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              <span className="bg-brand-gradient bg-clip-text text-transparent">{about.headline}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              {about.description}
            </p>
            <p className="mt-4 text-sm md:text-base text-muted-foreground/80 leading-relaxed">
              {about.philosophy}
            </p>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 border-b border-border/40 bg-surface/35">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group relative p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/40 transition-all duration-300">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {about.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="group relative p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-md hover:border-secondary/40 transition-all duration-300">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-6">
                <Milestone size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {about.mission}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="relative py-20 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Our Core Values
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Excellence, accountability, and user success represent the core ideals guiding our engineering teams daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val) => {
              const IconComponent = {
                UserCheck,
                Lightbulb,
                Users,
                ShieldAlert,
                Award
              }[val.icon] || Trophy;

              return (
                <div
                  key={val.title}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col items-start"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors mb-6 shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-20 border-t border-border/40 bg-surface/30">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Interested in our solutions?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
              Learn how Brainzon can help your enterprise automate workflows and synchronize core operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200"
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
