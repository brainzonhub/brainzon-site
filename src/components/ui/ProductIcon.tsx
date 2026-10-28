import Image from "next/image";
import { cn } from "@/lib/utils";

export type ProductSlug = "brainmkt" | "braincrm" | "brainerp" | "brainbooks";

export interface ProductIconMeta {
  slug: ProductSlug;
  name: string;
  letter: string;
  src: string;
}

export const PRODUCT_ICONS: Record<ProductSlug, ProductIconMeta> = {
  brainmkt: {
    slug: "brainmkt",
    name: "BrainMKT",
    letter: "M",
    src: "/images/products/brainmkt.png",
  },
  braincrm: {
    slug: "braincrm",
    name: "BrainCRM",
    letter: "C",
    src: "/images/products/braincrm.png",
  },
  brainerp: {
    slug: "brainerp",
    name: "BrainERP",
    letter: "E",
    src: "/images/products/brainerp.png",
  },
  brainbooks: {
    slug: "brainbooks",
    name: "BrainBooks",
    letter: "B",
    src: "/images/products/brainbooks.png",
  },
};

export const PRODUCT_LOGOS: Record<ProductSlug, { slug: ProductSlug; name: string; src: string }> = {
  brainmkt: {
    slug: "brainmkt",
    name: "BrainMKT",
    src: "/images/products/brainmkt-logo.png",
  },
  braincrm: {
    slug: "braincrm",
    name: "BrainCRM",
    src: "/images/products/braincrm-logo.png",
  },
  brainerp: {
    slug: "brainerp",
    name: "BrainERP",
    src: "/images/products/brainerp-logo.png",
  },
  brainbooks: {
    slug: "brainbooks",
    name: "BrainBooks",
    src: "/images/products/brainbooks-logo.png",
  },
};

export function normalizeProductSlug(name: string): ProductSlug | null {
  if (!name) return null;
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (normalized === "brainmkt" || normalized === "mkt") return "brainmkt";
  if (normalized === "braincrm" || normalized === "crm") return "braincrm";
  if (normalized === "brainerp" || normalized === "erp") return "brainerp";
  if (normalized === "brainbooks" || normalized === "books") return "brainbooks";
  return null;
}

export function isProductSlug(name: string): boolean {
  return normalizeProductSlug(name) !== null;
}

export interface ProductIconProps {
  product: string;
  size?: number;
  className?: string;
  priority?: boolean;
}

export function ProductIcon({
  product,
  size = 24,
  className,
  priority = false,
}: ProductIconProps) {
  const slug = normalizeProductSlug(product);
  if (!slug) return null;

  const item = PRODUCT_ICONS[slug];

  return (
    <Image
      src={item.src}
      alt={`${item.name} Icon`}
      width={size}
      height={size}
      priority={priority}
      className={cn("object-contain shrink-0 aspect-square select-none", className)}
      style={{ width: size, height: size }}
    />
  );
}

export interface ProductLogoProps {
  product: string;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function ProductLogo({
  product,
  height = 56,
  className,
  priority = true,
}: ProductLogoProps) {
  const slug = normalizeProductSlug(product);
  if (!slug) return null;

  const item = PRODUCT_LOGOS[slug];

  return (
    <Image
      src={item.src}
      alt={`${item.name} Logo`}
      width={height * 4}
      height={height}
      priority={priority}
      className={cn("object-contain w-auto select-none", className)}
      style={{ height, width: "auto" }}
    />
  );
}
