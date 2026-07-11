"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Critical root layout failure:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#020817] text-white flex items-center justify-center p-6 font-sans">
        <div className="max-w-md w-full p-8 rounded-3xl border border-slate-800 bg-slate-950 text-center flex flex-col items-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 mb-6">
            <AlertCircle size={24} />
          </div>
          <h2 className="text-lg font-bold text-white mb-2">
            Critical System Outage
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            A fatal root layout rendering error occurred. Let&apos;s attempt to re-bootstrap the platform.
          </p>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200"
          >
            <RefreshCw size={12} />
            <span>Re-bootstrap Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
