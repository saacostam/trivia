import { useCallback, useMemo, useState } from "react";
import { LogAnswer } from "../types";

export function useTriviaStats() {
    const [_answers, setAnswers] = useState<boolean[]>([]);

    const logAnswer: LogAnswer = useCallback((answerValidation: boolean) => {
        setAnswers(prev => ([
            ...prev,
            answerValidation,
        ]))
    }, [])

    const answers = useMemo(() => _answers.filter((_, index) => index % 2 === 0), [_answers])

    return useMemo(() => ({
        answers,
        logAnswer,
    }), [
        answers,
        logAnswer,
    ])
}
