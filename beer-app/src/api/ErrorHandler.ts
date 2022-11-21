import { AxiosError } from 'axios';
import { ApiResponse } from '../models/ApiResponse';

export class ErrorHandler {
    public static handleError<T>(error: AxiosError):ApiResponse<T>{
        // @ts-ignore
        return {success: false, message: error.response?.data?.message, data: []};
    }
}
