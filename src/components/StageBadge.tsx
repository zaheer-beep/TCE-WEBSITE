import type { Stage } from "@/lib/projects";

const styles: Record<Stage, string> = {
  Before: "bg-white/95 text-navy",
  During: "bg-amber-100/95 text-amber-900",
  After: "bg-brand-deep text-white",
};

export function StageBadge({ stage }: { stage: Stage }) {
  return (
    <span
      className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] shadow-sm ${styles[stage]}`}
    >
      {stage}
    </span>
  );
}
