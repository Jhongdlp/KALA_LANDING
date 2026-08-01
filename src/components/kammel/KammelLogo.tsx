import Image from "next/image";

/** Intrinsic size of public/images/icon/kammel-mark.png (alpha-trimmed). */
const MARK_W = 885;
const MARK_H = 595;

/**
 * Kammel brand mark. The artwork is a full-colour PNG with transparency, so it
 * reads the same on both themes — `size` sets its height and the width follows
 * the intrinsic aspect ratio.
 */
export default function KammelLogo({ size = 26 }: { size?: number }) {
  return (
    <Image
      src="/images/icon/kammel-mark.png"
      alt=""
      aria-hidden="true"
      width={Math.round((size * MARK_W) / MARK_H)}
      height={size}
      priority
      style={{ display: "block", flexShrink: 0, height: size, width: "auto" }}
    />
  );
}
