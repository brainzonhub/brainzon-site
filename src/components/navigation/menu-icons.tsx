import {
  Database,
  Users,
  Cpu,
  Network,
  Building2,
  HeartHandshake,
  Sparkles,
  GitBranch,
  Globe,
  Briefcase,
  FileText,
  GraduationCap,
  Factory,
  ShoppingBag,
  HeartPulse,
  Hotel,
  Truck,
  HardHat,
  Cloud,
  ShieldCheck,
  RefreshCw,
  UserCheck,
  Lightbulb,
  Heart,
  TrendingUp,
  Award,
  ShieldAlert,
  type LucideProps
} from "lucide-react";

/**
 * Resolves a Lucide React icon component based on its name string.
 * Normalizes input name to be case-insensitive, space-agnostic, and hyphen-agnostic.
 */
export function getMenuIcon(name: string, props: LucideProps = {}) {
  if (!name) return null;

  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "database":
      return <Database {...props} />;
    case "users":
      return <Users {...props} />;
    case "cpu":
      return <Cpu {...props} />;
    case "network":
      return <Network {...props} />;
    case "building2":
      return <Building2 {...props} />;
    case "hearthandshake":
      return <HeartHandshake {...props} />;
    case "sparkles":
      return <Sparkles {...props} />;
    case "gitbranch":
      return <GitBranch {...props} />;
    case "globe":
      return <Globe {...props} />;
    case "briefcase":
      return <Briefcase {...props} />;
    case "filetext":
      return <FileText {...props} />;
    case "graduationcap":
      return <GraduationCap {...props} />;
    case "factory":
      return <Factory {...props} />;
    case "shoppingbag":
      return <ShoppingBag {...props} />;
    case "heartpulse":
      return <HeartPulse {...props} />;
    case "hotel":
      return <Hotel {...props} />;
    case "truck":
      return <Truck {...props} />;
    case "hardhat":
      return <HardHat {...props} />;
    case "cloud":
      return <Cloud {...props} />;
    case "shieldcheck":
      return <ShieldCheck {...props} />;
    case "refreshcw":
      return <RefreshCw {...props} />;
    case "usercheck":
      return <UserCheck {...props} />;
    case "lightbulb":
      return <Lightbulb {...props} />;
    case "heart":
      return <Heart {...props} />;
    case "trendingup":
      return <TrendingUp {...props} />;
    case "award":
      return <Award {...props} />;
    case "shieldalert":
      return <ShieldAlert {...props} />;
    default:
      return null;
  }
}
