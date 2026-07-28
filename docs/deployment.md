# Namecheap cPanel deployment

## Release boundary

`src/web/` is the only public artifact. The cPanel checkout stays outside the
web root, and `.cpanel.yml` copies only `src/web/` into `public_html`.

Astro, Node.js, source files, dependencies, tests, operations data, and secrets
do not need to exist in the public web root.

## Release sequence

1. Update source and integration settings locally.
2. Run `npm run release`.
3. Review `git diff`, including generated `src/web/`.
4. Confirm `src/web/calculator/` still contains the intended calculator build.
5. Merge the reviewed revision to `main`.
6. In cPanel Git Version Control, use **Update from Remote**.
7. Use **Deploy HEAD Commit** for that reviewed revision.
8. Verify live routes and checkout links.

## HTTPS and canonical hostname

Test the apex and `www` hostname independently. Do not redirect `www` until both
names negotiate a valid certificate.

After certificate coverage is confirmed, the following can be added to the root
`.htaccess`:

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^www\.redmountainsoap\.com$ [NC]
RewriteRule ^ https://redmountainsoap.com%{REQUEST_URI} [R=301,L]
```

## Rollback

Deploy a previously reviewed Git revision through the same cPanel deployment
path. Do not hand-edit public files during rollback; doing so creates an
unrecoverable difference between Git and production.

## Backups

The Stellar plan does not provide the higher-tier automatic backup control.
Download a full cPanel backup monthly and before material hosting changes.
The static site remains reproducible from Git, but cPanel configuration and
account-level settings still require a separate backup.
