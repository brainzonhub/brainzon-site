const DEFAULT_SITE_URL = "https://brainzon.com";
const DEFAULT_ADMIN_SITE_URL = "http://localhost:3001";

function parseUrl(value: string, varName: string): string {
  try {
    return new URL(value).origin;
  } catch {
    throw new Error(`${varName} must be a valid absolute URL. Received: ${value}`);
  }
}

export const env = Object.freeze({
  siteUrl: parseUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL, "NEXT_PUBLIC_SITE_URL"),
  adminSiteUrl: parseUrl(process.env.NEXT_PUBLIC_ADMIN_SITE_URL ?? DEFAULT_ADMIN_SITE_URL, "NEXT_PUBLIC_ADMIN_SITE_URL"),
});
