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

    const answers = useMemo(() => _answers.filter((_, index) => index % 2 === 0), [_answers]);

    const streak = useMemo(() => {
        let inStreak = true;
        const streak = [];

        for (let i = answers.length - 1; i >= 0; i--) {
            const answer = answers[i];

            if (!answer) inStreak = false;
            else if (inStreak) streak.push(answer);
        }

        return streak
    }, [answers]);

    return useMemo(() => ({
        streak,
        answers,
        logAnswer,
    }), [
        streak,
        answers,
        logAnswer,
    ])
}
