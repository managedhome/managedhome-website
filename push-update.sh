#!/usr/bin/env bash
# Push local updates (e.g. the demo banner) to your existing GitHub repo.
# Run:  bash push-update.sh
set -e

GH=/Users/laurenatkinson/.local/bin/gh
REPO_NAME="managedhome-website"

cd "$(dirname "$0")"

echo ""
echo "▸ Checking GitHub login…"
if ! $GH auth status >/dev/null 2>&1; then
  echo "  A browser window will open. Choose:"
  echo "    GitHub.com  →  HTTPS  →  Yes (authenticate Git)  →  Login with web browser"
  echo ""
  $GH auth login --web --git-protocol https
fi

USER=$($GH api user --jq .login)

echo ""
echo "▸ Configuring git to use your GitHub login…"
$GH auth setup-git

echo ""
echo "▸ Pointing at your repo…"
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$USER/$REPO_NAME.git"

echo ""
echo "▸ Fetching what's already on GitHub…"
git fetch origin main

echo ""
echo "▸ Replaying GitHub history with the banner update on top…"
# Reset to GitHub state, then re-apply our banner commit so we don't lose anything.
LOCAL_HEAD=$(git rev-parse HEAD)
git reset --hard origin/main
# cherry-pick all our local-only commits that came after the original initial commit
# Simpler: take the working tree we just committed and apply it as a new commit
git checkout "$LOCAL_HEAD" -- .
git add -A
git -c user.email="you@managedhome.local" -c user.name="ManagedHome" commit -m "Add 'demo — not for official use' banner to every page" || echo "  (Nothing new to commit.)"

echo ""
echo "▸ Pushing to GitHub…"
git push origin main

echo ""
echo "✓ Done. Pages will rebuild in ~1 minute."
echo "  Live site: https://$USER.github.io/$REPO_NAME/"
echo ""
