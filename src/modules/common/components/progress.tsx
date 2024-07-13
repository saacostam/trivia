export interface ProgressProps {
    value: number;
    total: number;
}

export function Progress({
    value,
    total,
}: ProgressProps) {
    return (
        <section>
            <div className="flex items-center m-4">
                <div className="text-success font-bold">{total === 0 ? "" : (value / total * 100).toFixed(0)}%</div>
                <progress
                    max={total === 0 ? 2 : total}
                    value={total === 0 ? 1 : value}
                    className="progress progress-success bg-error mx-2 h-3"
                ></progress>
                <div className="text-error ml-auto font-bold">{total === 0 ? "" : ((total - value) / total * 100).toFixed(0)}%</div>
            </div>
        </section>
    )
}
