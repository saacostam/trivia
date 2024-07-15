import { ErrorHandler } from "../../common";
import { useGetTrivia } from "../fetcher";
import { TriviaWidget } from "./trivia-widget";
import { TriviaWidgetSkeleton } from "./trivia-widget-skeleton";

export function TriviaWidgetGate() {
    const trivia = useGetTrivia();

    return <>
        {
            trivia.isLoading || trivia.isFetching ? <TriviaWidgetSkeleton />
                : trivia.isError ? <ErrorHandler errors={[[trivia.isError, trivia.error]]} />
                    : trivia.isSuccess ? <TriviaWidget trivias={trivia.data.results} refetch={trivia.refetch} /> : null
        }
    </>
}
