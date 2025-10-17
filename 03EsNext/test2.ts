
type Operation = {
    operator: string;
    a: number;
    b: number
}
const data: Operation[] = [
    { operator: "+", a: 5, b: 3 },
    { operator: "-", a: 10, b: 4 },
    { operator: "*", a: 6, b: 7 },
    { operator: "/", a: 8, b: 2 },
    { operator: "%", a: 10, b: 3 },   
]

const results: (number | string)[] = [];

for (let i = 0; i < data.length; i++) {
    const { operator, a , b } = data[i];

    let result;

    switch(operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b
            break;
        case '*':
            result = a * b
            break;
        case '/':
            result = b !== 0 ? a / b : "Error: Disivision by zero"
            break;
        default:
            result = 'Error: Unkonw Operator'
    }
    results.push(result)
}
console.log(results)
