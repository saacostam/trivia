export function TriviaWidgetSkeleton() {
    const commonClassname = "skeleton h-40 mb-8 border animate-pulse"

    return <>
        <div className={commonClassname}></div>
        <div className={commonClassname}></div>
        <div className={commonClassname}></div>
    </>
}
