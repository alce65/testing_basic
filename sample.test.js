import { add } from "./sample";

describe("testing add", () => {
    it("add 1 + 2 should be 3", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("add 1 + -2 should be -1", () => {
        // Arrange
        const n1 = 1;
        const n2 = -2;
        const expected = -1;
        // Act
        const result = add(n1, n2);
        // Assert
        expect(result).toBe(expected);
    });

    it("add 0.5 + 2.4 should be 2.9", () => {
        // Arrange
        const n1 = 0.5;
        const n2 = 2.4;
        const expected = 2.9;
        // Act
        const result = add(n1, n2);
        // Assert
        expect(result).toBe(expected);
    });

    it("add '1' + 2 should be 0", () => {
        // Arrange
        const n1 = "1";
        const n2 = 2;
        const expected = 0;
        // Act
        const result = add(n1, n2);
        // Assert
        expect(result).toBe(expected);
    });
}); // test suite
