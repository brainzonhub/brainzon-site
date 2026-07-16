import { Quote } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/config/case-studies";

export function ClientQuote({ study }: { study: CaseStudy }) {
  return <section aria-label="Client feedback" className="py-24"><Container><figure className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-technology-gradient p-8 text-white shadow-elevated sm:p-12 lg:p-16"><div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand-cyan/15 blur-3xl" /><Quote className="size-10 text-brand-cyan-light" aria-hidden="true" /><blockquote className="relative mt-7 max-w-5xl text-2xl font-bold leading-relaxed sm:text-3xl">“{study.quote.text}”</blockquote><figcaption className="relative mt-8 border-t border-white/10 pt-6"><p className="font-bold text-white">{study.quote.attribution}</p><p className="mt-1 text-sm text-slate-300">{study.quote.role}</p></figcaption></figure></Container></section>;
}
