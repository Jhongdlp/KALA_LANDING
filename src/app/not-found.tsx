import type { Metadata } from "next";
import Link from "next/link";
import KammelFooter from "@/components/kammel/KammelFooter";
import KammelHeader from "@/components/kammel/KammelHeader";
import { ANTON, MONO } from "@/components/kammel/theme";
import { getRepoStars } from "@/lib/github";

/**
 * Next serves this with a real 404, so Google drops the URL on its own. The
 * noindex is for the case that matters more — a soft 404 from an old inbound
 * link, where the status is right but a crawler already queued the URL.
 *
 * It has to be set explicitly: the root layout declares `index: true`, and
 * without an override that cascades here and renders alongside the `noindex`
 * Next injects for the route, producing a contradictory pair of robots tags.
 * With it, both tags read noindex. Marked follow so the nav below still passes
 * the visitor — and a crawler — onward.
 *
 * It lives at the app root rather than inside (site) because only a root
 * not-found catches URLs that match no route at all, so it renders the header
 * and footer itself instead of inheriting them from the site layout.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

/** Every destination is a page that exists; a 404 that dead-ends is wasted. */
const LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Download", href: "/download" },
];

export default async function NotFound() {
  const stars = await getRepoStars();

  return (
    <>
      <KammelHeader stars={stars} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "calc(100vh - 190px)",
          padding: "clamp(40px,8vh,90px) clamp(20px,4vw,64px)",
        }}
      >
        {/*
          One heading carrying both halves: the number is the focal element and
          the sentence is what it means. A screen reader reads "404 — No route
          to host" as a single continuous heading.
        */}
        <h1 style={{ margin: 0 }}>
          <span className="k404-line">
            <span
              style={{
                display: "block",
                fontFamily: ANTON,
                fontWeight: 400,
                fontSize: "clamp(120px,26vw,340px)",
                lineHeight: 0.8,
                letterSpacing: "-.03em",
                color: "var(--k-headline)",
              }}
            >
              404
            </span>
          </span>

          <span
            className="k404-fade"
            style={{
              display: "block",
              animationDelay: ".42s",
              marginTop: "clamp(22px,3.2vh,38px)",
              fontFamily: MONO,
              fontSize: "clamp(13px,1.15vw,15.5px)",
              letterSpacing: ".02em",
              color: "var(--k-sectext)",
            }}
          >
            ssh: connect to host kammel.app: No route to host
            <span className="k404-caret" aria-hidden="true" />
          </span>
        </h1>

        <p
          className="k404-fade"
          style={{
            animationDelay: ".56s",
            marginTop: "clamp(20px,2.8vh,32px)",
            maxWidth: 440,
            fontSize: "clamp(14.5px,1.1vw,16px)",
            lineHeight: 1.62,
            color: "var(--k-paratext)",
          }}
        >
          That page is not on this server. It may have moved when the site
          changed domain, or the link may have been mistyped.
        </p>

        {/* Text links rather than buttons — three CTAs in a row would be the
            heaviest thing on the page. .navlink is the site's own underline
            grow, already used by the header nav. */}
        <nav
          className="k404-fade"
          style={{
            animationDelay: ".68s",
            marginTop: "clamp(26px,3.6vh,40px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "clamp(20px,2.4vw,34px)",
          }}
        >
          {LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="navlink"
              style={{
                fontFamily: MONO,
                fontSize: 12,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--k-ink)",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </main>
      <KammelFooter />
    </>
  );
}
