"use client";

import { getUiText, type UiTextKey } from "@/data/uiText";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { ButtonLink } from "@/components/ui/ButtonLink";

type NotFoundBlockProps = {
  title?: string;
  description?: string;
  href?: string;
  actionLabel?: string;
  actionLabelKey?: UiTextKey;
  secondaryHref?: string;
  secondaryActionLabel?: string;
  secondaryActionLabelKey?: UiTextKey;
};

export function NotFoundBlock({
  title,
  description,
  href = "/artifacts",
  actionLabel,
  actionLabelKey,
  secondaryHref,
  secondaryActionLabel,
  secondaryActionLabelKey
}: NotFoundBlockProps) {
  const { locale } = useLocale();
  const resolvedActionLabel = actionLabel ?? (actionLabelKey ? getUiText(actionLabelKey, locale) : getUiText("artifactArchive", locale));
  const resolvedSecondaryActionLabel =
    secondaryActionLabel ?? (secondaryActionLabelKey ? getUiText(secondaryActionLabelKey, locale) : undefined);

  return (
    <div className="glass mx-auto max-w-2xl p-10 text-center">
      <p className="display text-gradient text-7xl sm:text-8xl">404</p>
      <h1 className="mt-6 text-2xl font-semibold text-[var(--theme-text-primary)]">{title ?? getUiText("notFoundTitle", locale)}</h1>
      <p className="mt-3 text-[var(--theme-text-secondary)]">{description ?? getUiText("notFoundDescription", locale)}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href={href}>{resolvedActionLabel}</ButtonLink>
        {secondaryHref && resolvedSecondaryActionLabel ? (
          <ButtonLink href={secondaryHref} variant="secondary">
            {resolvedSecondaryActionLabel}
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
