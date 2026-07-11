const DEFAULT_SITE_URL = "http://localhost:3000";

function parseUrl(value: string): string {
  try {
    return new URL(value).origin;
  } catch {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be a valid absolute URL. Received: ${value}`);
  }
}

export const env = Object.freeze({
  siteUrl: parseUrl(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL),
});
