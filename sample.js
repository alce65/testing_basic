export const add = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
        return 0;
        //throw new Error("Invalid input");
    }
    return a + b;
};
