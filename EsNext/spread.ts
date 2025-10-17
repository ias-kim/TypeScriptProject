// 전개 연산자
const source = {
    code: 301,
    type: "C",
    location: "KO",
};
const target = {
    value: "jpub",
    lang: "typescript",
}

const result = { ...source, ...target };

console.log(result);