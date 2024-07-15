import { IconCheck } from "../../icons";

export interface TriviaStreakProps {
    streak: boolean[];
}

export function TriviaStreak({
    streak,
}: TriviaStreakProps) {
    return (
        <section className="flex justify-center">
            {streak.map(() => (
                <div className="w-8 h-8 bg-success rounded flex justify-center items-center mx-1">
                    <IconCheck />
                </div>
            ))}
        </section>
    )
}
