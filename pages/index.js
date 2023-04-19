import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ZEBEDEE + Next.js Starter</title>
        <meta name="description" content="Maintained by @ZEBEDEE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://zebedee.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/zebedee.svg"
                alt="ZEBEDEE Logo"
                className={styles.zebedeeLogo}
                width={100}
                height={24}
                priority
              />
            </a>
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
            href="https://docs.zebedee.io"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about ZEBEDEE features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              CHANGEME Learn about ZEBEDEE and our API offerings!
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
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
            href="https://github.com/zebedeeio"
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
