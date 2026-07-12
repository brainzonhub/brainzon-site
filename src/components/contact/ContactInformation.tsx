"use client";

import { Container } from "@/components/layout/Container";
import { companyContactInfo } from "@/config/contact";
import { MapPin, Mail, ShieldCheck, Headphones, Wallet } from "lucide-react";

export function ContactInformation() {
  const departments = [
    {
      title: "General Inquiry",
      email: companyContactInfo.emails.general,
      description: "For corporate partnerships, PR/media inquiries, and administrative requests.",
      icon: Mail,
    },
    {
      title: "Enterprise Sales",
      email: companyContactInfo.emails.sales,
      description: "Request pricing details, schedule software walkthroughs, and custom contracts.",
      icon: Wallet,
    },
    {
      title: "Technical Support",
      email: companyContactInfo.emails.support,
      description: "Dedicated assistance for existing clients, service queries, and user licensing issues.",
      icon: Headphones,
    },
    {
      title: "Security & Compliance",
      email: companyContactInfo.emails.security,
      description: "Report vulnerabilities, request SOC2/ISO audits, and review security policies.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-border/40 bg-surface/30 transition-colors duration-300">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-heading-2 font-bold tracking-tight text-foreground">
            Contact Channels & Offices
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            Reach out directly to the specialized team that can resolve your questions as quickly as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Headquarters Info */}
          <div className="lg:col-span-4 p-8 rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-card flex flex-col justify-between hover:border-primary/30 transition-colors duration-300">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 mb-6">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground">Corporate Headquarters</h3>
              <p className="text-xs font-semibold text-primary mt-2">
                {companyContactInfo.headquarters.companyName} ({companyContactInfo.headquarters.country})
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                {companyContactInfo.headquarters.address}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/40 text-left">
              <span className="block text-[9px] font-mono font-bold tracking-wider text-muted-foreground uppercase">General Phone</span>
              <a href={`tel:${companyContactInfo.phone}`} className="text-sm font-bold text-foreground mt-1 hover:text-primary transition-colors block">
                {companyContactInfo.phone}
              </a>
              <span className="block text-[9px] font-mono font-semibold tracking-wider text-muted-foreground/60 mt-3">
                {companyContactInfo.businessHours}
              </span>
            </div>
          </div>

          {/* Department Emails Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.title}
                  className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/30 transition-colors duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-sm font-bold text-foreground">{dept.title}</h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/20">
                    <a
                      href={`mailto:${dept.email}`}
                      className="text-xs font-bold text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      {dept.email}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
