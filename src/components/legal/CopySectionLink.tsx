"use client";
import { Check, Link2 } from "lucide-react";
import { useState } from "react";

export function CopySectionLink({ sectionId }: { sectionId: string }) {
  const [copied, setCopied] = useState(false);
  async function copyLink() {
    const url = new URL(window.location.href); url.hash = sectionId;
    await navigator.clipboard.writeText(url.toString());
    setCopied(true); window.setTimeout(() => setCopied(false), 1800);
  }
  return <button type="button" onClick={copyLink} className="legal-copy-link inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring print:hidden" aria-label={`Copy link to this section`}>{copied ? <Check className="size-3.5 text-emerald-500" /> : <Link2 className="size-3.5" />}{copied ? "Copied" : "Copy link"}</button>;
}
