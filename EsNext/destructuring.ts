const [publisher, book] = ["jpub", "typescript", "helloworld!"];

console.log(publisher);
console.log(book);

// 객체에서 구조할당
const { name: userName, password: userPassword, createdAt: userCreated } = {
    name: "yongsoo",
    password: "qwer1234",
    createdAt: 2024
};

console.log(userName, userPassword, userCreated);