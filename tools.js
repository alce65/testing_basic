//  Crea una función `isEven` que recibe un argumento y:
// - devuelve `true` si el argumento es entero positivo par
// - devuelve `false` si el argumento es  entero positivo impar.
// - devuelve `null` si el argumento no es un número entero positivo,

export const isNatural = (num) => {
    if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
        return false;
    }
    return true;
};

export const isEven = (num) => {
    return isNatural(num) ? num % 2 === 0 : null;
};

export const isPrime = (num) => {
    if (!isNatural(num)) {
        throw new Error("El número no es un número natural");
    }
    if (num === 0 || num === 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
