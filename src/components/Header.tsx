"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Icon } from "./Icon";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the home page video the header is transparent with white text.
  const overlay = pathname === "/" && !scrolled && !open;
  const links = nav.filter((item) => item.href !== "/contact");

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        overlay ? "border-b border-transparent bg-transparent text-white" : "border-b border-line bg-white text-brand-deep"
      }`}
    >
      <div className="container-x grid h-20 grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-bold uppercase tracking-[0.12em] underline-offset-8 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex items-center justify-self-start md:justify-self-center"
          aria-label="TCE Property Management, home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/tce-logo.png"
            alt=""
            width={466}
            height={473}
            priority
            className={`h-14 w-auto transition-[filter] duration-300 ${overlay ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <div className="hidden justify-self-end md:block">
          <Link
            href="/contact"
            className={`inline-flex items-center border px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] transition-colors ${
              overlay
                ? "border-white text-white hover:bg-white hover:text-brand-deep"
                : "border-brand-deep text-brand-deep hover:bg-brand-deep hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center justify-self-end md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <Icon name="x" />
          ) : (
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-white md:hidden">
          <div className="container-x flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-display text-2xl uppercase text-brand-deep"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-6">
              Request a proposal
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
