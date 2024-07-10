import { useCallback, useEffect, useState } from "react";


import { Trivia as TriviaType } from "../types"
import { Trivia } from "./trivia";
import { buildControlledTrivia } from "../utils";

export interface TriviaWidgetProps {
    trivias: TriviaType[];
    refetch: () => void;
}

export function TriviaWidget({
    trivias: raw_trivias,
    refetch,
}: TriviaWidgetProps) {
    const [trivias, setTrivias] = useState(raw_trivias.map(buildControlledTrivia));
    useEffect(() => setTrivias(raw_trivias.map(buildControlledTrivia)), [raw_trivias]);

    const answerQuestion = useCallback((id: string, answer: string) => {
        setTrivias(trivias => trivias.map(
            trivia => trivia.id === id ? { ...trivia, selected: answer } : trivia
        ))
    }, []);

    useEffect(() => {
        if (!trivias.some(trivia => !trivia.selected)) {
            setTimeout(() => refetch(), 1000);
        }
    }, [trivias, refetch]);

    return trivias.map(trivia => <Trivia trivia={trivia} answerQuestion={answerQuestion} key={trivia.id} />)
}
