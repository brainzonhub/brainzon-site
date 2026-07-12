import Link from "next/link";
import { ArrowRight, ArrowLeft, Cpu, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Service } from "@/config/services";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface ServiceTemplateProps {
  service: Service;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* 1. Service Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-border/40 bg-background transition-colors duration-300">
        <div className="absolute top-[-10%] left-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/10 via-transparent to-transparent opacity-60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-secondary/5 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(30,51,77,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,51,77,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/services" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft size={12} className="transform group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Services Overview</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="badge-accent">
                Professional Service
              </span>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  {getMenuIcon(service.icon, { size: 24 })}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                  {service.title}
                </h1>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
                <span className="bg-brand-gradient bg-clip-text text-transparent">{service.headline}</span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {service.description}
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center relative w-full h-[220px] border border-border/40 rounded-3xl bg-surface/30 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-20 items-center justify-center rounded-3xl bg-card border border-border shadow-glow-primary p-4 animate-[pulse_4s_ease-in-out_infinite]">
                  {getMenuIcon(service.icon, { size: 36, className: "text-primary animate-pulse" })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Service Capabilities */}
      <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Our Capabilities & Service Focus
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Targeted solutions engineered by core software experts to align with modern corporate scaling rules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.capabilities.map((cap, idx) => {
              const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[cap.icon] || LucideIcons.HelpCircle;

              return (
                <div
                  key={idx}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-md shadow-card hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 shrink-0">
                    <IconComponent size={18} />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Process Timeline */}
      <section className="relative py-20 border-b border-border/40 bg-background transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Our Process Methodology
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              An iterative engagement model structured to guarantee transparency, compliance, and zero deployment risk.
            </p>
          </div>

          {/* Process Step Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {service.process.map((p, idx) => (
              <div key={p.step} className="flex flex-col relative group">
                {/* Connector wire */}
                {idx < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[50%] right-[-50%] h-[1.5px] bg-gradient-to-r from-primary/30 to-transparent -z-10" />
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary font-mono font-bold text-sm shrink-0">
                    {p.step}
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{p.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-14 md:pl-0">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Technology Stack */}
      <section className="relative py-20 border-b border-border/40 bg-surface/30 transition-colors duration-300">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core Technologies Used
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We leverage production-grade frameworks, container networks, databases, and message brokers to secure global deployments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-3">
            {service.technology.map((item) => (
              <span 
                key={item}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-card border border-border text-foreground hover:border-primary/40 transition-colors duration-300"
              >
                <Cpu size={12} className="text-primary" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. CTA Section */}
      <section className="relative py-20 bg-background transition-colors duration-300">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ready to Partner with Brainzon?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Schedule an architecture discovery session with our core developers to review your blueprints and scope resources.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/talk-to-expert"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
                )}
              >
                <span>Consult an Expert</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/book-demo"
                className={cn(
                  "inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-lg border border-border bg-card/40 backdrop-blur-sm text-foreground hover:bg-muted/40 transition-colors duration-200"
                )}
              >
                <span>Book Architecture Review</span>
                <ArrowUpRight size={16} className="text-primary" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
