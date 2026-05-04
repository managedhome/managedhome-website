# ManagedHome

A refined, two-sided platform connecting discerning homeowners with vetted household professionals — house managers, estate managers, private chefs, butlers, nannies, and more.

The aesthetic is inspired by Restoration Hardware: warm neutrals, refined serif typography, generous whitespace, and large, atmospheric imagery. The features are inspired by TaskRabbit and TrustedHousesitters: clear browse-and-hire flows, a step-by-step application for professionals, and private dashboards for both sides.

## Live Pages

| Page | File | What It Does |
|---|---|---|
| Home | `index.html` | Hero, value prop, featured professionals, testimonials |
| Browse | `browse.html` | Filterable, sortable directory of professionals |
| Profile | `professional.html?id=p001` | Detailed profile, references, request introduction |
| Apply | `apply.html` | Application form for new professionals |
| How It Works | `how-it-works.html` | Process for both homeowners and professionals |
| About | `about.html` | About, contact, privacy |
| Sign Up | `signup.html` | Create homeowner or professional account |
| Sign In | `login.html` | Sign in, role-aware redirect |
| Homeowner Dashboard | `dashboard-homeowner.html` | Saved professionals, hires, messages, household profile |
| Professional Dashboard | `dashboard-pro.html` | Inquiries, engagements, availability, public profile |

## How To Use Locally

It's a plain static site — no build step. Open `index.html` in your browser, or serve the folder:

```bash
# Option 1: open directly
open index.html

# Option 2: serve (better for some browser features)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How To Deploy For Free

Two easy options once this is on GitHub:

**GitHub Pages** (zero-config):
1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under "Source," choose **Deploy from a branch**, select `main`, root.
4. Your site is live at `https://<your-username>.github.io/managedhome-website/`.

**Netlify** (drag-and-drop, no command line):
1. Sign up at [netlify.com](https://netlify.com).
2. Drag the `managedhome-website` folder onto the dashboard.
3. Done. You'll get a custom URL.

## Tech

- HTML, CSS, vanilla JavaScript — no frameworks, no build tools.
- Sample data in `js/data.js`.
- Application logic and `localStorage`-backed auth in `js/app.js`.
- Style system in `css/styles.css` using a single warm-neutral palette and the Cormorant Garamond / Inter type pairing.

## What's Simulated vs Real

This is a polished front-end demo. Account creation, hires, messages, and applications are stored in your browser's `localStorage` so the app feels real end-to-end. To go live with real users, you'd back it with a server (e.g. Supabase, Firebase, or a small Node API) — the existing pages and JS are structured to swap that in cleanly.
