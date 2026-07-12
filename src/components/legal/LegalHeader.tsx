import React from "react";
import { FileCheck2, LockKeyhole } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { LegalDocument } from "@/config/legal";
import { LastUpdated } from "./LastUpdated";

export function LegalHeader({ document }: { document: LegalDocument }) {
  const Icon = document.slug === "security-policy" ? LockKeyhole : FileCheck2;
  
  return (
    <header className="legal-header relative overflow-hidden border-b border-border/40 bg-background py-16 sm:py-20 print:bg-white print:py-8">
      {/* Subtle tech background grid (similar to other subpages) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(30,51,77,0.03)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />

      <Container className="relative">
        <div className="max-w-4xl">
          <span className="inline-flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary print:border-slate-300 print:bg-white print:text-slate-900">
            <Icon className="size-6" />
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[.24em] text-primary print:text-slate-600">
            Legal & Trust Center
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl print:text-slate-950">
            {document.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground print:text-slate-700">
            {document.subtitle}
          </p>
          <div className="mt-7">
            <LastUpdated date={document.lastUpdated} />
          </div>
        </div>
      </Container>
    </header>
  );
}
