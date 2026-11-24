# Black & White Electrical

Static, mobile-first website for **Black & White Electrical**, operated by **Paul Badenhorst** (Approved Electrical Contractor & Installation Electrician), based in Pretoria North and serving Greater Pretoria.

## Business Details

- **Trading Name:** Black & White Electrical
- **Operator:** Paul Badenhorst (Department of Employment & Labour Registered)
- **Phone / WhatsApp:** `071 213 8108` (`+27 71 213 8108`)
- **Email:** `phbadenhorst@gmail.com`
- **Workshop Base:** 15 President Steyn St, Pretoria North
- **Compliance:** SANS 10142-1 Wiring Code & Official Certificates of Compliance (CoC)

## Project Files

- [`index.html`](index.html) — Semantic HTML5 single-page layout (hero dispatch card, interactive fault triage, services, CoC guide, profile, suburb coverage, and mobile call/WhatsApp dock)
- [`styles.css`](styles.css) — Pretoria Warm Craft theme tokens and component styles
- [`site-config.js`](site-config.js) — Centralized business details, fault triage options, and Pretoria service areas
- [`app.js`](app.js) — DOM bindings, accessible fault triage tabs, and suburb tag rendering

## Local Preview

No build step or package installation is required:

1. Open [`index.html`](index.html) directly in a browser, or
2. Serve locally with Python:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Updating Business Details

Edit [`site-config.js`](site-config.js) to update phone numbers, WhatsApp pre-filled messages, email, hours, problem triage items, or service suburbs. Changes propagate automatically via `data-bind` hooks in [`app.js`](app.js).
