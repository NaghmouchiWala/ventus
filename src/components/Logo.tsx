import { cn } from "@/lib/cn";

export function Logo({
  className,
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <span className="flex flex-col gap-1.5">
      <span
        className={cn(
          "font-display font-semibold tracking-[0.35em] text-[#f5f5f5] select-none",
          className
        )}
      >
        VENTUS
      </span>
      {withTagline && (
        <span className="text-[9px] tracking-[0.3em] text-white/40">
          L&rsquo;AIR D&rsquo;UN MEILLEUR QUOTIDIEN
        </span>
      )}
    </span>
  );
}
