# `discord-server-info`

> Display information & statistics vital for managing a complex Discord server

## Development

### Installing packages

This repository uses the [`pnpm`](https://pnpm.io/) package manager. See
[Installation](https://pnpm.io/installation) for installation instructions.

You can install this project's packages using `pnpm i`.

### Configuring the application

To run the app locally, you'll need to complete a few steps first:

1. [Create a Discord Application in the Discord Developer Portal](https://blog.with-heart.xyz/creating-a-discord-application)
2. On your application's page, go to the "OAuth2" page in the sidebar and add a
   redirect to `http://localhost:3001/api/auth/callback/discord`
3. [Store your application's client ID and secret in `.env.local`](https://blog.with-heart.xyz/storing-and-accessing-discord-application-environment-variables-with-nextjs)

### Starting the application

```
pnpm run dev
```

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.tsx`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
