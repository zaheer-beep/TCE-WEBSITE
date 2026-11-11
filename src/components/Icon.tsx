import type { IconName } from "@/lib/services";

const paths: Record<IconName | "arrow" | "check" | "x" | "phone" | "mail" | "pin" | "clock", React.ReactNode> = {
  building: (
    <>
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" />
      <path d="M2 21h20M8 8h2M8 12h2M8 16h2M17 14h.01M17 17h.01" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 12l2 2 4-4M9 17h6" />
    </>
  ),
  crane: (
    <>
      <path d="M6 21V4l12 4H6M6 8h9M15 8v4" />
      <rect x="13.5" y="12" width="3" height="3" />
      <path d="M3 21h8M4 4h2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.800-1.200-8-4.500-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18M7 21h10M5 7h14" />
      <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
    </>
  ),
  wrench: (
    <path d="M14.500 6.500a4 4 0 0 0 5 5L21 13l-8 8a2.800 2.800 0 0 1-4-4l8-8-1.500-1.500a4 4 0 0 0-5-5l2.500 2.500-1 3-3 1L6.500 6.500" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.500l4.500 4.500L19 7.500" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  phone: (
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.200 7-11a7 7 0 0 0-14 0c0 4.800 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.500" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

export function Icon({
  name,
  className = "size-6",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
