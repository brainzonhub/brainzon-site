import {
  Sparkles,
  BrainCircuit,
  FileCheck,
  ChartNoAxesCombined,
  GitBranch,
  Landmark,
  Handshake,
  MessageSquareText,
  Factory,
  Users,
  Target,
  Briefcase,
  Code2,
  Activity,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

const icons: Readonly<Record<string, LucideIcon>> = {
  Sparkles,
  BrainCircuit,
  FileCheck,
  ChartNoAxesCombined,
  GitBranch,
  Landmark,
  Handshake,
  MessageSquareText,
  Factory,
  Users,
  Target,
  Briefcase,
  Code2,
  Activity,
};

export function AIIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? HelpCircle;
  return <Icon className={className} aria-hidden="true" />;
}
