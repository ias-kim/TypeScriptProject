// 나머지 연산자
const [one, two, ...nums] =  [0, 1, 2, 3, 4, 5];

console.log(one, two, nums);

const { password: any, ...user } = {
    nickname: "yutae",
    password: "1234a",
    createdAt: 2024,
}

console.log(user);
console.log(any);