import { Container } from "@/components/layout/Container";

export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-background">
      <Container>
        <div className="flex flex-col items-center justify-center text-center gap-4">
          {/* Animated concentric loader circles */}
          <div className="relative flex items-center justify-center size-16">
            <div className="absolute inset-0 rounded-full border-4 border-primary/10" />
            <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin" />
            <div className="size-8 rounded-full border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent animate-[spin_1.5s_linear_infinite]" />
          </div>
          
          <span className="text-xs font-mono font-bold tracking-widest text-muted-foreground uppercase animate-pulse">
            Loading System Resources...
          </span>
        </div>
      </Container>
    </div>
  );
}
