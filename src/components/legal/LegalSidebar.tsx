import type { LegalSectionData } from "@/config/legal";
import { LegalTableOfContents } from "./LegalTableOfContents";
export function LegalSidebar({ sections }: { sections: readonly LegalSectionData[] }) { return <aside className="hidden lg:block print:hidden"><div className="sticky top-24 rounded-2xl border border-border bg-card/85 p-5 shadow-card backdrop-blur"><p className="mb-4 px-3 text-xs font-bold uppercase tracking-[.18em] text-foreground">On this page</p><LegalTableOfContents sections={sections} /></div></aside>; }
