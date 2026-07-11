"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/Container";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application segment error caught:", error);
  }, [error]);

  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-background">
      <Container>
        <div className="max-w-md mx-auto p-8 rounded-3xl border border-border bg-card/40 backdrop-blur-md text-center flex flex-col items-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary mb-6 animate-pulse">
            <AlertCircle size={24} />
          </div>
          <h2 className="text-lg font-bold text-foreground mb-2">
            System Error Occurred
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed mb-6">
            An unexpected runtime segment failure occurred. Let&apos;s try to recover the current routing state.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary transition-all duration-200"
          >
            <RefreshCw size={12} className="animate-[spin_4s_linear_infinite]" />
            <span>Reset Page Route</span>
          </button>
        </div>
      </Container>
    </div>
  );
}
