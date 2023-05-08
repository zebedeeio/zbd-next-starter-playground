import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { QR } from './qr-code';
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class GetWithdrawalRequestModule extends PureComponent {
  state = {
    id: '',
    data: {},
    success: null,
    isLoading: false,
  };

  // Handle ID Change
  handleIdChange = (event) => this.setState(() => ({
    id: event.target.value
  }));

  // Handle Get Withdrawal Request
  handleGetWithdrawalRequest = async () => {
    const { id } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch(`/api/withdrawal-requests?withdrawalRequestId=${id}`);

    const response = await res.json();
    const { success, data } = response;

    this.setState(({ success, data, isLoading: false }));
  }

  render() {
    const { id, isLoading, success, data } = this.state;
    const successAndHasData = success && data && Object.keys(data).length > 0;

    return (
      <div className={styles.module}>
        <p>
          Get Withdrawal Request
        </p>
        <code>
          Gets the details of a Withdrawal Request by ID.
        </code>
        <div className={styles.divider} />
        <input
          value={id}
          placeholder='eb231253-bbef-4144-b734-57d613a7b284'
          className={styles.input}
          onChange={this.handleIdChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleGetWithdrawalRequest}
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