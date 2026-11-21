type BrandMarkProps = {
  className?: string;
};

/** A miniature astrolabe: limb, one maturity ring, the rule and the throne ring on top. */
export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
      <circle cx="16" cy="18" r="12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="18" r="6.5" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1" />
      <path d="M5.6 24 26.4 12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <circle cx="16" cy="18" fill="currentColor" r="1.6" />
      <path d="M13.2 6.2a2.8 2.8 0 0 1 5.6 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}
