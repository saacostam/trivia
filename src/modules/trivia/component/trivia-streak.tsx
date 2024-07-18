import { IconCheck } from "../../icons";

export interface TriviaStreakProps {
    streak: boolean[];
}

export function TriviaStreak({
    streak,
}: TriviaStreakProps) {
    return (
        <section className="flex justify-center mt-4">
            {
                streak.length > 0 ?
                    streak.map((_, index) => (
                        <div className="w-8 h-8 bg-success rounded flex justify-center items-center mx-1 animate-bounce" key={index}>
                            <IconCheck />
                        </div>
                    )) : <div className="w-32 h-8 bg-base text-base-content rounded flex justify-center items-center animate-pulse">
                        <span>Empty Streak</span>
                    </div>
            }
        </section>
    )
}
