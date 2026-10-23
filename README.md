# AFTER HOURS V2

Premium, mobile-first 18+ interactive preview with a cinematic black-and-gold visual design, built to be continued without paid Bolt credits.

## Current repository status
This repository started with only a short README. A first standalone V2 preview and a free GitHub Pages workflow are now on the staging branch `feat/port-afterhours-v2-and-pages`. **This is not yet the full original AFTER HOURS app transfer.** The established full source is still in `melgabbana-ops/AfterHours`, and the exact branch label `bolt logo design concept` was not found in the branches GitHub returned. Please do not treat this scaffold as a complete Bolt import.

## Free hosting route
GitHub Actions builds the Vite frontend and is configured to publish the static build to GitHub Pages from `main`.

Expected address after enabling Pages and merging a tested release:
https://melgabbana-ops.github.io/After-hours-v2/

One-time repository setting: open **Settings → Pages** and select **GitHub Actions** as the build/deployment source. Do this after the real source port passes tests and the PR is ready. The staging PR is intentionally unmerged.

## Local development
```bash
npm install
npm run dev
npm test
npm run build
```

## Important backend limits
GitHub Pages serves static files only. The current preview stores safety-plan data locally in the browser. Account sign-in, remote sessions, synced consent/history, uploads and other backend functions are unavailable until the full application source and a backend such as Supabase are configured. Never add secrets or Supabase service-role keys to front-end code. The 18+ checkbox is a self-declaration, not formal age verification.
