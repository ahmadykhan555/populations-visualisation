import axios, { AxiosResponse } from "axios";

export const httpGET = (url: string): Promise<AxiosResponse> => {
  return axios.get(url);
};

export const httpPOST = (url: string, body = {}): Promise<AxiosResponse> => {
  return axios.post(url, body);
};
