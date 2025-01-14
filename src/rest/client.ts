import axios from "axios";
import { OMDB_API, OMDB_API_KEY } from "../config";

const Axios = axios.create({ baseURL: OMDB_API });

Axios.interceptors.request.use(
  (config) => {
    if (!config.params) {
      config.params = {};
    }

    config.params.apikey = OMDB_API_KEY;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }
}
