import type { Metadata } from "next";
import KammelPhoneCard, { type PhoneCardVariant } from "@/components/kammel/KammelPhoneCard";

/**
 * Capture-only routes: a bare phone mockup with no nav and no copy. Indexed,
 * they would compete with the home page as thin duplicates. robots.txt also
 * disallows them, but only this meta tag can drop a URL that already got in.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

const VARIANTS: PhoneCardVariant[] = [
  "workspace",
  "consola",
  "antigravity",
  "gemini",
  "docker",
  "sftp",
  "editor",
  "menu",
];

export function generateStaticParams() {
  return VARIANTS.map((variant) => ({ variant }));
}

export default async function ScreenshotPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  return (
    <div
      id="screenshot-page"
      style={{
        width: 360,
        height: 780,
        flexShrink: 0,
        background: "#000000",
        position: "relative",
      }}
    >
      <KammelPhoneCard variant={variant as PhoneCardVariant} hideFrame={true} />
    </div>
  );
}
