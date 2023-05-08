import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';

export class IPAddressModule extends PureComponent {
  state = {
    data: {},
    ipAddress: '',
    success: null,
    isLoading: false,
  };

  // Handle Amount Change
  handleIPAddressChange = (event) => this.setState(() => ({
    ipAddress: event.target.value
  }));

  // Handle Create Withdrawal Request
  handleValidateIPAddress = async () => {
    const { ipAddress } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch(`/api/utils/is-supported?ipAddress=${ipAddress}`);

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
          Supported Region Checker
        </p>
        <code>
          Checks whether an IP Address is within a supported region by ZEBEDEE API.
        </code>
        <div className={styles.divider} />
        <input
          value={charge}
          placeholder='12.112.198.14'
          className={styles.input}
          onChange={this.handleIPAddressChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleValidateIPAddress}
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