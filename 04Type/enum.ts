function printGender(gender: string) {
    if (gender === "male") {
        console.log("남자");
    } 
    if (gender === "female") {
        console.log("여자")
    }
    if (gender === "etc") {
        console.log("기본");
    }
}
printGender("man")

enum EGender {
    male,
    female,
    etc,
}
function printGenderEnum(gender: EGender) {
    if (gender == EGender.male) {
        console.log("남자");
    }
    if (gender == EGender.female) {
        console.log("여자");
    }
    if (gender == EGender.etc) {
        console.log("기본");
    }
}

printGenderEnum(EGender.male);
printGenderEnum(EGender.female);

// 부적절한 예
// const g1: EGender = "etc";

// 올바른 예
const g2: EGender = EGender["etc"];
const g3: EGender = EGender.etc;

// var EGender1;
// (function (EGender1) {
//     EGender[EGender["male"] = 0] = "male";
//     EGender[EGender["female"] = 1] = "female";
//     EGender[EGender["etc"] = 2] = "etc";
// })(EGender || (EGender = {}));