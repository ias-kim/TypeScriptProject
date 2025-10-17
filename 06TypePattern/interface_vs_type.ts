interface ICar {
    name: string;
};

interface IAriPlane {
    code: string;
}

interface ITranspot extends ICar, IAriPlane {}

type CarType = {
    name: string;
}

type AirPlane = {
    code: string;
}

type TranspotType = { createdAt: Date} & (CarType | AirPlane);

const c: TranspotType = { createdAt: new Date(), name: "KIA" };
const a: TranspotType = { createdAt: new Date(), name: "boeing" };
