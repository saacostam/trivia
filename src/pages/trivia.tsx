import { useMemo } from "react";
import { Header, Progress } from "../modules/common";
import { TriviaWidgetGate, useTriviaStats } from "../modules/trivia";

export function TriviaPage() {
    const {
        answers,
        logAnswer,
    } = useTriviaStats();

    const progressTotal = answers.length;
    const progressValue = useMemo(() => answers.filter(Boolean).length, [answers])

    return (
        <>
            <Header title="Trivia App" level={1} className='mb-8 text-center' />
            <TriviaWidgetGate
                logAnswer={logAnswer}
            />
            <Progress
                value={progressValue}
                total={progressTotal}
            />
        </>
    )
}
