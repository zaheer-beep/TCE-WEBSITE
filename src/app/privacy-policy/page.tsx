import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import content from "./content.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TCE Property Management collects, uses and protects your information.",
  alternates: { canonical: "/privacy-policy" },
};

type Block = { p?: string; ul?: string[] };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lede="How we collect, use and protect the information you share with us."
      />
      <article className="container-x max-w-3xl space-y-12 py-16 sm:py-24">
        {content.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-mist">
              {(section.blocks as Block[]).map((block, i) =>
                block.ul ? (
                  <ul key={i} className="list-disc space-y-2 pl-6 marker:text-brand-deep">
                    {block.ul.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i}>{block.p}</p>
                ),
              )}
            </div>
          </section>
        ))}
        <p className="text-mist">
          <Link href="/contact" className="font-semibold text-brand-deep hover:underline">
            Contact TCE Property Management
          </Link>
        </p>
      </article>
    </>
  );
}
