# Pinar static reference-site archive

This repository is a static visual reference resembling an external AI-product marketing site. It is **not** the upstream service, has no backend, persistence, API implementation, account system, authentication, or supported login flow, and must not be presented or deployed as an operational product.

The primary user is an accountable repository maintainer performing a local visual review. The only accepted workflow is: install the locked dependencies, validate the machine-readable boundary, build static files, start a loopback-only preview, inspect archived routes, and stop that preview.

## Boundary

- Disposition: `retain-internal-reference` pending accountable ownership and provenance/trademark/content review.
- Allowed: local static build, visual inspection, and owner-approved extraction of clearly licensed original components into a separate product.
- Prohibited: public deployment, accepting credentials or payments, claiming the documented API exists, or using copied branding/legal/product statements as operative terms.
- Runtime acceptance: static build/loopback preview only. Archived page content is inert, remote assets are replaced locally, and the production content-security policy blocks connections and form submissions.
- Login acceptance: `NOT_APPLICABLE`; the visible sign-in controls are intentionally disabled reference elements, not an authentication implementation.
- Persistence, migrations, backups, identity, tenant roles, provider retries, and audit trails: `NOT_APPLICABLE`; there is no server or state-changing operation to which those controls could honestly attach.

## Local verification

The only runtime setting is the optional `PORT` documented in `.env.example`; there are no secrets.

```sh
npm ci
npm run verify
npm run build
npm run verify:dist
npm run test:runtime
```

`./start.sh` serves an existing production build on `127.0.0.1`, verifies that its compiled boundary matches `BOUNDARY.json`, and never installs dependencies, builds, migrates, seeds, starts external services, deletes data, or terminates another process. The preview exposes the same boundary at `/boundary.json`.
