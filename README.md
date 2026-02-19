# Conrad Preston — Portfolio Site

Built with Next.js 14 (App Router) + Tailwind CSS + TypeScript + Framer Motion.

## Local Dev

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option 2: GitHub Integration (recommended)
1. Push this repo to GitHub (github.com/Conrady82)
2. Go to vercel.com → New Project → Import from GitHub
3. Select this repo → Deploy
4. Add custom domain: conradpreston.dev in Project Settings → Domains

## Custom Domain Setup (conradpreston.dev)
In your domain registrar (GoDaddy, Namecheap, etc.):
- Add a CNAME record: `www` → `cname.vercel-dns.com`
- Add an A record: `@` → `76.76.21.21` (Vercel's IP)

Or follow Vercel's guided flow: vercel.com/docs/concepts/projects/domains

## Contact Form Setup
The contact form uses [Formspree](https://formspree.io):
1. Sign up at formspree.io
2. Create a form → set email to `conrad@conradpreston.dev`
3. Copy your form ID
4. Replace `YOUR_FORMSPREE_ID` in `components/Contact.tsx`

## Headshot
Drop your headshot at `public/headshot.jpg`, then update `components/Hero.tsx`:
```tsx
// Replace the CP initials div with:
import Image from "next/image";
<Image src="/headshot.jpg" alt="Conrad Preston" width={96} height={96} className="rounded-full object-cover" />
```
