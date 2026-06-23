# HAVS

Business development site for HAVS — connecting Nordic timber and construction manufacturers with the right projects.

Built with Next.js 16, React 19, Tailwind CSS 4, and `next-intl` for Danish/English i18n.

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in your credentials (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. All variables are server-side only except `NEXT_PUBLIC_CAL_LINK`.

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | Resend API key for email notifications |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Yes | Base64-encoded Google Service Account JSON |
| `HAVS_SHEET_ID` | Yes | Google Sheets spreadsheet ID for contact submissions |
| `NEXT_PUBLIC_CAL_LINK` | No | Cal.com booking slug, e.g. `davidhav/intro` |

### Google Sheets setup

1. Create a Google Cloud project and enable the **Google Sheets API**
2. Create a **Service Account** under IAM & Admin → Service Accounts
3. Generate a JSON key, download it
4. Base64-encode it: `base64 -i service-account.json | tr -d '\n'`
5. Share the target spreadsheet with the service account email (Editor role)
6. Set the sheet name to `HAVS Inbox` — columns are auto-populated in order: timestamp, name, email, role, message, locale, source, status, last\_touch, notes

## Scripts

```bash
npm run dev         # development server (http://localhost:3000)
npm run build       # production build
npm run start       # serve production build locally
npm run lint        # ESLint
npm run type-check  # TypeScript check (no emit)
npm run format      # Prettier (writes in place)
```

## Project structure

```
app/
  [locale]/        # bilingual page routes (da / en)
  actions/         # Next.js Server Actions (contact form)
  api/             # API routes (health check)
  fonts.ts         # Inter + Cormorant font config
  globals.css      # Tailwind + design tokens
components/        # React components
content/           # Static data (partners, materials)
i18n/              # next-intl routing and request config
lib/               # Integrations (Resend, Google Sheets)
messages/          # Translations — da.json, en.json
public/
  images/          # Optimised site images
```

## Design system

See `DESIGN.md` for colour tokens, typography, and design direction notes.

## Deployment

The site deploys to Vercel. Connect the GitHub repo in the Vercel dashboard, set the environment variables under **Settings → Environment Variables**, and push to `main`.

For staging/preview: Vercel creates a preview URL per branch automatically. Environment variables can be scoped to Production / Preview / Development separately.

### Rate limiting (recommended before launch)

The contact form has honeypot protection and server-side input validation, but no network-level rate limiting. For production, add rate limiting via **Vercel KV**:

1. Create a KV store in the Vercel dashboard
2. Add the `@vercel/kv` package
3. Add a sliding-window check at the top of `app/actions/contact.ts` keyed by IP

This is a low-traffic brochure site so the risk is low, but worth addressing if the form starts receiving spam.
