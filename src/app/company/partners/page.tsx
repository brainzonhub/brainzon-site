import { Metadata } from "next";
import { companyConfig } from "@/config/company";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Globe, Cpu, Cloud, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Partners - Strategic Alliances & Cloud Network",
  description: "Learn about Brainzon's alliance partners including Microsoft, Odoo, AWS, Google Cloud, and Azure supporting our client solutions.",
  openGraph: {
    title: "Our Partners - Strategic Alliances & Cloud Network",
    description: "Learn about Brainzon's alliance partners including Microsoft, Odoo, AWS, Google Cloud, and Azure supporting our client solutions.",
    type: "website"
  }
};

export default function PartnersPage() {
  const { partners } = companyConfig;

  return (
    <div className="flex flex-col min-h-screen bg-background">
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
              Alliances & Ecosystem
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
              Strategic Partners
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-foreground mt-2 leading-tight">
              <span className="bg-brand-gradient bg-clip-text text-transparent">Powering Global Enterprise Platforms</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Brainzon collaborates with leading software providers, cloud infrastructures, and artificial intelligence platforms to deliver unified operations.
            </p>
          </div>
        </Container>
      </section>

      {/* Partners Grid */}
      <section className="relative py-20 bg-surface/30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => {
              const IconComponent = {
                Globe,
                Cpu,
                Cloud,
                Sparkles,
                ShieldCheck
              }[partner.icon] || HelpCircle;

              return (
                <div
                  key={partner.name}
                  className="group relative p-6 sm:p-8 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-muted-foreground uppercase border border-border/60 px-2 py-0.5 rounded-full bg-surface">
                        {partner.tier}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-3">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 border-t border-border/40 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card/40 backdrop-blur-md p-8 md:p-12 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Interested in Partnering?
            </h2>
            <p className="mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
              We look for consulting firms, integration providers, and platform ISVs to join our digital ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-200"
              >
                <span>Become a Partner</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
