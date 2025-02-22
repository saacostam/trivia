import { useMemo } from "react";
import { Header } from "./header";
import { IconArrowPath, IconX } from "../../icons";

type ErrorKeyValuePair = [boolean, Error];

export interface ErrorHandlerProps {
    errors: ErrorKeyValuePair[];
}

export function ErrorHandler({
    errors,
}: ErrorHandlerProps) {
    const errorsThatHappened = useMemo(
        () => errors.filter(([isError]) => isError),
        [errors]
    );

    return <section className="mx-auto max-w-80 p-8 border rounded-2xl border-error border-2">
        <div className="w-32 h-32 bg-error mx-auto rounded flex items-center justify-center mask mask-circle">
            <IconX />
        </div>
        <Header title="Something went wrong!" className="text-error font-bold text-center my-4 text-2xl" level={3} />
        <ul className="border rounded border-error p-4 px-8 h-32 list-disc overflow-y-scroll mb-8">
            {
                errorsThatHappened.map(([, error]) => <li className="text-error text-sm">{error.message}</li>)
            }
        </ul>
        <div className="flex justify-center">
            <button className="btn btn-outline btn-error mx-auto" onClick={() => window.location.reload()}>
                <IconArrowPath />
                Retry
            </button>
        </div>
    </section>
}
