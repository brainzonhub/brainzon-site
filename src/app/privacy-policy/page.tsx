import { LegalLayout } from "@/components/legal/LegalLayout";
import { LegalStructuredData } from "@/components/legal/LegalStructuredData";
import { legalDocuments } from "@/config/legal";
import { createLegalMetadata } from "@/lib/legal";
const document = legalDocuments["privacy-policy"];
export const metadata = createLegalMetadata(document);
export default function PrivacyPolicyPage() { return <><LegalStructuredData document={document} /><LegalLayout document={document} /></>; }
