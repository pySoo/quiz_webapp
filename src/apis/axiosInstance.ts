import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios';

import { CustomErrorResponse, CustomInstance } from './types';

const axiosConfig = {
  baseURL: 'https://opentdb.com/api.php',
};

export const axiosInstance: CustomInstance = axios.create(axiosConfig);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onError = (error: AxiosError<CustomErrorResponse>) => {
  if (isAxiosError(error)) {
    const { response } = error;

    const errorCode = response?.data.response_code;

    switch (errorCode) {
      case 1:
        console.error('No Results');
        break;
      case 2:
        console.error('Invalid Parameter');
        break;
      case 3:
        console.error('Token Not Found');
        break;
      case 4:
        console.error('Token Empty');
        break;
      case 5:
        console.error('Rate Limit');
        break;
      default:
        console.error('Unknown Error');
        break;
    }
  }
  console.error(error);
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onError);
