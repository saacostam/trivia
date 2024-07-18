import { useMemo, useState } from "react";
import { LogAnswer } from "../types";

export function useTriviaStats() {
    const [answers, setAnswers] = useState<boolean[]>([]);

    const logAnswer: LogAnswer = (answerValidation: boolean) => {
        setAnswers(prev => ([
            ...prev,
            answerValidation,
        ]))
    }

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

    return {
        streak,
        answers,
        logAnswer,
    };
}
