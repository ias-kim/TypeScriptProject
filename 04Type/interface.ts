interface IBook { 
    name: string,
    year: number;
    greet(n: string): void;
    getInfo: () => any;
}

const book: IBook = {
    name: "typescript",
    year: 2024,
    greet(n: string) {
        console.log(`hi ${n}`);
    },
    getInfo: function() {
        return `name: ${this.name}, year: ${this.year}`;
    },
};

book.greet("jpub");
console.log(book.getInfo());

function getObject(key:any, value:any) {
    return {
        name: "jpub",
        [key]: value,
    };
}
console.log(getObject("hello", "world"));

interface IUser {
    name: string;
    [props: string]: string;
}
const k: IUser = {
    name: "kkh",
    job: "police",
}

const g: IUser = {
    name: "leeG",
    team: "sanb",
}