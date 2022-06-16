import { FASTFOREX_API_KEY } from 'constant/common';
import { FastForexProps } from 'models';
import axiosServicesClient from './axiosServicesClient';

// All of apis defaults base on USD
const fastForexApis = {
    // Fetch multiple currency rates at once
    fetchMultiExchangeRate(): Promise<FastForexProps> {
        const url = '/fetch-multi';
        return axiosServicesClient.get(url, {
            params: {
                to: 'JPY,EUR',
                api_key: FASTFOREX_API_KEY,
            },
        });
    },
    // Convert an amount of one currency into another currency
    convertCurrency(from: string, amount: number): Promise<FastForexProps> {
        const url = '/convert';
        return axiosServicesClient.get(url, {
            params: {
                from: from,
                to: 'VND',
                amount: amount,
                api_key: FASTFOREX_API_KEY,
            },
        });
    },
};
export default fastForexApis;
