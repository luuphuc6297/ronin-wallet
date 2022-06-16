import { Currency, ListResponse } from 'models';
import axiosClient from './axiosClient';

const currencyApi = {
    getCurrencies(): Promise<ListResponse<Currency>> {
        const url = '/currencies';
        return axiosClient.get(url, {
            params: {
                _page: 1,
                _limit: 10,
            },
        });
    },
};

export default currencyApi;
