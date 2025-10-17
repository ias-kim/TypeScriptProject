type IPerson = {
    name: string;
    gender: "male" | "female" | "etc";
};

function getProperty(key: keyof IPerson) {
    const person: IPerson = {
        name: "jpub",
        gender: "etc",
    };

    return person[key];
}

// console.log(getProperty("weight"));