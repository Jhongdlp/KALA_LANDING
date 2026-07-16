import KalaPhoneCard, { type PhoneCardVariant } from "@/components/kala/KalaPhoneCard";

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
      <KalaPhoneCard variant={variant as PhoneCardVariant} hideFrame={true} />
    </div>
  );
}
