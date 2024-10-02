export function cancellable_TimeOut(fn, args, t) {
    const timerId = setTimeout(() => fn(...args), t);
    return () => clearTimeout(timerId);
}
//# sourceMappingURL=Clear.js.map