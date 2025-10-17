interface IValue<T> {
    data: T;
}

const x: IValue<string> = {
    data: "hello",
};
const y: IValue<number> = {
    data: 98,
};
const z: IValue<boolean> = {
    data: true,
};

interface IValue1<T, G, V> {
    first: T;
    second: G;
    third: V;
}

const value: IValue1<string, number, boolean> = {
    first: "hello world",
    second: 22,
    third: true,
};
