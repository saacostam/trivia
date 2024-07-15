import { Header } from "../modules/common";
import { TriviaWidgetGate } from "../modules/trivia";

export function TriviaPage() {
    return (
        <>
            <Header title="Trivia App" level={1} className='mb-8 text-center' />
            <TriviaWidgetGate />
        </>
    )
}
