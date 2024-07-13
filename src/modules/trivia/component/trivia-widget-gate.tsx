import { ErrorHandler } from "../../common";
import { useGetTrivia } from "../fetcher";
import { LogAnswer } from "../types";
import { TriviaWidget } from "./trivia-widget";
import { TriviaWidgetSkeleton } from "./trivia-widget-skeleton";

export interface TriviaWidgetGateProps {
    logAnswer: LogAnswer;
}

export function TriviaWidgetGate({
    logAnswer,
}: TriviaWidgetGateProps) {
    const trivia = useGetTrivia();

    return <>
        {
            trivia.isLoading || trivia.isFetching ? <TriviaWidgetSkeleton />
                : trivia.isError ? <ErrorHandler errors={[[trivia.isError, trivia.error]]} />
                    : trivia.isSuccess ? <TriviaWidget trivias={trivia.data.results} refetch={trivia.refetch} logAnswer={logAnswer} /> : null
        }
    </>
}
