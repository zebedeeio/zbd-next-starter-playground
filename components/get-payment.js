import { PureComponent } from 'react';

// Styles
import styles from '@/styles/Home.module.css'

// Components
import { JSONViewer } from './json-viewer';
import { ModuleButton } from './module-button';
import { Label } from './label';

export class GetPaymentModule extends PureComponent {
  state = {
    id: '',
    data: {},
    success: null,
    isLoading: false,
  };

  // Handle ID Change
  handleIdChange = (event) => this.setState(() => {
    let value = event.target.value;
    if (value.includes('"')) {
      value = value.replace(/"/g, '');
    }

    return { id: value };
  });

  // Handle Get Payment
  handleGetPayment = async () => {
    const { id } = this.state;
    this.setState(() => ({ isLoading: true, data: {}, success: null }));

    const res = await fetch(`/api/payments?paymentId=${id}`);

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
          Get Payment
        </p>
        <code>
          Gets the details of a Payment by ID.
        </code>
        <div className={styles.divider} />
        <Label label={'Payment ID'} hasMarginTop />
        <input
          value={id}
          placeholder='eb231253-bbef-4144-b734-57d613a7b284'
          className={styles.input}
          onChange={this.handleIdChange}
        />
        <ModuleButton
          isLoading={isLoading}
          label={'Submit'}
          onClick={this.handleGetPayment}
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