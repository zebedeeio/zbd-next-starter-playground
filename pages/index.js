// =================================================
// Welcome to NextJS ZEBEDEE Starter
// =================================================
//
// The goal here is to showcase a simple example of
// the @zbd/node library being used to interact with
// the ZEBEDEE API on a NodeJS environment.

// Check `/pages/api/wallet` to see how simple it is
// to fetch/post information to the ZEBEDEE API

// This index.js shows a simple way to fetch the
// /api/wallet backend endpoint and showcase the
// response data on the homepage.
//
// =================================================

// Lib Imports
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { PureComponent } from 'react';
import { Inter } from 'next/font/google';

// Styles
import styles from '@/styles/Home.module.css';

// Fonts
const inter = Inter({ subsets: ['latin'] });

// Components
import { SocialHeadTags } from '@/components/social-head-tags';

export default class ZBDNextJSStarter extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <SocialHeadTags
            title='ZEBEDEE + Next.js Starter Kit - ZEBEDEE API'
            description='Open source starter kit for fullstack applications built on Next.js framework using ZEBEDEE for instant global payments.'
            image='https://i.imgur.com/B8TuFvL.png'
            url='https://playground.dev.zebedee.cloud'
          />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              Get started by editing&nbsp;
              <code className={styles.code}>pages/index.js</code>
            </p>
            <div>
              <p>
                <Link href='/playground'>
                  <b>Open ZBD Playground <span className={inter.className}>-&gt;</span></b>
                </Link>
              </p>
            </div>
          </div>
  
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/zbd-nextjs.png"
              alt="ZEBEDEE + Next.js"
              width={185}
              height={99.61538462}
              priority
            />
          </div>
  
          <div className={styles.grid}>
            <a
              href="https://github.com/zebedeeio/nextjs-zebedee-starter"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Docs <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Detailed walkthroughs to get started with this kit.
              </p>
            </a>
  
            <a
              href="https://docs.zebedee.io/docs/quick-start"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Learn <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Find in-depth information about ZEBEDEE features and&nbsp;API.
              </p>
            </a>
  
            <a
              href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzebedeeio%2Fnextjs-zebedee-starter&env=ZEBEDEE_API_KEY&envDescription=Your%20ZEBEDEE%20project%20API%20key&demo-title=ZEBEDEE%20%2B%20Next.js%20Starter&demo-description=Starter%20kit%20for%20using%20ZEBEDEE%20API%20with%20Next.js%20fullstack%20applications&demo-url=https%3A%2F%2Fnextjs-zebedee-starter.vercel.app%2F&demo-image=https%3A%2F%2Fi.imgur.com%2FNf8wRgv.png"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Deploy <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Instantly deploy this ZEBEDEE starter kit to Vercel.
              </p>
            </a>
  
            <a
              href="https://www.npmjs.com/package/@zbd/node"
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                @zbd/node <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Learn more about the ZEBEDEE SDK for NodeJS.
              </p>
            </a>
          </div>
        </main>
      </>
    )
  }
}
