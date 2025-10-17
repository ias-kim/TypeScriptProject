interface IPerson {
    name: string;
    gender: "male" | "female" | "etc";
}

interface IStudent extends IPerson {
    ID: string;
    city: string;
}

type StudentType = {
    name: string;
    gender: "male" | "female" | "etc";
    ID: string;
    city: string;
}

const student: IStudent = {
    name: "chaewon",
    gender: "female",
    ID: "1603",
    city: "seoul",
}