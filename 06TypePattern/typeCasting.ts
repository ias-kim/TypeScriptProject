const div = document.getElementById("my-div") as HTMLDivElement; // 타입 단언 선언

div.addEventListener("click", () => {});

interface IExample {
    data: any;
}

const value: object = { data: 0 };
console.log((value as IExample).data);

console.log((<IExample>value).data)