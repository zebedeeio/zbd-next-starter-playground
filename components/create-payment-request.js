import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { QR } from './qr-code';
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';
import { Label } from './label';

export class CreateChargeModule extends PureComponent {
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

  // Handle Create Charge
  handleCreateCharge = async () => {
    const { amount, description } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/charges', {
      method: 'POST',
      body: JSON.stringify({
        amount: `${amount}000`,
        description: description || 'Pay me now!',
        expiresIn: 300,
      }),
    });

    const response = await res.json();
    const { success, data } = response;

    console.log({ response, data });

    // console.log({ datauri: data.invoice.uri, uri1: data.invoice.request })
    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { amount, description, isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Create Charge
        </p>
        <code>
          Creates a Lightning Charge / Payment Request QR code.
        </code>
        <div className={styles.divider} />
        <Label label={'Amount (in satoshis)'} hasMarginTop />
        <input
          value={amount}
          placeholder='100'
          className={styles.input}
          onChange={this.handleAmountChange}
        />
        <Label label={'Description'} />
        <input
          value={description}
          placeholder='Pay me now!'
          className={styles.input}
          onChange={this.handleDescriptionChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleCreateCharge}
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