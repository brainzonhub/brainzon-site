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
  Mail,
  Megaphone,
  Receipt,
  Layers,
  Code2,
  Workflow,
  Boxes,
  BookOpen,
  SlidersHorizontal,
  CheckCircle2,
  Server,
  BarChart3,
  Lock,
  Scale,
  Terminal,
  Compass,
  HelpCircle,
  Activity,
  Shield,
  Bot,
  Zap,
  Check,
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
    case "building":
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
    case "file":
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
    case "shield":
      return <Shield {...props} />;
    case "refreshcw":
    case "refresh":
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
    case "mail":
      return <Mail {...props} />;
    case "megaphone":
      return <Megaphone {...props} />;
    case "receipt":
      return <Receipt {...props} />;
    case "layers":
      return <Layers {...props} />;
    case "code2":
    case "code":
      return <Code2 {...props} />;
    case "workflow":
      return <Workflow {...props} />;
    case "boxes":
    case "box":
      return <Boxes {...props} />;
    case "bookopen":
    case "book":
      return <BookOpen {...props} />;
    case "sliders":
    case "slidershorizontal":
      return <SlidersHorizontal {...props} />;
    case "checkcircle":
    case "checkcircle2":
      return <CheckCircle2 {...props} />;
    case "check":
      return <Check {...props} />;
    case "server":
      return <Server {...props} />;
    case "barchart":
    case "barchart3":
      return <BarChart3 {...props} />;
    case "lock":
      return <Lock {...props} />;
    case "scale":
      return <Scale {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    case "compass":
      return <Compass {...props} />;
    case "helpcircle":
      return <HelpCircle {...props} />;
    case "activity":
      return <Activity {...props} />;
    case "bot":
      return <Bot {...props} />;
    case "zap":
      return <Zap {...props} />;
    default:
      return null;
  }
}
