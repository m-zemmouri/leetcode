export function cancellable(fn, args, t) {
    let stop = false;
    const repeat = () => {
        if (stop)
            return;
        fn(...args);
        setTimeout(() => repeat(), t);
    };
    repeat();
    return () => (stop = true);
}
//# sourceMappingURL=Clear.js.map