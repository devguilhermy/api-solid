import { User } from "../../entities/User";
import { UserModel } from "../../models/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongodbUsersRepository implements IUsersRepository {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find((user) => user.email === email);

        return user;
    }

    async save(user: User): Promise<User> {
        this.users.push(user);

        return user;
    }
}
