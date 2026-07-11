import {
  Unplug,
  Workflow,
  FileCheck,
  RefreshCw,
  Zap,
  ShieldAlert,
  LayoutGrid,
  RefreshCcw,
  GitBranch,
  TrendingUp,
  Database,
  Users,
  ShoppingCart,
  Cpu,
  Code2,
  Factory,
  Store,
  HeartPulse,
  Truck,
  Hotel,
  Shield,
  Key,
  Activity,
  Layers,
  Award,
  Boxes,
  Briefcase,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const icons: Readonly<Record<string, LucideIcon>> = {
  Unplug,
  Workflow,
  FileCheck,
  RefreshCw,
  Zap,
  ShieldAlert,
  LayoutGrid,
  RefreshCcw,
  GitBranch,
  TrendingUp,
  Database,
  Users,
  ShoppingCart,
  Cpu,
  Code2,
  Factory,
  Store,
  HeartPulse,
  Truck,
  Hotel,
  Shield,
  Key,
  Activity,
  Layers,
  Award,
  Boxes,
  Briefcase,
  Network,
  ShieldCheck,
};

interface SolutionsIconProps {
  name: string;
  className?: string;
}

export function SolutionsIcon({ name, className }: SolutionsIconProps) {
  const Icon = icons[name] ?? Zap;
  return <Icon className={className} aria-hidden="true" />;
}
