import { PropsWithChildren } from "react";

export function Container({
    children,
}: PropsWithChildren) {
    return (
        <section className="max-w-7xl mx-auto py-8 px-2">
            {children}
        </section>
    )
}
