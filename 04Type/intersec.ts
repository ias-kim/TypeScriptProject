interface person {
    name: string;
    city: string;
}

interface employee {
    name: string;
    company: string;
}

const man: person & employee = {
    name: "typescript",
    city: "paju",
    company: "jpub"
}