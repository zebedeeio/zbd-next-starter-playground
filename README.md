<h1 align='center'>ZEBEDEE Next.js Dev Playground</h1>

<div align='center'>
<img width='900' src='https://i.imgur.com/AO87Pz0.png' />
</div>

<div align='center'>

Developer Playground for testing the ZEBEDEE API

<br />

[![bitcoin ln payments](https://img.shields.io/badge/Bitcoin%20Lightning-Payments-orange?style=for-the-badge&logo=bitcoin)](https://zebedee.io)
<br/>

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/zebedeeio/zbd-next-starter-playground/blob/HEAD/LICENSE.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/zebedeeio/zbd-next-starter-playground/blob/HEAD/CONTRIBUTING.md#pull-requests)

<br />


<p align='center'>
  <a href='https://playground.dev.zebedee.cloud'><strong>Live Dev Playground</strong></a> · <a href='https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzebedeeio%2Fnextjs-zebedee-starter&env=ZEBEDEE_API_KEY&envDescription=Your%20ZEBEDEE%20project%20API%20key&demo-title=ZEBEDEE%20%2B%20Next.js%20Starter&demo-description=Starter%20kit%20for%20using%20ZEBEDEE%20API%20with%20Next.js%20fullstack%20applications&demo-url=https%3A%2F%2Fnextjs-zebedee-starter.vercel.app%2F&demo-image=https%3A%2F%2Fi.imgur.com%2FNf8wRgv.png'><strong>1-Click Deploy</strong></a> · <a href='https://dashboard.zebedee.io'><strong>Developer Dashboard</strong></a>
</p>

</div>

---

<div align='left'>
<br />

This is a starter kit for building fullstack applications using Next.js react framework alongside ZEBEDEE for global instantaneous Bitcoin payments. 

This starter kit also emcompasses a Dev Playground (see `/pages/playground.js`) where ZEBEDEE-enabled modules can be used / tested. 

![ ](https://i.imgur.com/3WqkI62.png)

<div align='center'>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzebedeeio%2Fnextjs-zebedee-starter&env=ZEBEDEE_API_KEY&envDescription=Your%20ZEBEDEE%20project%20API%20key&demo-title=ZEBEDEE%20%2B%20Next.js%20Starter&demo-description=Starter%20kit%20for%20using%20ZEBEDEE%20API%20with%20Next.js%20fullstack%20applications&demo-url=https%3A%2F%2Fnextjs-zebedee-starter.vercel.app%2F&demo-image=https%3A%2F%2Fi.imgur.com%2FNf8wRgv.png)

</div>


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

## File Structure

You can start editing the project page by modifying `pages/index.js`. There is additional comments throughout this file as well. The page should auto-update as you edit the file. Any JS page inside of `pages` are treated as React components that can be rendered on the application. 

Specifically, check out `/pages/index.js` and `/pages/playground.js` as they are the two main pages available in this starter kit.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) and effectively make up your project's backend APIs. The backend API is using the [`@zbd/node`](https://github.com/zebedeeio/zbd-node) SDK library for Node.js to interact with the ZEBEDEE API.

The main goal for this starter kit is to provide ample resources around source code that can be used to speed up your development of ZEBEDEE-powered applications.

## Learn More

To learn more about ZEBEDEE, take a look at the following resources:

- [ZEBEDEE Documentation Portal](https://docs.zebedee.io) - documentation, guides, and walkthroughs
- [GitHub](https://github.com/zebedeeio) - ZEBEDEE's org GitHub account with lots of example source code and open source SDK libraries
- [Discord Dev Chat](https://discord.gg/zbd) - join other developers discussing ZEBEDEE integration topics

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

To make the most out of this Playground, deploy the project to Vercel using the Deploy button below and pass your ZEBEDEE API Key in the settings. This will spin up an instance of the Dev Playground connected to YOUR ZEBEDEE account.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzebedeeio%2Fnextjs-zebedee-starter&env=ZEBEDEE_API_KEY&envDescription=Your%20ZEBEDEE%20project%20API%20key&demo-title=ZEBEDEE%20%2B%20Next.js%20Starter&demo-description=Starter%20kit%20for%20using%20ZEBEDEE%20API%20with%20Next.js%20fullstack%20applications&demo-url=https%3A%2F%2Fnextjs-zebedee-starter.vercel.app%2F&demo-image=https%3A%2F%2Fi.imgur.com%2FNf8wRgv.png)