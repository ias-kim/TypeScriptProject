interface IPerson {
    name: string;
    age: number;

    greet(): void;
    offToWork(): void;
    getName(): string;
}


interface IAnimal {
    name: string;
    bark(): void;
}


function printValue<T extends IPerson> (
    o: CT<T>,
    key: keyof CT<T>
): CT<T>[keyof CT<T>] {
    return o[key];
}

type CT<T extends IPerson | IAnimal> = T extends IPerson ? IPerson : IAnimal;
const val = printValue<IPerson>(
    {
        name: "jpub",
        age: 15,
        greet() {},
        offToWork() {},
        getName() {
            return this.name;
        },
    },
    "age",
);


// const val2 = printValue<IAnimal>({ name: "dog", bark() {} }, "name");