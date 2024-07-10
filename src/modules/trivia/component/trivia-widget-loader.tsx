import { ErrorHandler, Header } from "../../common";
import { useGetTrivia } from "../fetcher";
import { TriviaWidget } from "./trivia-widget";
import { TriviaWidgetSkeleton } from "./trivia-widget-skeleton";

export function TriviaWidgetLoader() {
    const { data, isLoading, isSuccess, isError, error, isFetching, refetch } = useGetTrivia();

    return <>
        <Header title="Trivia App" level={1} className='mb-8 text-center' />
        {
            isLoading || isFetching ? <TriviaWidgetSkeleton />
                : isError ? <ErrorHandler errors={[[isError, error]]} />
                    : isSuccess ? <TriviaWidget trivias={data.results} refetch={refetch} /> : null
        }
    </>
}
