import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  height?: number;
}

export function Logo({ className, height = 36 }: LogoProps) {
  return (
    <div className={cn("relative flex items-center select-none", className)} style={{ height }}>
      <Image
        src="/logo.png"
        alt="Brainzon Logo"
        width={400}
        height={100}
        style={{ height, width: "auto" }}
        className="object-contain"
        priority
      />
    </div>
  );
}
