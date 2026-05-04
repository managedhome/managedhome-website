#!/usr/bin/env bash
# One-shot script to push this site to GitHub.
# Usage:  bash deploy-to-github.sh
set -e

GH=/Users/laurenatkinson/.local/bin/gh
REPO_NAME="managedhome-website"

cd "$(dirname "$0")"

echo ""
echo "▸ Checking GitHub login…"
if ! $GH auth status >/dev/null 2>&1; then
  echo "  You need to sign in to GitHub once. A browser window will open."
  echo "  Choose: GitHub.com → HTTPS → Yes, authenticate Git → Login with web browser"
  echo ""
  $GH auth login --web --git-protocol https
fi

echo ""
echo "▸ Creating repo on GitHub and pushing…"
$GH repo create "$REPO_NAME" \
  --public \
  --source=. \
  --remote=origin \
  --push \
  --description "ManagedHome — a refined platform connecting homeowners with vetted household professionals."

echo ""
echo "▸ Enabling GitHub Pages so the site is live…"
USER=$($GH api user --jq .login)
$GH api -X POST "repos/$USER/$REPO_NAME/pages" \
  -f "source[branch]=main" \
  -f "source[path]=/" \
  >/dev/null 2>&1 || echo "  (Pages may already be enabled — that's fine.)"

echo ""
echo "✓ Done."
echo ""
echo "  Repo:      https://github.com/$USER/$REPO_NAME"
echo "  Live site: https://$USER.github.io/$REPO_NAME/  (give it ~1 minute to build)"
echo ""
