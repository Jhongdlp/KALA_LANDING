"use client";

import { useSearchParams } from "next/navigation";
import KalaPhoneCard, { type PhoneCardVariant } from "@/components/kala/KalaPhoneCard";
import { Suspense } from "react";

function ScreenshotContent() {
  const searchParams = useSearchParams();
  const variant = (searchParams.get("variant") || "editor") as PhoneCardVariant;

  return (
    <div
      id="screenshot-page"
      style={{
        width: 360,
        height: 780,
        background: "#000000",
        position: "relative",
      }}
    >
      <KalaPhoneCard variant={variant} hideFrame={true} />
    </div>
  );
}

export default function ScreenshotPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScreenshotContent />
    </Suspense>
  );
}
