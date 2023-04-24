import { PureComponent } from "react";

import styles from '@/styles/Home.module.css'

export class WalletBalanceModule extends PureComponent {
  state = {
    wallet: {},
    error: false,
    isLoading: true,
  };

  async componentDidMount() {
    await this.getWalletData();
  }

  // Get Wallet Information
  getWalletData = async () => {
    const res = await fetch('/api/wallet');
    const response = await res.json();
    const { success, data } = response;

    // Set error state if failed to fetch
    if (!success) {
      this.setState(({ error: true, isLoading: false }));
    } else {
      // Set success state + data
      this.setState(({ wallet: data, isLoading: false, error: false  }));
    }
  }

  // Format millisatoshis
  formatSats = (msats) => {
    // In production it is recommended to use a better lib such
    // as BigNumber for handling big numbers in JavaScript
    const number = parseInt(msats, 10);

    // Remove last 3 digits and round up
    const roundedNumber = Math.ceil(number / 1000);

    // Add commas every 3 digits
    const formattedNumber = roundedNumber
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return formattedNumber;
  }

  render() {
    const { wallet, isLoading, error } = this.state;

    return (
      <p>
        {isLoading && (
          <>🔄&nbsp;</>
        )}
        {error && (
          <>❌&nbsp;</>
        )}
        {!isLoading && !error && (
          <>✅&nbsp;</>
        )}
        ZBD Project Wallet:&nbsp;
        {isLoading && (
          <code className={styles.code}>Loading...</code>
        )}
        {error && (
          <code className={styles.code}>NOT CONNECTED</code>
        )}
        {!isLoading && !error && (
          <code className={styles.code}>
            {wallet && wallet.balance && this.formatSats(wallet.balance)} sats
          </code>
        )}
      </p>
    )
  }
}