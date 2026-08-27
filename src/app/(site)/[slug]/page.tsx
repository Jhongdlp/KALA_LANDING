import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingPage from "@/components/kammel/LandingPage";
import { LANDINGS, getLanding } from "@/lib/landings";
import { landingJsonLd } from "@/lib/structured-data";

/**
 * One route for every query-intent landing in LANDINGS.
 *
 * dynamicParams is off so a slug that is not in the array 404s instead of
 * rendering an empty shell — without it this catch-all would answer 200 for
 * every unmatched top-level URL on the site and hand Google an unbounded
 * supply of soft 404s. Static segments (/features, /download) still win over
 * this one, so they are unaffected.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return LANDINGS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) return {};

  const url = `/${slug}`;
  return {
    title: landing.title,
    description: landing.description,
    // Self-referencing, so a variant reached with a tracking parameter
    // consolidates onto the clean URL.
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: landing.title,
      description: landing.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: landing.title,
      description: landing.description,
    },
  };
}

export default async function Landing({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (!landing) notFound();

  return (
    <main>
      {/* Escaped "<" for the same reason as the other pages: a future copy edit
          must not be able to close this script tag. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingJsonLd(landing)).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage landing={landing} />
    </main>
  );
}
