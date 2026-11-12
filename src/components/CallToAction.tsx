import Image from "next/image";
import Link from "next/link";

export function CallToAction({
  title = "See what your building is missing.",
  body = "Tell us about your property. We will walk it, tell you what we see, and show you exactly how we would run it.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/skyline.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/60" />
      <div className="container-x py-24 text-center text-white sm:py-36">
        <p className="text-xs font-bold uppercase tracking-[0.2em]">Start a conversation</p>
        <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl uppercase leading-none text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">{body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-light">
            Request a proposal
          </Link>
          <Link href="/projects" className="btn-light">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
