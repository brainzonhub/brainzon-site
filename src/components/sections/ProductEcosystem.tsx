import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { productsConfig } from "@/config/products";
import { getMenuIcon } from "@/components/navigation/menu-icons";
import { cn } from "@/lib/utils";

export function ProductEcosystem() {
  return (
    <section className="relative py-20 border-b border-border/40 bg-surface transition-colors duration-300">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[60%] w-[60%] rounded-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-50 blur-3xl pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-heading-2 font-bold tracking-tight text-foreground">
            Our Product Ecosystem
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Data-driven, highly integrated enterprise SaaS platforms built on modern intelligence architectures to future-proof your workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsConfig.map((product) => (
            <div
              key={product.name}
              className={cn(
                "group relative p-6 sm:p-8 rounded-2xl border border-border shadow-card bg-card/40 backdrop-blur-md",
                "hover:border-primary/50 hover:shadow-glow-primary transition-all duration-300 flex flex-col justify-between"
              )}
            >
              {/* Card glowing accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-300" />
              
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
                    {getMenuIcon(product.icon, { size: 24 })}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                      {product.name === "BrainERP" && "ERP Platform"}
                      {product.name === "BrainCRM" && "CRM Platform"}
                      {product.name === "BrainAI" && "AI Platform"}
                      {product.name === "BrainConnect" && "Integration System"}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Features Checklist */}
                <div className="mt-6 space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Core Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <Check size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-border/40 flex items-center justify-between">
                <Link
                  href={product.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-secondary-foreground transition-colors group/link",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                  )}
                >
                  <span>Explore {product.name}</span>
                  <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
