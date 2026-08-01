import type { Metadata } from "next";
import KammelHero from "@/components/kammel/KammelHero";
import KammelStair from "@/components/kammel/KammelStair";
import KammelBento from "@/components/kammel/KammelBento";
import KammelDownload from "@/components/kammel/KammelDownload";
import KammelFaq from "@/components/kammel/KammelFaq";
import { homeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  // Points search engines at the bare origin so "/" and any tracked variant
  // (?utm_source=…, /?ref=…) consolidate their ranking signals here.
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      {/* Escaping "<" keeps a future copy change from breaking out of the
          script tag; see Next's JSON-LD guide. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <KammelHero />
      <KammelStair />
      <KammelBento />
      <KammelDownload />
      <KammelFaq />
    </main>
  );
}
