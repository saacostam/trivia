import { useMemo } from "react";
import { ErrorHandler, Progress } from "../../common";
import { useGetTrivia } from "../fetcher";
import { TriviaWidget } from "./trivia-widget";
import { TriviaWidgetSkeleton } from "./trivia-widget-skeleton";
import { useTriviaStats } from "../hooks";
import { TriviaStreak } from "./trivia-streak";

export function TriviaWidgetGate() {
    const {
        streak,
        answers,
        logAnswer,
    } = useTriviaStats();

    const trivia = useGetTrivia();

    const progressTotal = answers.length;
    const progressValue = useMemo(() => answers.filter(Boolean).length, [answers])

    return <>
        {
            trivia.isLoading || trivia.isFetching ? <TriviaWidgetSkeleton />
                : trivia.isError ? <ErrorHandler errors={[[trivia.isError, trivia.error]]} />
                    : trivia.isSuccess ? <TriviaWidget trivias={trivia.data.results} refetch={trivia.refetch} logAnswer={logAnswer} /> : null
        }
        <Progress
            value={progressValue}
            total={progressTotal}
        />
        <TriviaStreak
            streak={streak}
        />
    </>
}
