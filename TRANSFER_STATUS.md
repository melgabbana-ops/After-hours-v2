# AFTER HOURS V2 transfer status

## Current state
- This repository was created separately from the established `melgabbana-ops/AfterHours` app.
- At transfer start, this repository contained only a short README. The existing app was in `melgabbana-ops/AfterHours`.
- The branch `feat/port-afterhours-v2-and-pages` is being used as a safe staging branch.
- The exact branch label `bolt logo design concept` was not present in the branches returned by GitHub for either repository. Confirm the exact Bolt-connected source branch before assuming it is exported.

## Free deployment route
GitHub Actions + GitHub Pages is the intended no-cost static hosting route for the Vite production build. It does not run backend/API code. The current app's remote account/session features require Supabase configuration; without it the app uses local/offline mode.

## Important
Do not merge this staging branch or call the app complete until the full application source, public assets, scripts, Supabase migrations and tests have been migrated and GitHub Actions passes. Do not include environment secrets or Supabase service-role keys in the repository. GitHub Pages settings may require selecting GitHub Actions under Settings > Pages.
