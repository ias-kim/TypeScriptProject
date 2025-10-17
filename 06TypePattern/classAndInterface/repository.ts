import { IUser } from "./database";
export interface IUserRepository {
    save(name: string): IUser;
    findAll(): Array<IUser>; // IUser[]도 되고 Array<IUser>도 됨.

    findOne(userId: number): IUser | undefined;

    deleteUser(name: string): IUser | void;
}