// function printValue(value: number | string) {
//     if (typeof value === "string") console.log(value.length);
//     if (typeof value === "number") console.log(value);
// }

interface IPerson {
    name: string;
    greet(): void;
}


interface ICar {
    name: string;
    ride(): void;
}

interface IAnimal {
    name: string;
    growl(): void;
}

function isPerson(p: any): p is IPerson {
    return "name" in p && "greet" in p;
} 

function isCar(p: any): p is ICar {
    return "name" in p && "ride" in p;
}

function isAnimal(p: any): p is IAnimal {
    return "name" in p && "growl" in p;
}

function printValue(value: IPerson | ICar | IAnimal) {
    if (isPerson(value)) value.greet();
    if (isCar(value)) value.ride();
    if (isAnimal(value)) value.growl();
}

interface IBreakPoint<T> {
    type: T;
}

interface IPerson extends IBreakPoint<"person"> {
    name: string;
    greet(): void;
}

interface ICar extends IBreakPoint<"car"> {
    name: string;
    ride(): void;
}

interface IAnimal extends IBreakPoint<"animal"> {
    name: string;
    growl(): void;
}