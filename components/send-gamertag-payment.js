import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class SendGamertagPaymentModule extends PureComponent {
  state = {
    data: {},
    success: null,
    gamertag: '',
    amount: '',
    isLoading: false,
  }; 

  // Handle Description Change
  handleGamertagChange = (event) => this.setState(() => ({
    gamertag: event.target.value
  }));

  // Handle Amount Change
  handleAmountChange = (event) => this.setState(() => ({
    amount: event.target.value
  }));

  // Handle Send Gamertag Payment
  handleSendGamertagPayment = async () => {
    const { amount, gamertag } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/gamertag/payments', {
      method: 'POST',
      body: JSON.stringify({
        amount: `${amount}000`,
        gamertag: gamertag,
        description: 'ZEBEDEE API is fast!',
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    console.log({ response, data });

    // console.log({ datauri: data.invoice.uri, uri1: data.invoice.request })
    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { amount, gamertag, isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Send ZBD Gamertag Payment
        </p>
        <code>
          Sends a Bitcoin payment to a ZBD Gamertag instantly.
        </code>
        <div className={styles.divider} />
        <input
          value={amount}
          placeholder='100 satoshis'
          className={styles.input}
          onChange={this.handleAmountChange}
        />
        <input
          value={gamertag}
          placeholder='andre@zbd.gg'
          className={styles.input}
          onChange={this.handleGamertagChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleSendGamertagPayment}
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