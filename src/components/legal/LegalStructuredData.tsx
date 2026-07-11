import type { LegalDocument } from "@/config/legal";
import { createLegalBreadcrumb } from "@/lib/legal";
export function LegalStructuredData({ document }: { document: LegalDocument }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createLegalBreadcrumb(document)).replace(/</g,"\\u003c") }} />; }
