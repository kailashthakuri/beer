export interface ApiError {
    message?: string;
}

export interface ApiResponse<T> extends  ApiError{
    data: T,
    success: boolean;
}
