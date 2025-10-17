import { IUser, user } from "./database";
import { IUserRepository } from "./repository";

export class UserRepository implements IUserRepository {
    save(name: string): IUser {
        const newId =
            Math.floor(Math.random() * 100) + Math.floor(Math.random() * 1000)

        const newUser: IUser = {
            userId: newId,
            name,
        };

        user.push(newUser);

        return newUser;
    };

    findAll(): Array<IUser> {
        return user;
    }

    findOne(userId: number): IUser {
        const result = user.find((element) => element.userId === userId);

        if (!result) throw new Error("없는 유저");

        return result;
    }

    deleteUser(name: string): IUser | void {
        const i = user.findIndex((element) => element.name === name)

        return user.splice(i, 1)[0];
    }

}