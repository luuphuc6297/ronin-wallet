import { reduce } from 'lodash';
import { FastForexProps, Wallet } from 'models';
import fastForexApis from 'services/fastForex';

export const formatUsd = (amount: number | any) => {
    return amount.toLocaleString('en-US');
};

export const formatForVnd = (amount: number | any) => {
    return amount.toLocaleString('en-US');
};

export const convertToVnd = async (code: string | any, amount: number | any): Promise<FastForexProps> => {
    const result: FastForexProps = await fastForexApis.convertCurrency(code, amount);
    return result?.result?.VND;
};

export const getUsdAsset = (wallet: Wallet) => {
    return reduce(wallet?.assets, (acc: string | any, curr: string | any) => {
        if (curr.code === 'USD') {
            acc = curr;
        }
        return acc;
    });
};
