"use client";

import { useEffect, useRef, useState } from "react";

/** Full-bleed looping background video with a pause control. */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Respect visitors who ask for reduced motion: show the still poster instead.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }
    video.play().catch(() => {});
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 size-full object-cover"
        poster="/video/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background video" : "Play background video"}
        className="absolute bottom-6 right-6 z-10 inline-flex size-11 items-center justify-center rounded-full border border-white/70 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-deep"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
          {playing ? <path d="M7 5h3.500v14H7zM13.500 5H17v14h-3.500z" /> : <path d="M8 5l11 7-11 7z" />}
        </svg>
      </button>
    </>
  );
}
