// 싱글패턴
class Setting {
    value: string = "hello";
    private static _instance: Setting = new Setting();

    private constructor() {}

    public static getInstance() {
        if (!Setting._instance) {
            Setting._instance = new Setting();

            return Setting._instance;
        }

        return Setting._instance;
    }
}

console.log(Setting.getInstance());
Setting.getInstance().value = "world";
console.log(Setting.getInstance());