import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  clean?: boolean;
}

export function Container({ className, clean = false, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        !clean && "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  );
}
