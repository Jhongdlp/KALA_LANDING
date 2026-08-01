/**
 * X/Twitter reads twitter:image and only falls back to og:image when it is
 * absent. Re-exporting the Open Graph card keeps a single design: one file to
 * edit, two meta tags emitted.
 */
export { default, alt, size, contentType } from "./opengraph-image";
