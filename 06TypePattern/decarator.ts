import { IsString } from "./validation";
class Person {
    @IsString()
    name: any = true;

    constructor(name: any) {
        this.name = name;
    }
}

const p = new Person("jpunb")
p.name = undefined;
console.log(p.name);