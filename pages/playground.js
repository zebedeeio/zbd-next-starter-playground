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
import { CreateWithdrawalRequestModule } from '@/components/create-withdrawal-request'
import { DecodeChargeModule } from '@/components/decode-charge'
import { SendGamertagPaymentModule } from '@/components/send-gamertag-payment'
import { SendPaymentModule } from '@/components/send-payment'
import { BTCUSDRateModule } from '@/components/btcusd-exchange-rate'
import { IPAddressModule } from '@/components/is-supported-region'
import { GetWithdrawalRequestModule } from '@/components/get-withdrawal-request'
import { GetChargeModule } from '@/components/get-charge'
import { GetPaymentModule } from '@/components/get-payment'
import { GetGamertagPaymentModule } from '@/components/get-gamertag-payment'

import { SocialHeadTags } from '@/components/social-head-tags'

// Fonts
const inter = Inter({ subsets: ['latin'] })

// Component
export default class ZBDNextJSStarter extends PureComponent {
  render() {
    return (
      <>
        <Head>
           <SocialHeadTags
            title='Dev Playground - ZEBEDEE API'
            description='Open source starter kit for fullstack applications including a Dev Playground showcasing the many features available for Payins and Payouts on the ZEBEDEE API.'
            image='https://i.imgur.com/QvFJ7mq.png'
            url='https://playground.dev.zebedee.cloud/playground'
          />
        </Head>
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
              Playground Modules for <b>ZEBEDEE API</b>
            </p>
            <div>
              <WalletBalanceModule />
            </div>
          </div>

          <div className={styles.mainGridWrapper}>
            <h1>Charges</h1>
            <div className={styles.moduleGrid}>
              <CreateChargeModule />
              <GetChargeModule />
            </div>

            <h1>Withdrawal Requests</h1>
            <div className={styles.moduleGrid}>
              <CreateWithdrawalRequestModule />
              <GetWithdrawalRequestModule />
            </div>

            <h1>Lightning Address</h1>
            <div className={styles.moduleGrid}>
              <ValidateLightningAddressModule />
              <SendLightningAddressModule />
            </div>

            <h1>Utilities</h1>
            <div className={styles.moduleGrid}>
              <BTCUSDRateModule />
              <IPAddressModule />
            </div>

            <h1>Decode Payment Requests</h1>
            <div className={styles.moduleGrid}>
              <DecodeChargeModule />
            </div>

            <h1>ZBD Gamertag</h1>
            <div className={styles.moduleGrid}>
              <SendGamertagPaymentModule />
              <GetGamertagPaymentModule />
            </div>

            <h1>Payments</h1>
            <div className={styles.moduleGrid}>
              <SendPaymentModule />
              <GetPaymentModule />
            </div>
          </div>
        </main>
      </>
    )
  }
}
