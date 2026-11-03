import { useId } from "react";
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
  odoo: "text-[#714B67] dark:text-[#c49bb9]",
  dynamics365: "text-[#0078D4] dark:text-[#50e6ff]",
  dynamics365bc: "text-[#0078D4] dark:text-[#50e6ff]",
  dynamics: "text-[#0078D4] dark:text-[#50e6ff]",
  businesscentral: "text-[#0078D4] dark:text-[#50e6ff]",
};

/**
 * Official Odoo brand mark vector
 */
export function OdooIcon({ size = 20, className, ...props }: LucideProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("shrink-0 text-[#714B67] dark:text-[#c49bb9]", className)}
      aria-label="Odoo"
      role="img"
      {...props}
    >
      <path d="M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z" />
    </svg>
  );
}

/**
 * Official Microsoft Dynamics 365 Business Central Fluent vector
 */
export function Dynamics365BCIcon({ size = 20, className, ...props }: LucideProps) {
  const reactId = useId();
  const safeId = reactId.replace(/[^a-zA-Z0-9_-]/g, "");
  const p0 = `d365bc-p0-${safeId}`;
  const p1 = `d365bc-p1-${safeId}`;
  const p2 = `d365bc-p2-${safeId}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -2 96 100"
      fill="none"
      className={cn("shrink-0", className)}
      aria-label="Microsoft Dynamics 365 Business Central"
      role="img"
      {...props}
    >
      <defs>
        <linearGradient id={p0} x1="82" y1="30.5" x2="12" y2="30.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#19398E" />
          <stop offset="1" stopColor="#0F2042" />
        </linearGradient>
        <linearGradient id={p1} x1="30" y1="57" x2="82" y2="57" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0078D4" />
          <stop offset="1" stopColor="#143178" />
        </linearGradient>
        <linearGradient id={p2} x1="56" y1="31" x2="56" y2="97" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M12 -1L82 24V58.3245C82 61.0905 79.2601 63.0217 76.6551 62.0917L62 56.8593V37.4241C62 33.258 59.4171 29.5283 55.5172 28.063L48.7034 25.5029C47.3957 25.0116 46 25.9782 46 27.3751V51.1428L12 39V-1Z"
        fill={`url(#${p0})`}
      />
      <path
        d="M82 31C82 35.2 79.4 39 75.4 40.4L30 57V97L82 78V31Z"
        fill={`url(#${p1})`}
      />
      <path
        opacity="0.35"
        d="M82 31C82 35.2 79.4 39 75.4 40.4L30 57V97L82 78V31Z"
        fill={`url(#${p2})`}
      />
      <path
        opacity="0.75"
        d="M62 45.3L46 51.2V74.6C46 76 47.4 77 48.7 76.5L55.5 73.9C59.4 72.5 62 68.7 62 64.6V45.3Z"
        fill="#50E6FF"
      />
    </svg>
  );
}

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
    case "odoo":
    case "odoosolution":
    case "odooerp":
      return <OdooIcon {...mergedProps} />;
    case "dynamics365":
    case "dynamics365bc":
    case "microsoftdynamics365":
    case "microsoftdynamics365bc":
    case "dynamics":
    case "msdynamics":
    case "businesscentral":
      return <Dynamics365BCIcon {...mergedProps} />;
    default:
      return null;
  }
}
