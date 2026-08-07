import type { Metadata } from "next";
import FeaturesHero from "@/components/kammel/FeaturesHero";
import FeaturesNav from "@/components/kammel/FeaturesNav";
import FeaturesSections from "@/components/kammel/FeaturesSections";
import FeaturesSpec from "@/components/kammel/FeaturesSpec";
import {
  FEATURES_DESCRIPTION,
  FEATURES_TITLE,
  featuresJsonLd,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  // The layout template appends " — Kammel", so the title stays brand-suffixed
  // without repeating the name here.
  title: "Features",
  description: FEATURES_DESCRIPTION,
  alternates: { canonical: "/features" },
  openGraph: {
    type: "article",
    title: FEATURES_TITLE,
    description: FEATURES_DESCRIPTION,
    url: "/features",
  },
  twitter: {
    card: "summary_large_image",
    title: FEATURES_TITLE,
    description: FEATURES_DESCRIPTION,
  },
};

export default function FeaturesPage() {
  return (
    <main>
      {/* Escaped "<" for the same reason as the home page: a future copy edit
          must not be able to close this script tag. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(featuresJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <FeaturesHero />
      <FeaturesNav />
      <FeaturesSections />
      <FeaturesSpec />
    </main>
  );
}
