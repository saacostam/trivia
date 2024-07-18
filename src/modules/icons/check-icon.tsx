import { twMerge } from "tailwind-merge";
import { IconProps } from "./interfaces";

export function IconCheck({
    className
}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={twMerge("size-6", className)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    )
}
