class Student {
    constructor(private name: string, private id: number) {
        this.name = name;
        this.id = id;
    }

    greet(): void {
        console.log(`hello! I'm ${this.name}`);
    }
}

const s: Student = new Student("hyungki", 4567);
// s.name; // 접근 불가
console.log(s);

class Person {
    #name: string;
    #major: string;
    
    constructor(name: string, major: string) {
        this.#name = name;
        this.#major = major;
    }
    // set age (newAge: number) {
    //     if (newAge < 1) {
    //         this.#age = 0;
    //     } else {
    //         this.#age = newAge;
    //     }
    // }
    // get age() {
    //     return this.age;
    // }
    set name(newName: string) {
        console.log("setter 호출");
        this.#name = newName;
    }
    get name(): string {
        console.log("getter 호출");
        return this.#name;
    }
}

const person: Person = new Person("chansu", "software");
person.name = "hoonseok";
console.log(person.name);