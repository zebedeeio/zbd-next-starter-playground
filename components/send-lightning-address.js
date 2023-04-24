import { PureComponent } from 'react';
import dynamic from 'next/dynamic';

import styles from '@/styles/Home.module.css'
import { ModuleButton } from './module-button';

const DynamicJSONViewer = dynamic(() => import('react-json-view'), {
  ssr: false,
})

export class SendLightningAddressModule extends PureComponent {
  state = {
    address: '',
    isLoading: false,
    success: null,
    data: {},
    amount: '',
  };

  // Handle Address Change
  handleAddressChange = (event) => this.setState(() => ({
    address: event.target.value
  }));

  // Handle Amount Change
  handleAmountChange = (event) => this.setState(() => ({
    amount: event.target.value
  }));

  // Handle Send to Lightning Address
  handleSendToLightningAddress = async () => {
    const { address, amount } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/lightning-address/send', {
      method: 'POST',
      body: JSON.stringify({
        lnAddress: address,
        amount: `${amount}000`
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { address, amount, isLoading, success, data } = this.state;

    return (
      <div className={styles.module}>
        <p>
          Send to Lightning Address
        </p>
        <code>Send Bitcoin directly to a Lightning Address.</code>
        <input  
          className={styles.input}
          value={address}
          placeholder={'andre@zbd.gg'}
          onChange={this.handleAddressChange}
        />
        <input
          type='numeric'
          value={amount}
          className={styles.input}
          placeholder={'100 satoshis'}
          onChange={this.handleAmountChange}
        />
        <ModuleButton
          label={'Send Payment'}
          isLoading={isLoading}
          onClick={this.handleSendToLightningAddress}
        />
        {(success && Object.keys(data).length > 0 ) && (
          <div className={styles.statusWrapper}>
            <p>
              ✅ <code><b>Sent</b></code>
            </p>
          </div>
        )}
        {(!success && Object.keys(data).length > 0 ) && (
          <div className={styles.statusWrapper}>
            <p>
              ❌ <code><b>Failed</b></code>
            </p>
          </div>
        )}
        {Object.keys(data).length > 0 && (
          <DynamicJSONViewer
            src={data}
            name='response'
            iconStyle='square'
            collapsed={false}
            displayDataTypes={false}
            displayObjectSize={false}
            theme='summerfruit:inverted'
            collapseStringsAfterLength={15}
            style={{
              padding: '1rem',
            }}
          />
        )}
      </div>
    )
  }
}