import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class BTCUSDRateModule extends PureComponent {
  state = {
    data: {},
    success: null,
    isLoading: false,
  }; 

  // Handle Fetching BTCUSD Rate
  handleFetchBTCUSD = async () => {
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/utils/btc-usd');

    const response = await res.json();
    const { success, data } = response;

    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Get BTCUSD Exchange Rate
        </p>
        <code>
          Fetches the latest BTC USD exchange rate from ZEBEDEE API.
        </code>
        <div className={styles.divider} />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleFetchBTCUSD}
        />
        {(successAndHasData) && (
          <div className={styles.statusWrapper}>
            <p>
              ✅ <code><b>Success</b></code>
            </p>
          </div>
        )}
        {(!success && data && Object.keys(data).length > 0) && (
          <div className={styles.statusWrapper}>
            <p>
              ❌ <code><b>Failed</b></code>
            </p>
          </div>
        )}
        {successAndHasData && (
          <JSONViewer data={data} />
        )}
      </div>
    )
  }
}