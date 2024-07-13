import { useMemo } from "react";
import { ControlledTrivia } from "../types"
import { twMerge } from "tailwind-merge";

export interface TriviaProps {
    trivia: ControlledTrivia;
    answerQuestion: (id: string, answer: string) => void;
}

export function SingleTrivia({
    trivia,
    answerQuestion,
}: TriviaProps) {
    const optionsInRandomOrder = useMemo(() => ([
        trivia.correct_answer,
        ...trivia.incorrect_answers,
    ].sort(() => -0.5 + Math.random())), [
        trivia.correct_answer,
        trivia.incorrect_answers,
    ])

    return (
        <div className={twMerge("card w-128 shadow-xl mb-8 border border-2", !trivia.selected ? "" : trivia.selected === trivia.correct_answer ? "border-success" : "border-error")}>
            <div className="card-body">
                <p className="text-xl mb-4 text-center">{trivia.question}</p>
                <div className="card-actions justify-center">
                    {optionsInRandomOrder.map(
                        option => <button className={
                            twMerge("btn", !trivia.selected ? "btn-secondary" : option === trivia.correct_answer ? "btn-success" : "btn-error")
                        } key={option}
                            onClick={() => answerQuestion(trivia.id, option)}>
                            {option}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}
