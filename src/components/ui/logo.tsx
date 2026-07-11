import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 36 }: LogoProps) {
  // Width based on the visual aspect ratio of the logo image
  const width = Math.round(height * 3.75);

  return (
    <div className={cn("relative flex items-center select-none", className)} style={{ height }}>
      <Image
        src="/logo.png"
        alt="Brainzon Logo"
        width={width}
        height={height}
        className="object-contain"
        style={{ height: "100%", width: "auto" }}
        priority
      />
    </div>
  );
}
