import { cn } from "@/lib/utils";
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
import { ProductIcon, normalizeProductSlug } from "@/components/ui/ProductIcon";

/**
 * Resolves a Lucide React icon component based on its name string.
 * Normalizes input name to be case-insensitive, space-agnostic, and hyphen-agnostic.
 */

/* ── Vibrant color mapping for all non-product icons ── */
export const MENU_ICON_COLORS: Record<string, string> = {
  // Enterprise & Architecture
  layers: "text-purple-500 dark:text-purple-400",
  boxes: "text-amber-500 dark:text-amber-400",
  box: "text-amber-500 dark:text-amber-400",
  database: "text-violet-500 dark:text-violet-400",
  server: "text-blue-500 dark:text-blue-400",
  network: "text-blue-500 dark:text-blue-400",
  cpu: "text-cyan-500 dark:text-cyan-400",
  cloud: "text-sky-500 dark:text-sky-400",
  code2: "text-teal-500 dark:text-teal-400",
  code: "text-teal-500 dark:text-teal-400",
  terminal: "text-emerald-500 dark:text-emerald-400",
  workflow: "text-indigo-500 dark:text-indigo-400",
  gitbranch: "text-blue-500 dark:text-blue-400",
  refreshcw: "text-orange-500 dark:text-orange-400",
  refresh: "text-orange-500 dark:text-orange-400",
  
  // CRM, Team & Trust
  users: "text-amber-500 dark:text-amber-400",
  usercheck: "text-teal-500 dark:text-teal-400",
  building2: "text-blue-600 dark:text-blue-400",
  building: "text-blue-600 dark:text-blue-400",
  briefcase: "text-indigo-500 dark:text-indigo-400",
  hearthandshake: "text-rose-500 dark:text-rose-400",
  heart: "text-rose-500 dark:text-rose-400",
  trendingup: "text-emerald-500 dark:text-emerald-400",
  award: "text-yellow-500 dark:text-yellow-400",
  lightbulb: "text-amber-400 dark:text-amber-300",
  sparkles: "text-amber-400 dark:text-amber-300",
  zap: "text-amber-400 dark:text-amber-300",
  bot: "text-cyan-500 dark:text-cyan-400",
  compass: "text-purple-500 dark:text-purple-400",
  
  // Marketing & Accounting
  megaphone: "text-cyan-500 dark:text-cyan-400",
  receipt: "text-emerald-500 dark:text-emerald-400",
  scale: "text-indigo-500 dark:text-indigo-400",
  filetext: "text-blue-500 dark:text-blue-400",
  file: "text-blue-500 dark:text-blue-400",
  bookopen: "text-emerald-500 dark:text-emerald-400",
  book: "text-emerald-500 dark:text-emerald-400",
  mail: "text-sky-500 dark:text-sky-400",
  barchart: "text-cyan-500 dark:text-cyan-400",
  barchart3: "text-cyan-500 dark:text-cyan-400",
  
  // Governance & Security
  shieldcheck: "text-emerald-500 dark:text-emerald-400",
  shield: "text-emerald-500 dark:text-emerald-400",
  shieldalert: "text-rose-500 dark:text-rose-400",
  lock: "text-amber-500 dark:text-amber-400",
  checkcircle: "text-emerald-500 dark:text-emerald-400",
  checkcircle2: "text-emerald-500 dark:text-emerald-400",
  check: "text-emerald-500 dark:text-emerald-400",
  
  // Industry Verticals
  factory: "text-amber-600 dark:text-amber-400",
  shoppingbag: "text-rose-500 dark:text-rose-400",
  heartpulse: "text-red-500 dark:text-red-400",
  hotel: "text-orange-500 dark:text-orange-400",
  truck: "text-emerald-600 dark:text-emerald-400",
  hardhat: "text-yellow-600 dark:text-yellow-400",
  graduationcap: "text-purple-500 dark:text-purple-400",
  globe: "text-cyan-500 dark:text-cyan-400",
  activity: "text-rose-500 dark:text-rose-400",
  helpcircle: "text-sky-500 dark:text-sky-400",
  sliders: "text-violet-500 dark:text-violet-400",
  slidershorizontal: "text-violet-500 dark:text-violet-400",
};

export function getMenuIcon(name: string, props: LucideProps = {}) {
  if (!name) return null;

  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  const productSlug = normalizeProductSlug(normalized);
  if (productSlug) {
    const numericSize =
      typeof props.size === "number"
        ? props.size
        : typeof props.size === "string"
        ? parseInt(props.size, 10) || 20
        : 20;
    return <ProductIcon product={productSlug} size={numericSize} className={props.className} />;
  }

  const colorClass = MENU_ICON_COLORS[normalized] || "text-primary";
  const mergedProps: LucideProps = {
    ...props,
    className: cn(colorClass, props.className),
  };

  switch (normalized) {
    case "database":
      return <Database {...mergedProps} />;
    case "users":
      return <Users {...mergedProps} />;
    case "cpu":
      return <Cpu {...mergedProps} />;
    case "network":
      return <Network {...mergedProps} />;
    case "building2":
    case "building":
      return <Building2 {...mergedProps} />;
    case "hearthandshake":
      return <HeartHandshake {...mergedProps} />;
    case "sparkles":
      return <Sparkles {...mergedProps} />;
    case "gitbranch":
      return <GitBranch {...mergedProps} />;
    case "globe":
      return <Globe {...mergedProps} />;
    case "briefcase":
      return <Briefcase {...mergedProps} />;
    case "filetext":
    case "file":
      return <FileText {...mergedProps} />;
    case "graduationcap":
      return <GraduationCap {...mergedProps} />;
    case "factory":
      return <Factory {...mergedProps} />;
    case "shoppingbag":
      return <ShoppingBag {...mergedProps} />;
    case "heartpulse":
      return <HeartPulse {...mergedProps} />;
    case "hotel":
      return <Hotel {...mergedProps} />;
    case "truck":
      return <Truck {...mergedProps} />;
    case "hardhat":
      return <HardHat {...mergedProps} />;
    case "cloud":
      return <Cloud {...mergedProps} />;
    case "shieldcheck":
      return <ShieldCheck {...mergedProps} />;
    case "shield":
      return <Shield {...mergedProps} />;
    case "refreshcw":
    case "refresh":
      return <RefreshCw {...mergedProps} />;
    case "usercheck":
      return <UserCheck {...mergedProps} />;
    case "lightbulb":
      return <Lightbulb {...mergedProps} />;
    case "heart":
      return <Heart {...mergedProps} />;
    case "trendingup":
      return <TrendingUp {...mergedProps} />;
    case "award":
      return <Award {...mergedProps} />;
    case "shieldalert":
      return <ShieldAlert {...mergedProps} />;
    case "mail":
      return <Mail {...mergedProps} />;
    case "megaphone":
      return <Megaphone {...mergedProps} />;
    case "receipt":
      return <Receipt {...mergedProps} />;
    case "layers":
      return <Layers {...mergedProps} />;
    case "code2":
    case "code":
      return <Code2 {...mergedProps} />;
    case "workflow":
      return <Workflow {...mergedProps} />;
    case "boxes":
    case "box":
      return <Boxes {...mergedProps} />;
    case "bookopen":
    case "book":
      return <BookOpen {...mergedProps} />;
    case "sliders":
    case "slidershorizontal":
      return <SlidersHorizontal {...mergedProps} />;
    case "checkcircle":
    case "checkcircle2":
      return <CheckCircle2 {...mergedProps} />;
    case "check":
      return <Check {...mergedProps} />;
    case "server":
      return <Server {...mergedProps} />;
    case "barchart":
    case "barchart3":
      return <BarChart3 {...mergedProps} />;
    case "lock":
      return <Lock {...mergedProps} />;
    case "scale":
      return <Scale {...mergedProps} />;
    case "terminal":
      return <Terminal {...mergedProps} />;
    case "compass":
      return <Compass {...mergedProps} />;
    case "helpcircle":
      return <HelpCircle {...mergedProps} />;
    case "activity":
      return <Activity {...mergedProps} />;
    case "bot":
      return <Bot {...mergedProps} />;
    case "zap":
      return <Zap {...mergedProps} />;
    default:
      return null;
  }
}
