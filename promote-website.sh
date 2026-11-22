#!/usr/bin/env bash
set -eu
root=${DEPLOYPATH:-"$HOME/public_html"}
case "$root" in /*) ;; *) echo "Expected an absolute document root" >&2; exit 1 ;; esac
case "$root/" in /|//*|*'/../'*|*'/./'*|*'//'*) echo "Unsafe document root" >&2; exit 1 ;; esac
[[ "$root" != "$HOME" && ! -L ./public && -f ./public/suite/ngsw.json && -f ./public/release.json ]]

# Validate all destinations before copying, without traversing other publishers' trees.
ancestor=$root
while [[ "$ancestor" != / ]]; do
  [[ ! -L "$ancestor" && ( ! -e "$ancestor" || -d "$ancestor" ) ]] || exit 1
  ancestor=$(dirname -- "$ancestor")
done
list=$(mktemp)
trap 'rm -f -- "$list"' EXIT
find ./public -mindepth 1 -path ./public/games -prune -o -print0 > "$list"
while IFS= read -r -d '' src; do
  dst="$root/${src#./public/}"
  [[ ! -L "$src" && ! -L "$dst" ]] || exit 1
  if [[ -d "$src" ]]; then
    [[ ! -e "$dst" || -d "$dst" ]] || exit 1
  else
    [[ -f "$src" && ( ! -e "$dst" || -f "$dst" ) ]] || exit 1
  fi
done < "$list"

mkdir -p -- "$root"
while IFS= read -r -d '' src; do
  dst="$root/${src#./public/}"
  if [[ -d "$src" ]]; then mkdir -p -- "$dst"; else cp -p -- "$src" "$dst"; fi
done < "$list"
echo "Website, calculator and suite promoted. /games/ and unrelated files were not touched."
