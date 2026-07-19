import type { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

/**
 * On-demand revalidation webhook. A GitHub Action on the app repo pings this
 * when a release is published, expiring the cached release data immediately so
 * the site shows the new version within seconds instead of waiting for ISR.
 *
 * POST /api/revalidate?secret=<REVALIDATE_SECRET>
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return Response.json(
      { revalidated: false, message: "Invalid or missing secret" },
      { status: 401 },
    );
  }

  // `{ expire: 0 }` forces immediate expiration — the pattern the Next docs
  // prescribe for external webhooks that need data refreshed right away.
  revalidateTag("gh-release", { expire: 0 });

  return Response.json({ revalidated: true, now: Date.now() });
}
