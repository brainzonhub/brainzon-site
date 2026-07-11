import { Container } from "@/components/layout/Container";
import type { LegalDocument } from "@/config/legal";
import { LegalCTA } from "./LegalCTA";
import { LegalHeader } from "./LegalHeader";
import { LegalSection } from "./LegalSection";
import { LegalSidebar } from "./LegalSidebar";
import { LegalTableOfContents } from "./LegalTableOfContents";
export function LegalLayout({ document }: { document: LegalDocument }) { return <><LegalHeader document={document} /><div className="legal-document bg-surface py-10 sm:py-14 print:bg-white print:py-4"><Container><LegalTableOfContents sections={document.sections} mobile /><div className="mt-6 grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start"><LegalSidebar sections={document.sections} /><article className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-9 lg:p-12 print:border-0 print:bg-white print:p-0 print:shadow-none"><p className="border-b border-border pb-8 text-base leading-8 text-muted-foreground">{document.introduction}</p><div className="pt-9">{document.sections.map((section,index) => <LegalSection key={section.id} section={section} index={index} />)}</div><LegalCTA security={document.slug === "security-policy"} /></article></div></Container></div></>; }
