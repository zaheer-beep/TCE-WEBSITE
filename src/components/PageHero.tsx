export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 size-[32rem] rounded-full bg-brand/20 blur-3xl"
      />
      <div className="container-x relative py-20 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-4xl">{title}</h1>
        <p className="lede mt-6 max-w-2xl">{lede}</p>
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
