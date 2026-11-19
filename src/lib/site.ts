const fallbackSiteUrl = "https://artifacthub.baglare.com.tr";

/**
 * Public origin used for canonical URLs, Open Graph images and the sitemap.
 * Override at build time with NEXT_PUBLIC_SITE_URL (for example a subdomain on TurkHosting).
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/+$/, "");

export function absoluteUrl(path = "/"): string {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
