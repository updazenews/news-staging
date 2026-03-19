# Admin Portal

Next.js App Router admin portal for Updaze News + Sebenza with Firebase auth placeholders and role-based route protection.

## Run

```bash
npm install
npm run dev
```

## Demo roles (email patterns)

- `*admin*` => superadmin
- `*publisher*` => publisher
- anything else => recruiter

## Firebase projects wired

- Updaze News project (`updaze-news`) via `newsApp`/`newsAuth`/`newsDb`
- Sebenza project (`updaze-jobs`) via `jobsApp`/`jobsAuth`/`jobsDb`

Set `NEXT_PUBLIC_*` env vars to override defaults for each project in production.
