import { Network } from '@capacitor/network';

export const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    return status;
};
