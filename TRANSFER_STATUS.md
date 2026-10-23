# Transfer status

- Ported the existing full AFTER HOURS app source tree from `melgabbana-ops/AfterHours`, branch `design/visual-rebuild-moodboard-20261018`.
- Retained the V2-specific GitHub Pages workflow; legacy workflows from the old repository were not copied.
- Adjusted app, manifest, service-worker, favicon and logo paths for `/After-hours-v2/`.
- `main` remains unchanged. Changes are staged on `feat/port-afterhours-v2-and-pages` behind the draft pull request.
- The exact Bolt-only branch label `bolt logo design concept` was not found in GitHub branches; this is a migration from the existing GitHub source, not a verified direct Bolt export.
- This workflow runs tests and the production build before committing the imported source.
