import { Router } from "express";

const router = Router();

router.post("/", (request, response) => {
    return response.json({ ok: true });
});

export { router };
