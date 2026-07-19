export const KALA_REPO =
  process.env.NEXT_PUBLIC_KALA_REPO ?? "Jhongdlp/KALA_Terminal";

export const REPO_URL = `https://github.com/${KALA_REPO}`;
export const RELEASES_URL = `${REPO_URL}/releases`;
/** Permalink that always resolves to the newest release's APK, even without the API. */
export const LATEST_APK_URL = `${REPO_URL}/releases/latest/download/app-release.apk`;

export type LatestRelease = {
  version: string;
  apkUrl: string;
  apkSize: string | null;
  releasesUrl: string;
};

type GitHubAsset = { name: string; size: number; browser_download_url: string };

/**
 * Reads the latest GitHub release on the server and revalidates hourly, so the
 * version and size shown on the page track new releases without a redeploy.
 * Returns null on any failure — callers fall back to LATEST_APK_URL.
 */
export async function getLatestRelease(): Promise<LatestRelease | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${KALA_REPO}/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600, tags: ["gh-release"] },
      },
    );
    if (!res.ok) return null;
    const data = await res.json();
    const apk = (data.assets as GitHubAsset[] | undefined)?.find((a) =>
      a.name.endsWith(".apk"),
    );
    return {
      version: data.tag_name,
      apkUrl: apk?.browser_download_url ?? LATEST_APK_URL,
      apkSize: apk ? `${(apk.size / 1e6).toFixed(1)} MB` : null,
      releasesUrl: data.html_url ?? RELEASES_URL,
    };
  } catch {
    return null;
  }
}

/** Live star count for the header button. Same hourly cache + tag as the release. */
export async function getRepoStars(): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${KALA_REPO}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600, tags: ["gh-release"] },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return typeof data.stargazers_count === "number"
      ? data.stargazers_count
      : null;
  } catch {
    return null;
  }
}
