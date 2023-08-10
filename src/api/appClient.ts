import axios from 'axios';
import { APIRoutes } from './api-routes';
import { store } from '../store';



const appClient = axios.create({
    baseURL: APIRoutes.APIBaseURL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 5 * 60 * 1000,
});

appClient.interceptors.request.use(
    function (config) {
        const state = store.getState();
        if (state?.userData?.user) {
            config.headers['Authorization'] = 'Bearer ' + state?.userData?.user?.['token']
        }
        // console.log('ttttttt',config.headers);
        return config;
    },
    function (error) {

        console.log('error in axios', error);
        // Do something with request error
        return Promise.reject(error);
    },
);

appClient.interceptors.response.use(
    function (response) {
        // (__DEV__) ? console.log('API response : ', JSON.stringify(response?.data)) : null;
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {

        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('API ERROR : ', error);
        return Promise.reject(error);
    },
);

export default appClient;


export const NetWorkError = {
    MESSAGE: {
        networkError: "Network Error",
        failed404: "Request failed with status code 404",
        timeout: "timeout of ms exceeded",
        outMemoryException: "Out Of MemoryError",
        failed500: "Request failed with status code 500",
        failed503: "Request failed with status code 503",
    },
    STATUS_CODES: {
        unAuthorizedRequest: 401,
        expectationFailedClientError: 417
    }
};