import { Employee } from "./employee";
import { IWork, IManagement } from "./work";
class President extends Employee implements IManagement {
    goToWork() {
        console.log("7시 출근");
    }
    getOffWork() {
        console.log("5시 퇴근");
    }
    manage() {
        console.log("경영");
    }
    meeting() {
        console.log("회의");
    }
}

class FullTime extends Employee implements IWork {
    goToWork() {
        console.log("9시 출근");
    }
    getOffWork() {
        console.log("6시 퇴근");
    }
    ms() {
        console.log("vscode");
    }
    personal() {
        console.log("개인업무")
    }
}

class Contract extends Employee implements IWork {
    goToWork() {
        console.log("10시 출근");
    }
    getOffWork() {
        console.log("4시 퇴근");
    }
    ms() {
        console.log("파워포인트 엑셀");
    }
    personal() {
        console.log("개인업무");
    }
}