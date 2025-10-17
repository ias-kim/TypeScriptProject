let val: undefined = undefined;
console.log(typeof val);

function printValue(value: undefined) {
    console.log(value);
}
printValue(undefined);

function printValue1(v: undefined) {
    const value: string = v ? v : "default";
    console.log(value);
}

printValue1(undefined);