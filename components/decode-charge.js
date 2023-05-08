import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { QR } from './qr-code';
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class DecodeChargeModule extends PureComponent {
  state = {
    data: {},
    charge: '',
    success: null,
    isLoading: false,
  };

  // Handle Amount Change
  handleChargeChange = (event) => this.setState(() => ({
    charge: event.target.value
  }));

  // Handle Create Withdrawal Request
  handleDecodeCharge = async () => {
    const { charge } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/decode-charge', {
      method: 'POST',
      body: JSON.stringify({
        invoice: charge
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    console.log({ response, data });

    // console.log({ datauri: data.invoice.uri, uri1: data.invoice.request })
    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { charge, isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Decodes Lightning Network Charge
        </p>
        <code>
          Decodes a Lightning Network Invoice / Charge / Payment Request
        </code>
        <div className={styles.divider} />
        <input
          value={charge}
          placeholder='lnbc100m....'
          className={styles.input}
          onChange={this.handleChargeChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleDecodeCharge}
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
          <QR value={data.lnRequest} />
        )}
        {successAndHasData && (
          <JSONViewer data={data} />
        )}
      </div>
    )
  }
}