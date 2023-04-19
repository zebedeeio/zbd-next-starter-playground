# ZEBEDEE Next.js Starter

This is a starter kit for building fullstack applications using Next.js react framework alongside ZEBEDEE for global instantaneous Bitcoin payments.

## Installation & Setup

First you must install the project's dependencies:

```bash
npm run dev
# or
yarn dev
```

Then you must create a `.env.local` file in the root directory with your ZEBEDEE API key, like so:

```bash
ZEBEDEE_API_KEY=xxxxxxxxxxxxxxxx
```

You may also simply rename the `.env.local.example` file to `.env.local`.

That's it! You're all set.

## Starting Dev Server

To start the dev server run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

You can start editing the project page by modifying `pages/index.js`. There is additional comments throughout this file as well. The page should auto-update as you edit the file. Any JS page inside of `pages` are treated as React components that can be rendered on the application. 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) and effectively make up your project's backend APIs.

## Learn More

To learn more about ZEBEDEE, take a look at the following resources:

- [ZEBEDEE Documentation Portal](https://docs.zebedee.io) - documentation, guides, and walkthroughs
- [GitHub](https://github.com/zebedeeio) - ZEBEDEE's org GitHub account with lots of example source code and open source SDK libraries
- [Discord Dev Chat](https://discord.gg/zbd) - join other developers discussing ZEBEDEE integration topics

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy this project is to use the Vercel Deploy button below.

