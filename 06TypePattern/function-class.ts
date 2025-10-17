// export class Calculator {
//     constructor(
//         private a: number,
//         private b: number,
//     ) {}
    
//     add () {
//         return this.a + this.b;
//     }
//     minus() {
//         return this.a - this.b;
//     }
//     multi() {
//         return this.a * this.b;
//     }
//     division() {
//         return this.a / this.b;
//     }
// }

// const cal: Calculator = new Calculator(9, 3);
// console.log(cal.add(), cal.minus(), cal.multi(), cal.division());

export interface ICalculator {
    a: number;
    b: number;
    add(): number;
    minus(): number;
    multi(): number;
    division(): number;
}

export function Calculator(this: any, a: number, b: number): void {
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function() {
    return this.a + this.b;
}

Calculator.prototype.minus = function() {
    return this.a - this.b;
}

Calculator.prototype.multi = function() {
    return this.a * this.b;
}

Calculator.prototype.division = function() {
    return this.a / this.b;
}