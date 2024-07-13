export enum ResponseCode {
    Success = 0,
    NoResults = 1,
    InvalidParameter = 2,
    TokenNotFound = 3,
    TokenEmpty = 4,
    RateLimit = 5,
}

export interface Trivia {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export interface ControlledTrivia extends Trivia {
    id: string;
    selected?: string;
}

export type GetTriviaPayload = {
    response_code: ResponseCode;
    results: Trivia[];
}

export type LogAnswer = (answerValidation: boolean) => void;
