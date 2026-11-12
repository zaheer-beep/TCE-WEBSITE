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
    <section className="border-b border-line bg-surface">
      <div className="container-x py-16 sm:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-5 max-w-5xl">{title}</h1>
        <p className="lede mt-7 max-w-2xl">{lede}</p>
        {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}
