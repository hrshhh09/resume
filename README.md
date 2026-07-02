# Harsh Aathavale Portfolio

Next.js App Router portfolio and resume website rebuilt from the downloaded preview snapshot in `archive/downloaded-preview`.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run typecheck
npm run build
```

## Backend Routes

- `POST /api/contact` validates contact form submissions and logs them server-side.
- `GET /api/profile` returns profile, experience, skills, projects, and blog metadata as JSON.

Replace `public/resume.pdf` with the final resume PDF when available.