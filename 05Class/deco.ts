class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @wrapper("some data")
    greet(a: number, b: number, c: number) {
        console.log(`hello ${this.name}`);
    }
}


function hello(originalMethod: any, _context: ClassMethodDecoratorContext) {
    console.log(originalMethod);
    console.log(_context)

    return function (this: any, ...args: any[]) {
        const result = args.reduce((a, b) => a + b);
        originalMethod.call(this, ...args);
        console.log(result);
    };
}

function wrapper(param) {
    console.log(param);
    return function (org: Function, ctx: ClassMethodDecoratorContext) {
        return function (this: any, ...args: any[]) {
            console.log(param + " inner deco");
            org.call(this, ...args);
        };
    };
}
const p: Person = new Person("name");
p.greet(1, 2, 3);

function jpub(constructor: any, context: any) {
    console.log(new constructor("minseon"));
    console.log(context)
}

@jpub
class Person2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
