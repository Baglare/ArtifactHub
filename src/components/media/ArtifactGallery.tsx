"use client";

import { useState } from "react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getLocalizedText } from "@/lib/i18n";
import { getArtifactImages } from "@/lib/media";
import type { Artifact } from "@/types/artifact";

/** Real images from `artifact.media`; one large view with thumbnails when there are several. */
export function ArtifactGallery({ artifact }: { artifact: Artifact }) {
  const { locale } = useLocale();
  const images = getArtifactImages(artifact);
  const [index, setIndex] = useState(0);
  if (!images.length) return null;
  const current = images[Math.min(index, images.length - 1)];

  return (
    <figure className="min-w-0">
      <div className="overflow-hidden rounded-[14px] border border-[color:var(--hairline-strong)] bg-[var(--ink-high)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={getLocalizedText(current.alt, locale)} className="block h-auto w-full" decoding="async" loading="lazy" src={current.src} />
      </div>
      {current.caption ? (
        <figcaption className="mt-3 text-[14px] text-[var(--theme-text-muted)]">{getLocalizedText(current.caption, locale)}</figcaption>
      ) : null}
      {images.length > 1 ? (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              aria-label={getLocalizedText(image.alt, locale)}
              aria-pressed={i === index}
              className={`h-16 w-28 shrink-0 overflow-hidden rounded-md border transition-colors ${
                i === index ? "border-[color:var(--theme-accent-primary)]" : "border-[color:var(--hairline)] opacity-70 hover:opacity-100"
              }`}
              key={image.src}
              onClick={() => setIndex(i)}
              type="button"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" className="h-full w-full object-cover" src={image.src} />
            </button>
          ))}
        </div>
      ) : null}
    </figure>
  );
}
