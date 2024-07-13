import { useQuery } from "react-query";
import { QueryKeys } from "../../react-query";
import { GetTriviaPayload } from "../types";

const DEFAULT_ERROR_MESSAGE = 'Error when trying to fetch trivia questions.';

function getTrivia() {
    return fetch("https://opentdb.com/api.php?amount=3").then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(res.statusText || DEFAULT_ERROR_MESSAGE);
        }
    }).catch(e => {
        throw new Error(e.message || DEFAULT_ERROR_MESSAGE);
    });
}

export function useGetTrivia() {
    return useQuery<GetTriviaPayload, Error>({
        queryKey: [QueryKeys.GET_TRIVIA],
        queryFn: () => getTrivia(),
        refetchOnWindowFocus: false,
    })
}
