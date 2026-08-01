/**
 * JSON-LD graph for the home page.
 *
 * Everything is emitted as one @graph so the entities can reference each other
 * by @id instead of repeating themselves — Google resolves the nodes and reads
 * SoftwareApplication (app rich result, incl. the free-price signal) and
 * FAQPage (expandable Q&A) off the same blob.
 */
import { FAQS } from "./faq";
import { REPO_URL } from "./github";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  abs,
} from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: abs("/icon.png"),
        sameAs: [REPO_URL, AUTHOR_URL],
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "SoftwareApplication",
        "@id": APP_ID,
        name: SITE_NAME,
        alternateName: "Kammel SSH",
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "SSH client",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        // Both are required for the Android/Linux app result to validate.
        operatingSystem: "Android 8.0+, Linux x86_64",
        softwareRequirements: "Android 8.0 or later; Linux x86_64",
        downloadUrl: `${REPO_URL}/releases/latest`,
        installUrl: `${REPO_URL}/releases/latest`,
        codeRepository: REPO_URL,
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        image: abs("/icon.png"),
        screenshot: [
          abs("/images/phone-consola.png"),
          abs("/images/phone-editor.png"),
          abs("/images/phone-gemini.png"),
          abs("/images/phone-menu.png"),
        ],
        featureList: [
          "SSH client with hardware-backed key storage",
          "Full terminal emulator",
          "SFTP file explorer",
          "Syntax-highlighting code editor",
          "Docker container management",
          "Run AI coding agents such as Claude Code over SSH",
        ],
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
          url: AUTHOR_URL,
        },
        publisher: { "@id": ORG_ID },
        // Price 0 is the signal that drives the "Free" label in app results.
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        isPartOf: { "@id": SITE_ID },
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}
