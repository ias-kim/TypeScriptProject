function addFunction1(a: number, b:number): number {
    return a + b
}

type SumFunc = (a: number, b: number) => number;
const add: SumFunc = addFunction1;
const minus: SumFunc = (a: number, b: number): number => {
    return a - b
};

type complexAddFunc = (
    a: number,
    b: number,
    c: number
) => (b: number, c: number) => (c: number) => number;

const complexAdd = (a: number, b: number, c: number) => {
    return (b: number, c: number) => {
        return (c: number) => {
            return a + b + c
        };
    };
};

