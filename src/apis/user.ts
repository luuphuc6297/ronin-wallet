import { DEFAULT_USER_ID } from 'constant/common';
import { User, Wallet } from 'models';
import axiosClient from './axiosClient';

const userApis = {
    getCurrentUser(): Promise<User> {
        const url = `/users/${DEFAULT_USER_ID}`;
        return axiosClient.get(url);
    },
    getWallet(roninAddress: string): Promise<Wallet> {
        const url = `/wallets/${roninAddress}`;
        return axiosClient.get(url);
    },
};

export default userApis;
