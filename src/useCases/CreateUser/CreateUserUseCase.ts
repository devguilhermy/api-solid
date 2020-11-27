import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(
            data.email
        );

        if (userAlreadyExists) {
            throw new Error("Email address in in use");
        }

        const user = new User(data);

        await this.usersRepository.save(user);
    }
}