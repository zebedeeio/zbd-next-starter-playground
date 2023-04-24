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
import Head from 'next/head'
import { PureComponent } from 'react'
import { Inter } from 'next/font/google'

// Styles
import styles from '@/styles/Home.module.css'
import { WalletBalanceModule } from '@/components/wallet-balance'
import { SendLightningAddressModule } from '@/components/send-lightning-address'
import { ValidateLightningAddressModule } from '@/components/validate-lightning-address'
import { CreateChargeModule } from '@/components/create-payment-request'

// Fonts
const inter = Inter({ subsets: ['latin'] })

// Component
export default class ZBDNextJSStarter extends PureComponent {
  render() {
    return (
      <>
        <Head>
          <title>Playground - ZEBEDEE + Next.js Starter</title>
          <meta name="description" content="Maintained by @ZEBEDEE" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              Playground Test Modules for <b>ZEBEDEE API</b>
            </p>
            <div>
              <WalletBalanceModule />
            </div>
          </div>
  
          <div className={styles.moduleGrid}>
            <ValidateLightningAddressModule />
            <SendLightningAddressModule />
            <CreateChargeModule />
          </div>
        </main>
      </>
    )
  }
}
