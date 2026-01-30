#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WEB="$ROOT/web"
DOCS="$ROOT/docs"

mkdir -p "$DOCS"

cp "$WEB/index.html" "$DOCS/index.html"
cp "$WEB/app.js" "$DOCS/app.js"
cp "$WEB/styles.css" "$DOCS/styles.css"
cp "$ROOT/index.json" "$DOCS/index.json"

# Prevent GitHub Pages from applying Jekyll processing.
touch "$DOCS/.nojekyll"

echo "Built $DOCS for GitHub Pages."
