# Moving to www.kammel.app

What the code already does, and what still has to be done by hand in Vercel and
Search Console. The code half is committed; the rest is configuration.

## What the code does

`SITE_URL` in `src/lib/site.ts` is the single origin every canonical, sitemap
entry, JSON-LD `@id` and OG image URL is built from. It reads
`NEXT_PUBLIC_SITE_URL` and falls back to `https://www.kammel.app`, so a build
with no environment set still emits correct production URLs.

## Vercel — environment variables

| Variable | Value | Scope |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.kammel.app` | Production |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | the Search Console meta token | Production |
| `GITHUB_TOKEN` | public read-only PAT, no scopes | Production + Preview |

`NEXT_PUBLIC_SITE_URL` is deliberately **not** set on Preview: previews then
fall back to the production origin and self-canonicalise to it, which is what
keeps preview deployments out of the index.

## Vercel — domains

1. Add `www.kammel.app` and set it as the **primary** domain.
2. Add `kammel.app` and configure it to **redirect to** `www.kammel.app` (308).
3. Keep `kammel-ssh.vercel.app` attached and redirecting to `www.kammel.app`.
   Do not delete it — the redirect is what carries the ranking signals from the
   old origin across. Leave it in place for at least six months.

Redirects are handled at the Vercel domain layer, not in middleware, so there is
no host-canonicalisation code in the app to keep in sync with the dashboard.

## Search Console

Order matters here.

1. Verify **both** properties: the old `kammel-ssh.vercel.app` and the new
   `https://www.kammel.app`. The Change of Address tool cannot run unless both
   are verified and the 308 is already live.
2. On the old property, run **Settings → Change of address** and point it at the
   new one. This is the step that transfers the migration signal; the redirect
   alone is slower.
3. Submit `https://www.kammel.app/sitemap.xml` on the new property.
4. Request indexing for `/`, `/features` and `/download` to prime the crawl.

Expect two to four weeks of ranking turbulence. Do not change the URL structure
again while it settles.

## After deploying, verify

```sh
curl -sI https://kammel.app            | grep -i location   # -> www
curl -sI https://kammel-ssh.vercel.app | grep -i location   # -> www
curl -s  https://www.kammel.app/robots.txt
curl -s  https://www.kammel.app/sitemap.xml | grep -c '<loc>'   # -> 10
curl -s  https://www.kammel.app/ | grep -o 'rel="canonical"[^>]*'
curl -s -o /dev/null -w '%{http_code}\n' https://www.kammel.app/no-such-page  # -> 404
```

Then run the two validators against the live origin:

- Rich Results Test — the home page (SoftwareApplication + FAQPage), `/download`
  (HowTo) and any landing (FAQPage + BreadcrumbList).
- PageSpeed Insights on `/` and one landing, mobile.
