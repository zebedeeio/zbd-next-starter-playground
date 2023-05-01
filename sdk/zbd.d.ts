import { ChargeOptionsType, KeysendOptionsType, SendPaymentOptionsType, StaticChargeOptionsType, InternalTransferOptionsType, WithdrawalRequestOptionsType, SendGamertagPaymentOptionsType, FetchChargeFromGamertagOptionsType, SendLightningAddressPaymentOptionsType } from './types';
declare class zbd {
    apiKey: any;
    apiBaseUrl: any;
    apiCoreHeaders: any;
    constructor(apiKey: any);
    createCharge(options: ChargeOptionsType): Promise<any>;
    getCharge(chargeId: string): Promise<any>;
    createWithdrawalRequest(options: WithdrawalRequestOptionsType): Promise<any>;
    getWithdrawalRequest(withdrawalRequestId: string): Promise<any>;
    validateLightningAddress(lightningAddress: string): Promise<any>;
    sendLightningAddressPayment(options: SendLightningAddressPaymentOptionsType): Promise<any>;
    getWallet(): Promise<any>;
    isSupportedRegion(ipAddress: string): Promise<any>;
    fetchZBDProdIps(): Promise<any>;
    btcUsdExchangeRate(): Promise<any>;
    internalTransfer(options: InternalTransferOptionsType): Promise<any>;
    sendKeysendPayment(options: KeysendOptionsType): Promise<any>;
    payCharge(options: SendPaymentOptionsType): Promise<any>;
    getPayment(paymentId: string): Promise<any>;
    sendGamertagPayment(options: SendGamertagPaymentOptionsType): Promise<any>;
    fetchGamertagTransaction(transactionId: string): Promise<any>;
    fetchUserIdByGamertag(gamertag: string): Promise<any>;
    fetchGamertagByUserId(userId: string): Promise<any>;
    createGamertagCharge(options: FetchChargeFromGamertagOptionsType): Promise<any>;
    createStaticCharge(options: StaticChargeOptionsType): Promise<any>;
    updateStaticCharge(staticChargeId: string, updates: StaticChargeOptionsType): Promise<any>;
    getStaticCharge(staticChargeId: string): Promise<any>;
}
export { zbd };
//# sourceMappingURL=zbd.d.ts.map