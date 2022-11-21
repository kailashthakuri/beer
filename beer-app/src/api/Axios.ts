import axios, { AxiosInstance } from 'axios';


/**
 * Axios helper methods
 */
export class Axios {
    private static instance: AxiosInstance;

    static getInstance(): AxiosInstance {
        if (!Axios.instance) {
            Axios.instance = axios.create({
                baseURL: 'https://api.punkapi.com/v2/'
            });
        }
        return this.instance;
    }

}
