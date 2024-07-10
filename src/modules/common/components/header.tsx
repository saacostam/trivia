import { twMerge } from "tailwind-merge";

export interface HeaderProps {
    title: string;
    level?: 1 | 2 | 3;
    className?: string;
}

export function Header({
    title,
    level: _level,
    className,
}: HeaderProps) {
    const level = _level || 3;

    const commonClassName = "font-bold text-primary"

    const content = title;
    return level === 1 ?
        <h1 className={twMerge(commonClassName, "text-4xl", className)}>{content}</h1> : level === 2 ?
            <h2 className={twMerge(commonClassName, "text-2xl", className)}>{content}</h2> :
            <h3 className={twMerge(commonClassName, "text-l", className)}>{content}</h3>
}
