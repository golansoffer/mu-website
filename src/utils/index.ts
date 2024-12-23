export type Merge<T, U> = Omit<T, keyof U> & U;

export function getRandomNumberInRange(min: number, max: number) {
    if (min > max) {
        throw new Error("Min should be less than or equal to Max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const fnPlaceholder = () => null;