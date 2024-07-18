import { useEffect, useState } from "react";

import { LogAnswer, Trivia as TriviaType } from "../types"
import { SingleTrivia } from "./trivia";
import { buildControlledTrivia } from "../utils";

export interface TriviaWidgetProps {
    refetch: () => void;
    trivias: TriviaType[];
    logAnswer: LogAnswer;
}

export function TriviaWidget({
    trivias: raw_trivias,
    refetch,
    logAnswer,
}: TriviaWidgetProps) {
    const [trivias, setTrivias] = useState(raw_trivias.map(buildControlledTrivia));
    useEffect(() => setTrivias(raw_trivias.map(buildControlledTrivia)), [raw_trivias]);

    const answerQuestion = (id: string, answer: string) => {
        const trivia = trivias.find(trivia => trivia.id === id);
        if (trivia) logAnswer(trivia.correct_answer === answer);


        setTrivias(trivias => {
            return trivias.map(
                trivia => trivia.id === id ? { ...trivia, selected: answer } : trivia
            );
        })
    };

    useEffect(() => {
        if (!trivias.some(trivia => !trivia.selected)) {
            setTimeout(() => refetch(), 1000);
        }
    }, [trivias, refetch]);

    return (
        <>
            {trivias.map(trivia => <SingleTrivia trivia={trivia} answerQuestion={answerQuestion} key={trivia.id} />)}
        </>
    )
}
