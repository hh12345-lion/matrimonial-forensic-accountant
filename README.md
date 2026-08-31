# Lawson Forensic

Production website for [lawsonforensic.com](https://www.lawsonforensic.com): UK boutique forensic accounting and expert witness services.

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS
- Static site; Formspree contact form
- GDPR cookie consent with Google Consent Mode

## Setup

```bash
npm install
cp .env.example .env.local
```

Set `Lead_notification_url` for contact form webhooks and optionally `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Environment

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default: https://www.lawsonforensic.com) |
| `Lead_notification_url` | n8n/webhook URL for contact leads |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (loaded only after consent) |
| `GOOGLE_SITE_VERIFICATION` | Search Console |
| `BING_SITE_VERIFICATION` | Bing Webmaster |

Middleware redirects `lawsonforensic.com` to `www.lawsonforensic.com`.

SEO files: `npm run seo:generate` writes `public/sitemap.xml` and `public/robots.txt`. See `docs/SEO.md` and `docs/SEO-ARCHITECTURE.md`.

## Google Sheets (contact form)

1. Share the spreadsheet with `GOOGLE_SERVICE_ACCOUNT_EMAIL` as **Editor**.
2. Set row 1 headers on tab `GOOGLE_SHEET_TAB_NAME`:

   `Timestamp | Brand | Form Type | Full Name | Organisation | Email | Phone | Instruction Type | Practice Area | Deadline | Message | Referral Source`

3. Copy `.env.example` to `.env.local` and set `GOOGLE_*` variables.
4. Test: `npm run test:sheets`
