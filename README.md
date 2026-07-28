# Red Mountain Soap website

Static marketing and catalog site for **Red Mountain Soap**, the consumer-facing
brand of **Red Mountain Soap LC**.

The repository deliberately has two deployment surfaces:

- Astro source in `site/` with static assets in `site-public/`
- Verified cPanel release files in `src/web/`

The existing calculator under `src/web/calculator/` is produced by the separate
Soap Suite build and is preserved by the website release script.

## Local work

```powershell
npm install
npm run dev
```

Before committing a release:

```powershell
npm run release
```

That command checks and builds the Astro site, replaces the root marketing-site
artifact under `src/web/`, preserves `src/web/calculator/`, and verifies the
release boundary.

## Public integrations

Copy `.env.example` to `.env` and set only values that have been configured and
verified:

- `PUBLIC_SQUARE_STORE_URL`
- `PUBLIC_MAILERLITE_FORM_ACTION`
- `PUBLIC_CLOUDFLARE_BEACON_TOKEN`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`

The site intentionally renders honest pre-launch states when these values are
absent. Never put private keys, access tokens, customer exports, tax records, or
operations data in this repository.

## Owner-controlled launch gates

See:

- `docs/launch-gates.md`
- `docs/deployment.md`
- `docs/system-boundaries.md`
- `docs/monthly-close.md`
