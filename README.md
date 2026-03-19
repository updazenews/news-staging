# Admin Portal

Next.js App Router admin portal for Updaze News + Sebenza with Firebase auth placeholders and role-based route protection.

## Run locally

```bash
npm install
npm run dev
```

## Publish output to GitHub Pages

This project is configured for static export and deploy via GitHub Actions.

1. In GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `work` or `main`, or run the workflow manually.
4. The action builds static files into `out/` and deploys that artifact.

The base path is configured for this repo (`/news-staging`) via `NEXT_PUBLIC_BASE_PATH` in workflow.

## Demo roles (email patterns)

- `*admin*` => superadmin
- `*publisher*` => publisher
- anything else => recruiter

## Firebase projects wired

- Updaze News project (`updaze-news`) via `newsApp`/`newsAuth`/`newsDb`
- Sebenza project (`updaze-jobs`) via `jobsApp`/`jobsAuth`/`jobsDb`

### Auth source of truth

- Authentication uses **Updaze News Firebase Auth** (`newsAuth`) only.
- User profile/role records are written to **Updaze News Firestore** collection `users` on login.
