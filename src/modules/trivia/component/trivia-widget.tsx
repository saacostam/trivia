import { useCallback, useEffect, useState } from "react";


import { LogAnswer, Trivia as TriviaType } from "../types"
import { SingleTrivia } from "./trivia";
import { buildControlledTrivia } from "../utils";

export interface TriviaWidgetProps {
    refetch: () => void;
    logAnswer: LogAnswer;
    trivias: TriviaType[];
}

export function TriviaWidget({
    trivias: raw_trivias,
    refetch,
    logAnswer,
}: TriviaWidgetProps) {
    const [trivias, setTrivias] = useState(raw_trivias.map(buildControlledTrivia));
    useEffect(() => setTrivias(raw_trivias.map(buildControlledTrivia)), [raw_trivias]);

    const answerQuestion = useCallback((id: string, answer: string) => {
        setTrivias(trivias => {
            const trivia = trivias.find(trivia => trivia.id === id);
            if (trivia) logAnswer(trivia.correct_answer === answer);

            return trivias.map(
                trivia => trivia.id === id ? { ...trivia, selected: answer } : trivia
            );
        })
    }, [
        logAnswer,
    ]);

    useEffect(() => {
        if (!trivias.some(trivia => !trivia.selected)) {
            setTimeout(() => refetch(), 1000);
        }
    }, [trivias, refetch]);

    return trivias.map(trivia => <SingleTrivia trivia={trivia} answerQuestion={answerQuestion} key={trivia.id} />)
}
