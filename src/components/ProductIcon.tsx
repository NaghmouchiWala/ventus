import type { Product } from "@/lib/products";

export function ProductIcon({
  category,
  className,
}: {
  category: Product["category"];
  className?: string;
}) {
  switch (category) {
    case "Sol":
      return (
        <svg viewBox="0 0 120 160" className={className} fill="none">
          <circle cx="60" cy="55" r="42" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="55" r="6" fill="currentColor" />
          <path d="M60 97 L60 130" stroke="currentColor" strokeWidth="2" />
          <path d="M30 150 L90 150" stroke="currentColor" strokeWidth="2" />
          <path d="M60 130 L40 150 M60 130 L80 150" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "Table":
      return (
        <svg viewBox="0 0 120 140" className={className} fill="none">
          <circle cx="60" cy="50" r="34" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="50" r="5" fill="currentColor" />
          <path d="M60 84 L60 108" stroke="currentColor" strokeWidth="2" />
          <path d="M34 122 L86 122" stroke="currentColor" strokeWidth="2" />
          <path d="M34 122 Q60 108 86 122" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "Mural":
      return (
        <svg viewBox="0 0 140 120" className={className} fill="none">
          <path d="M8 10 L8 110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M8 24 L28 24" stroke="currentColor" strokeWidth="2" />
          <circle cx="78" cy="60" r="38" stroke="currentColor" strokeWidth="2" />
          <circle cx="78" cy="60" r="5" fill="currentColor" />
          <path d="M28 24 Q50 24 60 40" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "Plafonnier":
      return (
        <svg viewBox="0 0 160 110" className={className} fill="none">
          <path d="M80 6 L80 24" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="80" cy="50" rx="72" ry="14" stroke="currentColor" strokeWidth="2" />
          <path
            d="M80 50 L24 36 Q14 34 20 46 Z M80 50 L136 36 Q146 34 140 46 Z M80 50 L24 64 Q14 66 20 54 Z M80 50 L136 64 Q146 66 140 54 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="80" cy="50" r="7" fill="currentColor" />
          <circle cx="80" cy="80" r="5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "Sans pales":
      return (
        <svg viewBox="0 0 100 160" className={className} fill="none">
          <path
            d="M30 150 C20 150 16 140 20 120 C24 95 24 60 34 20 Q40 6 50 6 Q60 6 66 20 C76 60 76 95 80 120 C84 140 80 150 70 150 Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <ellipse cx="50" cy="150" rx="28" ry="6" stroke="currentColor" strokeWidth="2" />
          <path d="M38 90 Q50 96 62 90" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <path d="M36 70 Q50 78 64 70" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
        </svg>
      );
  }
}
