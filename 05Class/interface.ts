interface IPerson {
    name: string;
    greet(): void;
}
interface IStudent {
    ID: string
}

class Person implements IPerson {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet(): void {
        console.log(`hello ${this.name}`);
    }
}

// 단일 상속
class Employee  extends Person {
    constructor(public company: string, name: string) {
        super(name);
    }
}

// 다중 상속 -> 인터페이스
class Employee1 implements IPerson, IStudent {
    constructor(public company: string, public name: string, public ID: string) {}
    greet() {

    }
}