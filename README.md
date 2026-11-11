# TCE Property Management website

Marketing site for TCE Property Management (New York City), built with Next.js (App Router) and Tailwind CSS.

## Develop

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/site.ts`: company details (phone, email, address, hours). Empty phone/email are hidden site-wide.
- `src/lib/services.ts`: all service content. Each entry becomes a page under `/services/<slug>`.
- `src/app`: pages (`/`, `/services`, `/about`, `/contact`, `/privacy-policy`), `sitemap.xml` and `robots.txt`.
- `public/images`: logo and photography.

## Contact form

`/api/contact` emails enquiries through [Resend](https://resend.com). Set these environment variables in Vercel:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Optional verified sender address |

Until they are set, the form tells visitors it is unavailable.
