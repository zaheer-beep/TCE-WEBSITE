import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-5">This page could not be found.</h1>
      <p className="lede mx-auto mt-6 max-w-xl">
        The page may have moved when we rebuilt the site.
      </p>
      <div className="mt-9 flex justify-center gap-4">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/services" className="btn-ghost">View services</Link>
      </div>
    </section>
  );
}
