# Japonica — japonica.com.au

Astro static site for Japonica Floral Studio. **Live and fully set up.** This README is the maintainer's guide — read it first if you're picking the project back up.

## Live setup (as of June 2026)

- **Domain:** `japonica.com.au` — registered at **Netfleet**, DNS managed by **Cloudflare** (nameservers `ashley` / `rocky.ns.cloudflare.com`).
- **Hosting:** **Cloudflare Pages** project **`japonica`**, connected to this GitHub repo (branch `main`). Every push to `main` auto-builds (`npm run build`) and deploys. No manual upload needed.
- **Repo:** `github.com/JaponicaFlorals/japonica`
- **CMS:** **Sveltia CMS** at `/admin`, GitHub backend. Login runs through the **sveltia-cms-auth** Cloudflare Worker at `https://sveltia-cms-auth.florals.workers.dev` (GitHub OAuth app "Japonica CMS", repo `JaponicaFlorals/sveltia-cms-auth`).
- **Email:** `florals@japonica.com.au` hosted at **SureServer** — unchanged (MX → `mail.japonica.com.au` → `116.251.204.41`). Email DNS records live in Cloudflare; do not delete them.
- **Forms:** **Web3Forms** (public key embedded in the two enquiry pages) → delivers to `florals@japonica.com.au`.
- **SEO:** `public/sitemap.xml` (10 pages) + `public/robots.txt`; submitted to **Google Search Console**.

## Making changes

### Content — Megan, no code
Go to `japonica.com.au/admin` → sign in with GitHub → edit **weddings, testimonials, the homepage "From the studio" feed, and the wedding galleries** → **Publish**. This commits to the repo and Cloudflare rebuilds in ~1–2 minutes.

### Code / copy / design — developer
1. **Pull** this repo first (so you have Megan's latest CMS edits).
2. `npm install` then `npm run dev` → http://localhost:4321
3. Edit, then **commit + push to `main`**. Cloudflare auto-deploys.

> Page body copy (home philosophy, events, process, FAQ, booking terms, privacy) lives in the `.astro` page files — **not** the CMS. Only weddings, testimonials, studio feed and galleries are CMS-editable.

> One working copy: this repo (and your local clone) is the single source of truth. Always pull before editing, because the CMS writes directly to `main`.

## Tech / structure

- Astro (static output), clean URLs (`/weddings`, `/portfolio`, …).
- `src/pages/*.astro` — the pages. `src/layouts/BaseLayout.astro` — shared shell. `src/components/` — Nav, Footer. `src/styles/global.css` — tokens + shared styles.
- `src/content/` — Content Collections: `weddings`, `testimonials`, `studio`, `galleries`.
- Images in `public/img`; CMS uploads land in `public/img/uploads`.

## Content model

- `src/content/weddings/*.md` — portfolio weddings (couple, venue, date, photographer + link, optional feature/review, cover, gallery of 8, order, short description as body).
- `src/content/testimonials/*.md` — quote (body) + author + which page it shows on (home / weddings / portfolio).
- `src/content/studio/*.json` — homepage "From the studio" tiles (image + Instagram link). Curated, not an auto feed.
- `src/content/galleries/*.json` — the four signature galleries (Bouquets, Ceremony pieces, Tablescapes, Ceiling installations).

## Accounts behind the site

Netfleet (domain) · Cloudflare (hosting + DNS) · SureServer (email) · GitHub `JaponicaFlorals` (code + CMS login) · Web3Forms (enquiry forms) · Google Search Console (search). Login locations are in the owner's handbook.

## Housekeeping

- The old **Squarespace** site is retired — safe to cancel that subscription.
- A redundant **direct-upload** Pages project (`japonica-website`) exists from the initial launch; the live site is now the Git-connected **`japonica`** project, so `japonica-website` can be deleted.
- The Web3Forms key is public by design (it lives in the page HTML).
