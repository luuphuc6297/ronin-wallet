import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosServicesClient = axios.create({
    baseURL: 'https://api.fastforex.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosServicesClient.interceptors.request.use(
    function (config: AxiosRequestConfig) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axiosServicesClient.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosServicesClient;
