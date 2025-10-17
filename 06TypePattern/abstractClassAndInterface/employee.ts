export abstract class Employee {
    ID: string;
    name: string;
    constructor(ID: string, name: string) {
        this.ID = ID;
        this.name = name;
    }


    greet() {
        console.log(`안녕하세요. 저는 ${this.name}입니다`);
    }

    abstract goToWork();
    abstract getOffWork();
}