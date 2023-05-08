import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class SendPaymentModule extends PureComponent {
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

  // Handle Send Payment
  handleSendPayment = async () => {
    const { charge } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/payments', {
      method: 'POST',
      body: JSON.stringify({
        invoice: charge
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { charge, isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Pay Lightning Charge
        </p>
        <code>
          Pays a Lightning Network Charge / Payment Request
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
          onClick={this.handleSendPayment}
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