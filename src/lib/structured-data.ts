/**
 * JSON-LD graph for the home page.
 *
 * Everything is emitted as one @graph so the entities can reference each other
 * by @id instead of repeating themselves — Google resolves the nodes and reads
 * SoftwareApplication (app rich result, incl. the free-price signal) and
 * FAQPage (expandable Q&A) off the same blob.
 */
import { HOME_COMPARISON } from "./comparison";
import { FAQS } from "./faq";
import { FEATURE_GROUPS } from "./features";
import type { Landing } from "./landings";
import { REPO_URL } from "./github";
import {
  AUTHOR_NAME,
  AUTHOR_URL,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  abs,
} from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#app`;
const SOURCE_ID = `${SITE_URL}/#source`;

/** The repository ships one MIT LICENSE file; see SPEC_ROWS in ./features. */
const LICENSE_URL = "https://opensource.org/licenses/MIT";

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
        // MobileApplication is the subtype that makes the Android app result
        // eligible; SoftwareApplication alone describes the Linux build too, so
        // both are declared rather than picking one.
        "@type": ["SoftwareApplication", "MobileApplication"],
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
        // "Built in Flutter" is a differentiator stated all over the prose and
        // nowhere a machine could read it until these two properties.
        programmingLanguage: "Dart",
        runtimePlatform: "Flutter",
        keywords: SITE_KEYWORDS.join(", "),
        license: LICENSE_URL,
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
          "Edit remote files over SFTP without a local copy",
          "Git panel for staging, diffing, committing and pushing",
          "Docker container management",
          "Local, remote and SOCKS5 port forwarding",
          "Run AI coding agents such as Claude Code over SSH",
        ],
        author: {
          "@type": "Person",
          name: AUTHOR_NAME,
          url: AUTHOR_URL,
        },
        maintainer: { "@id": ORG_ID },
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
        // "Open source" is the single most repeated claim on the site, and
        // until this node it was only ever a word in a sentence. targetProduct
        // is the property that ties the repository to the app by @id.
        "@type": "SoftwareSourceCode",
        "@id": SOURCE_ID,
        name: `${SITE_NAME} source code`,
        description:
          "The full source of the Kammel client, published under the MIT licence.",
        codeRepository: REPO_URL,
        url: REPO_URL,
        programmingLanguage: { "@type": "ComputerLanguage", name: "Dart" },
        runtimePlatform: "Flutter",
        license: LICENSE_URL,
        isAccessibleForFree: true,
        targetProduct: { "@id": APP_ID },
        author: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_URL },
      },
      {
        // The comparison table, made machine-readable. An answer engine that
        // ingests the JSON-LD gets the matrix without having to parse the
        // <table>, and both are generated from HOME_COMPARISON, so the two can
        // never disagree. Each item folds one row into a sentence naming every
        // product, because a bare value ("Closed source") is unattributable
        // once it is lifted out of the table.
        "@type": "ItemList",
        "@id": `${SITE_URL}/#comparison`,
        name: `${SITE_NAME} compared with ${HOME_COMPARISON.columns
          .slice(1)
          .join(" and ")}`,
        description: HOME_COMPARISON.note,
        about: { "@id": APP_ID },
        isPartOf: { "@id": SITE_ID },
        numberOfItems: HOME_COMPARISON.rows.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: HOME_COMPARISON.rows.map((row, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: row.criterion,
          description: HOME_COMPARISON.columns
            .map((column, c) => `${column}: ${row.values[c]}`)
            .join(". "),
        })),
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

/**
 * JSON-LD for /features.
 *
 * The page is an index, so the useful nodes are a WebPage tied to the site, a
 * BreadcrumbList (home → features, which is what Google renders instead of the
 * bare URL) and one ItemList carrying every feature. The SoftwareApplication
 * is referenced by @id rather than repeated — it is already fully described on
 * the home page.
 */
export function featuresJsonLd() {
  const url = `${SITE_URL}/features`;
  const items = FEATURE_GROUPS.flatMap((group) =>
    group.features.map((f) => ({
      name: f.title,
      description: f.body,
      section: group.nav,
    })),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: FEATURES_TITLE,
        description: FEATURES_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": SITE_ID },
        about: { "@id": APP_ID },
        primaryImageOfPage: abs("/icon.png"),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Features", item: url },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#features`,
        name: `${SITE_NAME} features`,
        numberOfItems: items.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${item.section} — ${item.name}`,
          description: item.description,
        })),
      },
    ],
  };
}

/** Shared by the /features metadata and its WebPage node. */
export const FEATURES_TITLE =
  "Features — every tool inside the Kammel SSH client";

export const FEATURES_DESCRIPTION =
  "The full feature list: multi-session SSH terminal, SFTP explorer, code editor, git panel, Docker console, port forwarding, agent notifications and hardware-backed key storage.";


/**
 * JSON-LD for a query-intent landing (see lib/landings.ts).
 *
 * The nodes that earn their place: WebPage tied to the site, BreadcrumbList
 * (Google renders the trail instead of the bare URL, and the page shows the
 * same crumb visibly), and FAQPage built from the page's own questions. The
 * SoftwareApplication is referenced by @id rather than repeated — it is
 * described in full on the home page, and restating it on every landing would
 * be eight competing descriptions of one entity.
 */
export function landingJsonLd(landing: Landing) {
  const url = `${SITE_URL}/${landing.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: landing.title,
        description: landing.description,
        inLanguage: "en",
        isPartOf: { "@id": SITE_ID },
        about: { "@id": APP_ID },
        primaryImageOfPage: abs("/icon.png"),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: landing.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": SITE_ID },
        mainEntity: landing.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

/**
 * JSON-LD for /download.
 *
 * HowTo is the node that matters here — the install steps are the reason the
 * page exists for "how to install Kammel APK" style queries, and the steps
 * passed in are the same array the page renders, so the structured data cannot
 * describe steps a visitor can't see.
 */
export function downloadJsonLd(steps: { name: string; text: string }[]) {
  const url = `${SITE_URL}/download`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `Download ${SITE_NAME} for Android and Linux`,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": SITE_ID },
        about: { "@id": APP_ID },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Download", item: url },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: `How to install ${SITE_NAME} on Android`,
        description:
          "Download the APK from GitHub Releases, allow the install, and add your first server.",
        totalTime: "PT3M",
        // Sideloading costs nothing; stating it explicitly is what lets the
        // result carry a "Free" label rather than an unknown cost.
        estimatedCost: {
          "@type": "MonetaryAmount",
          currency: "USD",
          value: "0",
        },
        step: steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
          url: `${url}#step-${i + 1}`,
        })),
      },
    ],
  };
}
