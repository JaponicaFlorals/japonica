# Japonica — japonica.com.au

Astro static site for Japonica Floral Studio. Editable content (real weddings, testimonials, the homepage "From the studio" feed, and the wedding galleries) is managed through Sveltia CMS at `/admin`.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Tech
- Astro (static output) — clean URLs (`/weddings`, `/portfolio`, ...)
- Content Collections in `src/content` (testimonials, studio, weddings, galleries)
- Sveltia CMS in `public/admin` (GitHub backend)
- Forms via Web3Forms (access key already wired into the two enquiry forms)
- Images in `public/img`; CMS uploads go to `public/img/uploads`

## Deploy (Cloudflare Pages)
1. Push this repo to **Megan's GitHub** (repo name e.g. `japonica`).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Build settings: **Framework preset: Astro**, Build command `npm run build`, Output directory `dist`.
4. Deploy → you get a `*.pages.dev` URL. Later, add the custom domain `japonica.com.au` (see DNS notes).

## Sveltia CMS setup (so Megan can edit at japonica.com.au/admin)
1. In `public/admin/config.yml`, set `repo: <megan-github-username>/japonica`.
2. Create a **GitHub OAuth App** (GitHub → Settings → Developer settings → OAuth Apps):
   - Homepage URL: `https://japonica.com.au`
   - Authorization callback URL: your auth worker URL (next step) + `/callback`
3. Deploy the small **sveltia-cms-auth** Cloudflare Worker (one-click template: https://github.com/sveltia/sveltia-cms-auth) and set its `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` from the OAuth App.
4. Add `base_url: https://<your-auth-worker>` under `backend:` in `config.yml`.
5. Megan visits `japonica.com.au/admin`, signs in with GitHub, and can add/edit weddings, testimonials, the studio feed and galleries. Saving commits to the repo and Cloudflare auto-rebuilds.

## Content model
- `src/content/weddings/*.md` — portfolio weddings (couple, venue, date, photographer + link, optional feature/review, cover, gallery of 8, order, short description as body).
- `src/content/testimonials/*.md` — quote (body) + author + which page it shows on.
- `src/content/studio/*.json` — homepage feed tiles (image + Instagram link).
- `src/content/galleries/*.json` — the four wedding galleries (Bouquets, Ceremony pieces, Tablescapes, Ceiling installations).

## Notes
- Web3Forms key is public by design (lives in the enquiry pages). Enquiries go to florals@japonica.com.au.
- DNS: domain is registered at Netfleet; cut over by pointing nameservers to Cloudflare once ready (check MX/email first).
