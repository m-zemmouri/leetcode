"use strict";
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
// type Fn = (...args: JSONValue[]) => void
function cancellable(fn, args, t) {
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