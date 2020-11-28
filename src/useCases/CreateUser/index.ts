import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const mongodbUsersRepository = new MongodbUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    mongodbUsersRepository,
    mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
