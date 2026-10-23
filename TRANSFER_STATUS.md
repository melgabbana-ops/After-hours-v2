# AFTER HOURS V2 · Gratis bouwen en publiceren

## Status
De V2-repository is aangemaakt en bevat de voorbereide GitHub Pages-workflow op branch `feat/port-afterhours-v2-and-pages`. De broncode van de bestaande app staat nog in de afzonderlijke repository `melgabbana-ops/AfterHours`; de volledige codeoverdracht is nog niet afgerond.

## Gratis publicatie
De beoogde host is GitHub Pages met GitHub Actions. Dit werkt voor de statische Vite-build en kost geen apart hostingabonnement binnen de gebruikelijke GitHub Pages-limieten. GitHub Pages voert geen backend of database uit; voor accounts, synchronisatie, privacygevoelige gegevens en server-side sessiecontrole blijft een geconfigureerde backend zoals Supabase nodig.

Na het overzetten en testen van de volledige app:
1. Open **Settings → Pages**.
2. Kies **GitHub Actions** als deployment source.
3. Merge alleen de geteste release-PR naar `main`.
4. Controleer de GitHub Actions-run en de gepubliceerde website.

Verwachte projectsite: https://melgabbana-ops.github.io/After-hours-v2/

## Belangrijke waarschuwing
De exacte branchnaam `bolt logo design concept` werd niet gevonden in de door GitHub teruggegeven branches van de twee repositories. De code mag daarom niet als succesvol rechtstreeks uit die branch overgezet worden bestempeld voordat de Bolt-export/branch is geverifieerd. Bewaar secrets buiten Git en plaats nooit een Supabase service-role key in Vite-variabelen.
