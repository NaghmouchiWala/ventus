export function PillarIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const common = { className, fill: "none" as const };
  switch (name) {
    case "Fraîcheur Puissante":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path
            d="M8 16c4 0 6-3 6-6s2-6 6-6 6 3 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 24h22c4 0 6-3 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 32h16c4 0 6 3 6 6s-2 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "Confort Silencieux":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path
            d="M24 8 C16 8 10 12 10 20 C10 26 13 30 17 32 L17 40 L24 34 L31 32 C35 30 38 26 38 20 C38 12 32 8 24 8 Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M18 20h12M18 25h8" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        </svg>
      );
    case "Design Moderne":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <path
            d="M24 6 L40 16 L24 26 L8 16 Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M8 24 L24 34 L40 24" stroke="currentColor" strokeWidth="2" />
          <path d="M8 32 L24 42 L40 32" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        </svg>
      );
    case "Télécommande":
      return (
        <svg viewBox="0 0 48 48" {...common}>
          <rect x="17" y="6" width="14" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="24" cy="14" r="2" fill="currentColor" />
          <path d="M20 22h8M20 27h8M20 32h8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}
