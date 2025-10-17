import { cloneDeep } from "lodash";
function factorial(num: number): number {
    if(num <= 1) return 1;

    return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(1));

const ob1 = { name: 'job' };
const ob2 = { ...ob1 };



// 스프레드 연산자
const ob = {
    name: "job"
};
const arr = ["hello", "world"];

const newOb = { ...ob }; // 참조는 유지함
newOb.name = "hello";

const newOb1 = cloneDeep(ob);
console.log(newOb1);
console.log(ob);

