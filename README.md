# Red Mountain Soap Deployment Artifact

This repository is generated from a verified
`red-mountain-soap-business` composite release.

- `public/` is the complete cPanel document root.
- `release.json` identifies the business source revision and exact calculator
  release.
- `.cpanel.yml` only promotes the already-built files.

Do not hand-edit generated site files here. Change source in the business or
calculator repository and publish a new composite release.

## Authorized Purples game-only deployment

Issue [logic-games#85](https://github.com/redmountain-git/logic-games/issues/85)
adds the clean, accepted Purples build at `/games/rockys-boots/`. This bounded
patch starts from deployment commit `d1077624024bac19603f6a4ae2c5782839857ecd`.
Every pre-existing `public/` file and the legacy root `release.json` are preserved
byte-for-byte. `game-release.json` records the separate game source, immutable
archive checksum and payload hashes; the legacy record still describes the
existing business/calculator release.

The full composite builder remains blocked separately by release artifact/read
access dependencies. Running its stale pin would replace later website changes.
This patch does not establish composite-builder readiness. Do not regenerate the
marketing site or calculator to deploy this game.

After independent exact-commit acceptance and authorized merge, use cPanel Git
Version Control **Update from Remote**, confirm the accepted deployment commit,
then **Deploy HEAD Commit**. Promotion defaults to `$HOME/public_html` or uses
the existing absolute `DEPLOYPATH`. It rejects linked/unsafe destination ancestors
and linked content inside the game folder, copies game assets first, then build
identity, then the entry page. It never copies `public/.`, removes live files, or
writes to the website/calculator routes. Promotion is not an atomic directory
swap; interruption before the entry page requires re-running the same accepted
deployment and checking the live identity/assets.

Verify `/games/rockys-boots/build.json` against `game-release.json`, the nested
page and its assets, construction through +24 and all targets settled, retry,
intentional sound, `?workshop=1`, and the existing home/shop/calculator routes.
Physical Fire compatibility and full original-game release gates remain pending;
this is the bounded playable Purples prototype.

### Recovery

The prior deployment had no game folder. Checking out the prior commit alone,
or using its old `cp -a public/.` command, **does not remove the added game**.
For first-release withdrawal, obtain recovery authorization, confirm the actual
document root and that `games/rockys-boots` is the deployed regular directory
(no symlink in it or its ancestors), then rename only that directory to a
clearly named quarantine sibling such as `rockys-boots-withdrawn-20261022` using
cPanel File Manager. Verify the public game URL is unavailable and the existing
website/calculator still work. Retain the quarantined payload until the owner
approves removal. Do not delete or rename `games` or the document root.

For a later game update, retain the current immutable archive and game metadata.
Restore its exact game files through a reviewed game-only recovery commit and
the same guarded promotion, then verify source identity and gameplay again.
Never repoint an immutable release tag or overwrite an existing release asset.
