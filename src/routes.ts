import { Router } from "express";
import { User } from "./entities/User";

const router = Router();

router.post("/", (request, response) => {
    const data = {
        name: "arroz",
        email: "feijao@gmail.com",
        password: "batata123",
    };
    const user = new User(data);
    return response.json({ ok: true, user });
});

export { router };
