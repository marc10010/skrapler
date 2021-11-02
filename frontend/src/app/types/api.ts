export interface ApiResponse<T> {
    errorCode: number;
    errorMessage: string;
    response: T
}