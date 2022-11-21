import { Axios } from './Axios';
import { Beer } from '../models/Beer';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiResponse } from '../models/ApiResponse';
import { Pagination } from '../models/Pagination';
import { ErrorHandler } from './ErrorHandler';

export class BeerApis {
    private static Instance: AxiosInstance = Axios.getInstance();

    public static async getAll(pagination: Pagination): Promise<ApiResponse<Array<Beer>>> {
        try {
            const {data} = await BeerApis.Instance.get(`beers?page=${pagination.offset}&per_page=${pagination.pageSize}`)
            return {success: true, data};
        } catch (e: any) {
            return ErrorHandler.handleError(e as AxiosError);
        }
    }
}
