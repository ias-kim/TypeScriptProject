/**
 * function add(a: 인자 타입, b: 인자 타입): 반환 타입 {
 * return a+b;
 * }
 */

function addFunction(a: number, b: number): number {
    return a + b;
}
const greet = (name: string):void => {
    console.log("hello" + name);
}

const add: (a: number, b: number) => number = addFunction;

const minus: (a: number, b: number) => number = (
    a: number,
    b: number,
): number => {
    return a - b
};

// 가독성 안좋은 예 고차 함수
const complexAdd: (a: number, b: number, c: number
) => (b: number, c: number) => (c: number) => number = (
    a: number,
    b: number,
    c: number
): ((b: number, c: number) => (c: number) => number) => {
    return (b: number, c: number): ((c: number) => number) => {
        return (c: number): number => {
            return a + b + c;
        };
    };
};
