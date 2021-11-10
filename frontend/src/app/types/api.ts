export interface ApiResponse<T> {
    errorCode: number;
    errorMessage: string;
    response: T
}

export interface Tweets{
    created: Date;
    id: number;
    full_text: string;
    id_str: string;
    retweet_count: number;
    favorite_count: number;
    media: string;
}