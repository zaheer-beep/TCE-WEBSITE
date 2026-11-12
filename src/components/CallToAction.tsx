import Link from "next/link";
import { Icon } from "./Icon";

export function CallToAction({
  title = "See what your building is missing.",
  body = "Tell us about your property. We will walk it, tell you what we see, and show you exactly how we would run it.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-brand/25 bg-gradient-to-br from-brand/15 via-surface to-white px-6 py-14 sm:px-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-brand/20 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="h-section">{title}</h2>
          <p className="lede mt-5">{body}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a proposal <Icon name="arrow" className="size-4" />
            </Link>
            <Link href="/projects" className="btn-ghost">
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
