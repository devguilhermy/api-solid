import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(
            data.email
        );

        if (userAlreadyExists) {
            throw new Error("Email address in in use");
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Equipe App",
                email: "suporte@app.com",
            },
            subject: "Bem vindo ao App",
            body: `<h1>Welcome ${data.name}</h1>`,
        });
    }
}
