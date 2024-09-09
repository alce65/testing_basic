import { factorial } from "./factorial";

describe("factorial", () => {
    const cases = [
        [0, 1],
        [1, 1],
        [5, 120],
        [10, 3_628_800],
        [20, 2_432_902_008_176_640_000],
    ];

    const objectCases = [
        { input: 0, expected: 1 },
        { input: 1, expected: 1 },
        { input: 5, expected: 120 },
        { input: 10, expected: 3_628_800 },
        { input: 20, expected: 2_432_902_008_176_640_000 },
    ];

    it.each(objectCases)(
        "should return $expected if the arguments is $input",
        ({ input, expected }) => {
            expect(factorial(input)).toBe(expected);
        }
    );

    // it("should return 1 if the argument is 0", () => {
    //     expect(factorial(0)).toBe(1);
    // });
    // it("should return 1 if the argument is 1", () => {
    //     expect(factorial(1)).toBe(1);
    // });
    // it("should return 120 if the argument is 5", () => {
    //     expect(factorial(5)).toBe(120);
    // });
    // it("should return 3628800 if the argument is 10", () => {
    //     expect(factorial(10)).toBe(3_628_800);
    // });
    // it("should return 2432902008176640000 if the argument is 20", () => {
    //     expect(factorial(20)).toBe(2_432_902_008_176_640_000);
    // });
});
