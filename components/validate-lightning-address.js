import { PureComponent } from 'react';
import dynamic from 'next/dynamic';

import styles from '@/styles/Home.module.css'
import { ModuleButton } from './module-button';

const DynamicJSONViewer = dynamic(() => import('react-json-view'), {
  ssr: false,
})

export class ValidateLightningAddressModule extends PureComponent {
  state = {
    address: '',
    isLoading: false,
    success: null,
    data: {},
  };

  // Handle Address Change
  handleAddressChange = (event) => this.setState(() => ({
    address: event.target.value,
    isLoading: false,
    success: null,
    data: {},
  }));

  // Handle Validate Address
  handleValidate = async () => {
    const { address } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch('/api/lightning-address/validate', {
      method: 'POST',
      body: JSON.stringify({
        lnAddress: address,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      const errorMessage = `Error ${error.error.status}: ${error.error.message}`;

      this.setState(({
        data: {},
        isLoading: false,
        error: errorMessage,
        success: error.success || false,
      }));
    } else {
      const response = await res.json();
      const { success, data } = response;
  
      this.setState(({ success, data, isLoading: false, error: '' }));
    }
  }

  render() {
    const { address, isLoading, success, data } = this.state;

    return (
      <div className={styles.module}>
        <p>
          Validate Lightning Address
        </p>
        <code>Check the validity of a Lightning Address.</code>
        <div className={styles.divider} />
        <input className={styles.input} value={address} onChange={this.handleAddressChange} />
        <ModuleButton label={'Validate Address'} isLoading={isLoading} onClick={this.handleValidate} />
        {success && data && Object.keys(data).length > 0 && (
          <>
            <div className={styles.statusWrapper}>
              {data.valid ? (
                <p>
                  ✅ <code><b>Valid</b></code>
                </p>
              ) : (
                <p>
                  ❌ <code><b>Not Valid</b></code>
                </p>
              )}
            </div>
            <DynamicJSONViewer
              src={data}
              name='response'
              style={{
                padding: '1rem',
              }}
              theme='summerfruit:inverted'
              collapseStringsAfterLength={15}
              iconStyle='square'
              collapsed={false}
              displayObjectSize={false}
              displayDataTypes={false}
            />
          </>
        )}
      </div>
    )
  }
}