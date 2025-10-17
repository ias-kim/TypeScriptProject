interface IAdd {
    (a: number, b: number): number;
}

const addFunc: IAdd = (a, b) => {
    return a + b;
};

console.log(addFunc(1 ,2));

type SumModuleFunc = { new (a: number, b: number): void };

interface ISumModule {
    src: number;
    target: number;
    getResult(): number;
}

const sumModule: SumModuleFunc = function (this: ISumModule, a: number, b: number) {
    this.src = a;
    this.target = b;

    this.getResult = function() {
        return this.src + this.target;
    };
} as any;

const mySum = new sumModule(1, 2);

// console.log(mySum.src, mySum.target, mySum.getResult())