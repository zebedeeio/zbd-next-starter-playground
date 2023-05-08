import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { QR } from './qr-code';
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class CreateWithdrawalRequestModule extends PureComponent {
  state = {
    data: {},
    success: null,
    description: '',
    isLoading: false,
  };

  // Handle Description Change
  handleDescriptionChange = (event) => this.setState(() => ({
    description: event.target.value
  }));

  // Handle Amount Change
  handleAmountChange = (event) => this.setState(() => ({
    amount: event.target.value
  }));

  // Handle Create Withdrawal Request
  handleCreateWithdrawalRequest = async () => {
    const { amount, description } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/withdrawal-requests', {
      method: 'POST',
      body: JSON.stringify({
        amount: `${amount}000`,
        description: description || 'Claim your Bitcoin now!',
        expiresIn: 300,
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { amount, description, isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Create Withdrawal Request
        </p>
        <code>
          Creates a Withdrawal Request QR code.
        </code>
        <div className={styles.divider} />
        <input
          value={amount}
          placeholder='100 satoshis'
          className={styles.input}
          onChange={this.handleAmountChange}
        />
        <input
          value={description}
          placeholder='Give me Bitcoin now!'
          className={styles.input}
          onChange={this.handleDescriptionChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleCreateWithdrawalRequest}
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
          <QR value={data.invoice.uri} />
        )}
        {successAndHasData && (
          <JSONViewer data={data} />
        )}
      </div>
    )
  }
}