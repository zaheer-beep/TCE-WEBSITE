import Link from "next/link";
import type { Service } from "@/lib/services";
import { Icon } from "./Icon";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group relative flex h-full flex-col p-7 transition-colors hover:border-brand/60 hover:bg-panel-2"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
          <Icon name={service.icon} />
        </span>
        {index !== undefined && (
          <span className="text-sm font-semibold tabular-nums text-white/25">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-mist">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky">
        Learn more
        <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
