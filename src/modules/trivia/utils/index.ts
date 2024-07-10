import { v4 as uuidv4 } from 'uuid';
import { Trivia, ControlledTrivia } from "../types"

const domParser = new DOMParser();

export const buildControlledTrivia = (trivia: Trivia): ControlledTrivia => ({
    ...trivia,
    question: domParser.parseFromString(trivia.question, 'text/html').body.textContent!,
    correct_answer: domParser.parseFromString(trivia.correct_answer, 'text/html').body.textContent!,
    incorrect_answers: trivia.incorrect_answers.map(answer => domParser.parseFromString(answer, 'text/html').body.textContent!),
    id: uuidv4(),
});
