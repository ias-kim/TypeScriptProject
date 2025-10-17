enum EColor {
    red,
    blue,
    green
};

type IColor = {
    [keys in EColor]: string;
};

type IIColor = {
    [props in "red" | "blue" | "green"]: string;
};