import {
  AppWindow, BadgeCheck, Blocks, Boxes, BrainCircuit, BriefcaseBusiness,
  ChartNoAxesCombined, CodeXml, Eye, Factory, Handshake, HardHat, HeartPulse,
  Hotel, Landmark, Layers3, LifeBuoy, ShieldCheck, ShoppingCart, Sprout, Store,
  TrendingUp, Truck, Unplug, Users, Workflow, Zap, type LucideIcon,
} from "lucide-react";

const icons: Readonly<Record<string, LucideIcon>> = {
  AppWindow, BadgeCheck, Blocks, Boxes, BrainCircuit, BriefcaseBusiness,
  ChartNoAxesCombined, CodeXml, Eye, Factory, Handshake, HardHat, HeartPulse,
  Hotel, Landmark, Layers3, LifeBuoy, Microsoft: AppWindow, ShieldCheck,
  ShoppingCart, Sprout, Store, TrendingUp, Truck, Unplug, Users, Workflow, Zap,
};

export function ERPIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Blocks;
  return <Icon className={className} aria-hidden="true" />;
}
