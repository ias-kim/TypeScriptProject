export function IsString() {
    return function <T>(target: undefined, context: ClassFieldDecoratorContext) {
        return function (this: T, value: string | undefined) {
            const propertyKey = context["name"] as string;

            Object.defineProperties(this, {
            ["_" + propertyKey]: {
                value: this[propertyKey],
                configurable: true,
                enumerable: true,
                writable: true,
            },
            [propertyKey]: {
                configurable: true,
                enumerable: true,
                get(): string {
                    return this["_" + propertyKey];
                },
                set(newValue: string) {
                    if (typeof newValue != "undefined" && typeof newValue != "string")
                        throw new Error("string type error");
                this["_" + propertyKey] = newValue;
                },
            },
        });
        };
    };
}