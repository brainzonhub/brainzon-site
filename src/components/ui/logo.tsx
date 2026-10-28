import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height }: LogoProps) {
  const hasHeightClass = className?.includes("h-");
  const effectiveHeight = height ?? (hasHeightClass ? undefined : 26);

  return (
    <div
      className={cn("relative flex items-center select-none", className)}
      style={effectiveHeight ? { height: effectiveHeight } : undefined}
    >
      <Image
        src="/logo.png"
        alt="Brainzon Logo"
        width={778}
        height={122}
        style={effectiveHeight ? { height: effectiveHeight, width: "auto" } : { width: "auto" }}
        className="object-contain max-h-full w-auto"
        priority
      />
    </div>
  );
}
