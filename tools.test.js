//  Crea una función `isEven` que recibe un argumento y:
// - devuelve `true` si el argumento es entero positivo par
// - devuelve `false` si el argumento es  entero positivo impar.
// - devuelve `null` si el argumento no es un número entero positivo

import { isEven, isPrime } from "./tools";

describe("isEven", () => {
    it("should return true if the argument is an even positive integer", () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(40)).toBe(true);
    });
    it("should return true if the argument is 0", () => {
        expect(isEven(0)).toBe(true);
    });
    it("should return false if the argument is an odd positive integer", () => {
        expect(isEven(3)).toBe(false);
        expect(isEven(41)).toBe(false);
    });
    it("should return null if the argument is not a positive integer", () => {
        expect(isEven(3.5)).toBeNull(); //.toBe(null);
        expect(isEven(-3)).toBe(null);
        expect(isEven("Pepe")).toBe(null);
    });
});

describe("isPrime", () => {
    it("argument not naturel, throw error", () => {
        // act
        const result = () => isPrime(-1);
        // assert
        expect(result).toThrow("El número no es un número natural");
    });
    it("argument not naturel, throw error", () => {
        expect(() => isPrime(-1)).toThrow("El número no es un número natural");
    });
});
