import axios from "axios";

interface IResponse {
    data: {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    };
}

// 비동기 처리 axios 처리 예시
(async function () {
    const data: Awaited<Promise<IResponse["data"]>> = await axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res: IResponse) => res.data);

    console.log(data);

    return data;
})();

// 프로퍼티를 옵셔널로 만듬 -> 거의 안씀
(async function () {
    const p: Partial<IResponse["data"]> = {};
})();

interface IResponse1 {
    data: {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
        dirty: any;
        Dirty: any;
    }
}

// 재사용 극대화 유틸리티 타입
const data1: Omit<IResponse1["data"], "dirty"> = {
    userId: 1,
    id: 1,
    title: "4",
    completed: true,
    Dirty: "",
}

const data2: Omit<IResponse1["data"], "dirty" | "Dirty"> = {
    userId: 2,
    id: 2,
    title: "5",
    completed: true,
}